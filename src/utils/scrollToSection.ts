// Utils
import { WebsiteSection } from "@/utils"

/**
 * Smoothly scrolls the page to the specified section.
 *
 * Relies on the target section's `scroll-margin-top` (set in its own
 * className) to clear the fixed top bar, so this stays in sync with the
 * same offset native `href="#section"` anchor navigation already uses -
 * a hand-rolled pixel offset here would drift from it.
 *
 * @param {WebsiteSection} section - The section identifier to scroll to. Must match
 *                                   the `id` attribute of the target element in the DOM.
 */
const scrollToSection = (section: WebsiteSection) => {
  const selectedDiv = document.getElementById(section)
  selectedDiv?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default scrollToSection
