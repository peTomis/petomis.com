// Hooks
import useRevealOnScroll from "@/hooks/useRevealOnScroll"

// Utils
import { cn } from "@/utils/cn"

interface Props {
  children: React.ReactNode
  className?: string
  /** Stagger delay (seconds) once the element scrolls into view. */
  delay?: number
}

/** Fades and slides its content up the first time it scrolls into view. */
const Reveal = ({ children, className, delay = 0 }: Props) => {
  const { ref, state } = useRevealOnScroll<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        state === "waiting" && "opacity-0 translate-y-7",
        state === "revealed" && "animate-reveal",
        className
      )}
      style={state === "revealed" ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}

export default Reveal
