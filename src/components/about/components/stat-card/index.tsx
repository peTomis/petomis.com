import { useEffect, useState } from "react"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"
import useRevealOnScroll from "@/hooks/useRevealOnScroll"

const COUNT_DURATION = 1400

interface Props {
  value: number
  suffix: string
  label: string
}

/**
 * Stat tile whose number counts up from 0 (cubic ease-out) the first time it
 * scrolls into view. Renders the final value when there's nothing to animate.
 */
const StatCard = ({ value, suffix, label }: Props) => {
  const { t } = useTranslations("home")
  const isComingSoon = value === 0
  const { ref, state } = useRevealOnScroll<HTMLDivElement>()
  const [count, setCount] = useState(value)

  useEffect(() => {
    if (value === 0) return
    if (state === "waiting") setCount(0)
    if (state !== "revealed") return

    let raf = 0
    const start = performance.now()
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_DURATION)
      setCount(Math.round(value * (1 - Math.pow(1 - t, 3))))
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [state, value])

  return (
    <div
      ref={ref}
      className="px-5 py-6 rounded-[18px] glass glass-interactive"
    >
      {/* The animated number is decorative; screen readers get the final value. */}
      <p className="sr-only">
        {isComingSoon ? t("about.soon") : `${value}${suffix}`} {label}
      </p>
      <div aria-hidden="true">
        <div className="flex items-center gap-[3px] font-grotesk font-bold text-electric">
          <span className="text-[38px] leading-none">
            {isComingSoon ? t("about.soon") : count}
          </span>
          {!isComingSoon && suffix && (
            <span className="text-[24px] leading-none">{suffix}</span>
          )}
        </div>
        <div className="mt-[10px] font-manrope text-[13px] leading-[1.4] text-ink-muted">
          {label}
        </div>
      </div>
    </div>
  )
}

export default StatCard
