import { useEffect, useState } from "react"

type ScriptStep = { cmd: string } | { out: string; className: string }

const SCRIPT: ScriptStep[] = [
  { cmd: "whoami" },
  { out: "Giuseppe Tomis — Software Engineer", className: "text-ink" },
  { cmd: "cat stack.txt" },
  { out: "aws · kubernetes · go · typescript", className: "text-ink-muted" },
  { cmd: "./ship --to production" },
  { out: "✓ deployed · zero downtime", className: "text-electric" },
]

// A line is either a (possibly partially typed) command or an output line.
type Line =
  | { kind: "cmd"; text: string; typing: boolean }
  | { kind: "out"; text: string; className: string }
  | { kind: "prompt" }

const Cursor = () => (
  <span className="inline-block w-2 h-[1em] bg-electric translate-y-[2px] animate-blink" />
)

const Prompt = () => <span className="text-electric">$</span>

/**
 * macOS-style terminal window that auto-types {@link SCRIPT} in an infinite
 * loop. The body has a fixed height so the typing never reflows the hero.
 * With `prefers-reduced-motion` the finished transcript is shown statically.
 */
const Terminal = () => {
  const [lines, setLines] = useState<Line[]>([])

  useEffect(() => {
    const finished: Line[] = [
      ...SCRIPT.map<Line>((step) =>
        "cmd" in step
          ? { kind: "cmd", text: step.cmd, typing: false }
          : { kind: "out", text: step.out, className: step.className }
      ),
      { kind: "prompt" },
    ]

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLines(finished)
      return
    }

    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []
    const wait = (ms: number) =>
      new Promise<void>((resolve) => timers.push(setTimeout(resolve, ms)))

    const run = async () => {
      while (!cancelled) {
        let current: Line[] = []
        setLines(current)
        await wait(360)

        for (const step of SCRIPT) {
          if (cancelled) return
          if ("cmd" in step) {
            for (let i = 1; i <= step.cmd.length; i++) {
              if (cancelled) return
              const typed: Line = {
                kind: "cmd",
                text: step.cmd.slice(0, i),
                typing: true,
              }
              setLines([...current, typed])
              await wait(44 + Math.random() * 46)
            }
            current = [...current, { kind: "cmd", text: step.cmd, typing: false }]
            setLines(current)
            await wait(270)
          } else {
            current = [
              ...current,
              { kind: "out", text: step.out, className: step.className },
            ]
            setLines(current)
            await wait(620)
          }
        }

        setLines([...current, { kind: "prompt" }])
        await wait(3400)
      }
    }
    run()

    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [])

  return (
    <div className="relative w-[420px] max-w-full animate-float-y">
      <div
        aria-hidden="true"
        className="absolute pointer-events-none -inset-3 blur-[8px]"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(30,167,255,.22), transparent 65%)",
        }}
      />
      <div className="relative rounded-[20px] overflow-hidden glass bg-[rgba(8,14,24,.35)]">
        <div
          aria-hidden="true"
          className="flex items-center gap-2 px-4 py-[13px] bg-white/[.035] border-b border-white/[.08]"
        >
          <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
          <span className="flex-1 text-center font-mono text-[11px] text-ink-faint tracking-[.5px]">
            giuseppe@petomis — zsh
          </span>
          <span className="w-[42px]" />
        </div>
        {/* Decorative animation: the typed text is not useful to screen readers */}
        <div
          aria-hidden="true"
          className="px-[22px] pt-[22px] pb-6 h-[262px] overflow-hidden font-mono text-[13.5px] leading-[2] text-ink-secondary"
        >
          {lines.map((line, i) => (
            <div key={i} className="break-words whitespace-pre-wrap">
              {line.kind === "cmd" && (
                <>
                  <Prompt /> <span className="text-ink">{line.text}</span>
                  {line.typing && <Cursor />}
                </>
              )}
              {line.kind === "out" && (
                <span className={line.className}>{line.text}</span>
              )}
              {line.kind === "prompt" && (
                <>
                  <Prompt /> <Cursor />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Terminal
