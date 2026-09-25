// External libraries
import { useEffect, useState } from "react"

// Utils
import { WebsiteSection } from "@/utils"

/**
 * Whether the floating mail shortcut should be shown: it is visible
 * everywhere on the page except once the contact section (the form it points
 * to) has scrolled into the bottom three quarters of the viewport, and stays
 * hidden past it (footer).
 */
const useIsMailShortcutVisible = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const contact = document.getElementById(WebsiteSection.CONTACT)
    if (!contact) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const reachedContact =
          entry.isIntersecting || entry.boundingClientRect.top < 0
        setIsVisible(!reachedContact)
      },
      // Shrink the viewport's bottom by 25%, so the contact section counts
      // as reached once its top passes 75% of the screen height.
      { rootMargin: "0px 0px -25% 0px" }
    )
    observer.observe(contact)
    return () => observer.disconnect()
  }, [])

  return isVisible
}

export default useIsMailShortcutVisible
