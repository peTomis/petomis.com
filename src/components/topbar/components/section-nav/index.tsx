// External libraries
import { useLayoutEffect, useRef, useState } from "react"

// Hooks
import useActiveSection from "@/hooks/useActiveSection"
import { useTranslations } from "@/hooks/useTranslations"

// Utils
import { NUMBERED_SECTIONS, WebsiteSection } from "@/utils"
import { cn } from "@/utils/cn"
import scrollToSection from "@/utils/scrollToSection"

// `sections.*` translation key for each linked section.
const LABEL_KEYS: Record<WebsiteSection, string> = {
  [WebsiteSection.ABOUT]: "sections.about",
  [WebsiteSection.EXPERIENCE]: "sections.skills",
  [WebsiteSection.PROJECTS]: "sections.projects",
  [WebsiteSection.CONTACT]: "sections.contact",
}

interface Props {
  label: string
  className?: string
}

/**
 * Glass pill of in-page section links. A highlight pill slides under the
 * link of the section currently in view (scrollspy); none in the hero.
 */
const SectionNav = ({ label, className }: Props) => {
  const { t } = useTranslations("home")
  const active = useActiveSection(NUMBERED_SECTIONS)
  const navRef = useRef<HTMLElement>(null)
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null)

  // Measure the active link; re-measure when the nav resizes (e.g. the
  // labels change width after a language switch).
  useLayoutEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const measure = () => {
      const link = active
        ? nav.querySelector<HTMLElement>(`[data-section="${active}"]`)
        : null
      setPill(link ? { left: link.offsetLeft, width: link.offsetWidth } : null)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(nav)
    return () => observer.disconnect()
  }, [active])

  return (
    <nav
      ref={navRef}
      aria-label={label}
      className={cn(
        "relative items-center gap-0.5 p-[5px] rounded-full glass",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute top-[5px] bottom-[5px] rounded-full border border-white/[.18] bg-gradient-to-b from-white/[.16] to-electric/[.12] shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_4px_16px_rgba(30,167,255,.25)] transition-[left,width,opacity] duration-[450ms] ease-[cubic-bezier(.3,1.3,.5,1)]"
        style={{
          left: pill?.left ?? 5,
          width: pill?.width ?? 0,
          opacity: pill ? 1 : 0,
        }}
      />
      {NUMBERED_SECTIONS.map((section) => {
        const isActive = section === active
        return (
          <a
            key={section}
            href={`#${section}`}
            data-section={section}
            aria-current={isActive ? "location" : undefined}
            onClick={(event) => {
              event.preventDefault()
              scrollToSection(section)
            }}
            className={cn(
              "relative z-[1] px-4 py-[9px] rounded-full font-mono text-[12.5px] tracking-[.4px] whitespace-nowrap transition-colors duration-300 hover:text-ink",
              isActive ? "text-ink" : "text-ink-muted"
            )}
          >
            {t(LABEL_KEYS[section])}
          </a>
        )
      })}
    </nav>
  )
}

export default SectionNav
