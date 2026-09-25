// Atoms
import Reveal from "@/ui/atoms/reveal"

// Utils
import { cn } from "@/utils/cn"

interface Props {
  /** 1-based position of the section on the page, shown as "01". */
  index: number
  /** Lowercase section name shown after the index ("01 / about"). */
  label: string
  /** Section heading; omit when the section renders its own `<h2>`. */
  title?: React.ReactNode
  titleId?: string
  description?: string
  /** `onAccent` for sections with a bright electric-blue background. */
  tone?: "default" | "onAccent"
  className?: string
}

/** Section eyebrow ("01 / about" + gradient rule), with optional h2 + intro. */
const SectionHeader = ({
  index,
  label,
  title,
  titleId,
  description,
  tone = "default",
  className,
}: Props) => {
  const onAccent = tone === "onAccent"

  return (
    <Reveal className={className}>
      <div className="flex items-center gap-[14px] mb-[30px]">
        <span
          className={cn(
            "font-mono text-[13px] tracking-[1px]",
            onAccent ? "text-night" : "text-electric"
          )}
        >
          {String(index).padStart(2, "0")} / {label}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "flex-1 h-px bg-gradient-to-r to-transparent",
            onAccent ? "from-night/40" : "from-electric/40"
          )}
        />
      </div>
      {title && (
        <h2
          id={titleId}
          className={cn(
            "font-grotesk font-semibold text-[length:clamp(28px,3.4vw,40px)] leading-[1.2] tracking-[-1px]",
            onAccent ? "text-night" : "text-ink",
            description ? "mb-3" : "mb-[50px]"
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            "font-manrope text-[16px] leading-[1.7] max-w-[560px] mb-[50px]",
            onAccent ? "text-night/75" : "text-ink-muted"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

export default SectionHeader
