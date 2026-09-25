// External libraries
import { useEffect, useState } from "react"

// Utils
import type { WebsiteSection } from "@/utils"

/** A section counts as current once its top passes this far from the top. */
const ACTIVATION_OFFSET = 140

/**
 * Scrollspy: returns the section currently in view, i.e. the last of
 * `sections` (in page order) whose top has scrolled above
 * {@link ACTIVATION_OFFSET}. `null` above the first one (the hero). At the
 * very bottom of the page the last section wins, since a short final
 * section may never reach the offset.
 */
const useActiveSection = (sections: WebsiteSection[]) => {
  const [active, setActive] = useState<WebsiteSection | null>(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2

      let current: WebsiteSection | null = null
      for (const section of sections) {
        const element = document.getElementById(section)
        if (
          element &&
          element.getBoundingClientRect().top <= ACTIVATION_OFFSET
        ) {
          current = section
        }
      }
      if (scrolledToBottom && sections.length > 0) {
        current = sections[sections.length - 1]
      }
      setActive(current)
    }

    // Coalesce scroll/resize bursts into one update per frame.
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [sections])

  return active
}

export default useActiveSection
