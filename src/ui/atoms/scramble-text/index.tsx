import { useCallback, useEffect, useRef, useState } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%$&"
const DURATION = 620

interface Props {
  text: string
  className?: string
  /** Delay (ms) before the scramble plays on mount. */
  delay?: number
}

/**
 * Text that resolves from random glyphs into its final value, left to right,
 * on mount and again on hover. The real text always stays in the DOM (made
 * transparent while animating) so layout never shifts and screen readers
 * read it normally; the animated glyphs are an aria-hidden overlay.
 */
const ScrambleText = ({ text, className = "", delay = 0 }: Props) => {
  const [scrambled, setScrambled] = useState<string | null>(null)
  const rafRef = useRef(0)
  const runningRef = useRef(false)

  const scramble = useCallback(() => {
    if (runningRef.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    runningRef.current = true
    const start = performance.now()

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION)
      let out = ""
      for (let i = 0; i < text.length; i++) {
        if (t >= i / text.length + 0.12) out += text[i]
        else if (text[i] === " ") out += " "
        else out += CHARS[Math.floor(Math.random() * CHARS.length)]
      }
      if (t < 1) {
        setScrambled(out)
        rafRef.current = requestAnimationFrame(step)
      } else {
        setScrambled(null)
        runningRef.current = false
      }
    }
    rafRef.current = requestAnimationFrame(step)
  }, [text])

  useEffect(() => {
    const timer = setTimeout(scramble, delay)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(rafRef.current)
      runningRef.current = false
    }
  }, [scramble, delay])

  return (
    <span
      onMouseEnter={scramble}
      className={`relative inline-block whitespace-nowrap ${className}`}
    >
      <span style={scrambled !== null ? { color: "transparent" } : undefined}>
        {text}
      </span>
      {scrambled !== null && (
        <span aria-hidden="true" className="absolute top-0 left-0">
          {scrambled}
        </span>
      )}
    </span>
  )
}

export default ScrambleText
