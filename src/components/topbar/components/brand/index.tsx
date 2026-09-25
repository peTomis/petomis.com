// Utils
import { cn } from "@/utils/cn"

interface Props {
  className?: string
}

/**
 * Top bar brand island: glossy "GT" monogram + name, linking back to the
 * top of the page. The name is visually hidden on tablets (screen readers
 * still get it) to leave room for the section links.
 */
const Brand = ({ className }: Props) => {
  return (
    <a
      href="#"
      onClick={(event) => {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}
      className={cn(
        "items-center gap-2.5 p-[5px] md:max-lg:pr-[5px] pr-4 rounded-full glass",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full font-grotesk font-bold text-[13px] tracking-[.3px] text-electric-ink bg-[radial-gradient(circle_at_30%_25%,#7fd1ff,#1ea7ff_55%,#0b6fb3)] shadow-[inset_0_1px_0_rgba(255,255,255,.6),0_4px_14px_rgba(30,167,255,.45)]"
      >
        GT
      </span>
      <span className="font-grotesk font-semibold text-[14px] tracking-[.2px] text-ink md:max-lg:sr-only">
        Giuseppe Tomis
      </span>
    </a>
  )
}

export default Brand
