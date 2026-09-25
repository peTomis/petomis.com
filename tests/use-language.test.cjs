const assert = require('node:assert/strict')
const { test } = require('node:test')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')

const code = ts.transpileModule(fs.readFileSync('src/hooks/useLanguage.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText

function harness(locale, saved, fail = false) {
  const ref = { current: false }
  let effects = []
  let stored = saved
  const navigations = []
  const router = {
    locale, defaultLocale: 'en-US', isReady: true,
    pathname: '/', asPath: '/?from=portfolio#contact-container',
    async replace(pathname, asPath, options) {
      navigations.push({ pathname, asPath, ...options })
      if (fail) throw new Error('Offline')
      router.locale = options.locale
      return true
    },
  }
  const exports = {}
  vm.runInNewContext(code, {
    exports,
    console: { error() {} },
    require(name) {
      if (name === 'react') return {
        useCallback: (fn) => fn,
        useRef: () => ref,
        useEffect: (fn) => effects.push(fn),
      }
      if (name === 'next/router') return { useRouter: () => router }
      if (name === './useLocalStorage') return {
        useLocalStorage: () => [stored, (value) => { stored = value }],
      }
      throw new Error(`Unexpected import: ${name}`)
    },
  })
  return {
    router, navigations,
    get stored() { return stored },
    render() {
      effects = []
      const result = exports.useLanguage()
      effects.forEach((fn) => fn())
      return result
    },
  }
}
const settle = () => new Promise((resolve) => setImmediate(resolve))

test('restores saved Italian once and preserves query/hash', async () => {
  const h = harness('en-US', 'it-IT')
  assert.equal(h.render()[0].code, 'en-US') // matches server markup
  await settle()
  assert.equal(h.render()[0].code, 'it-IT')
  assert.equal(h.stored, 'it-IT')
  assert.equal(h.navigations.length, 1)
  assert.equal(h.navigations[0].asPath, '/?from=portfolio#contact-container')
  assert.equal(h.navigations[0].scroll, false)
})
test('explicit Italian URL wins over saved English', () => {
  const h = harness('it-IT', 'en-US')
  assert.equal(h.render()[0].code, 'it-IT')
  assert.equal(h.stored, 'it-IT')
  assert.equal(h.navigations.length, 0)
})
test('manual English selection persists and is not redirected back', async () => {
  const h = harness('it-IT', 'it-IT')
  const [, select, languages] = h.render()
  select(languages[0])
  await settle()
  assert.equal(h.render()[0].code, 'en-US')
  assert.equal(h.stored, 'en-US')
  assert.equal(h.navigations.length, 1)
})
test('failed navigation retains the active language and saved preference', async () => {
  const h = harness('en-US', 'en-US', true)
  const [, select, languages] = h.render()
  select(languages[1])
  await settle()
  assert.equal(h.render()[0].code, 'en-US')
  assert.equal(h.stored, 'en-US')
})
test('invalid saved language falls back without navigation', () => {
  const h = harness('en-US', 'invalid')
  assert.equal(h.render()[0].code, 'en-US')
  assert.equal(h.stored, 'en-US')
  assert.equal(h.navigations.length, 0)
})
test('subsequent route changes are not overridden by stale hook state', async () => {
  const h = harness('it-IT', 'it-IT')
  h.render()
  h.router.locale = 'en-US'
  assert.equal(h.render()[0].code, 'en-US')
  await settle()
  assert.equal(h.navigations.length, 0)
})
