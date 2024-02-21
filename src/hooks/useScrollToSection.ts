// Utils
import { WebsiteSection } from "@/utils/websiteSections"

/**
 * Smoothly scrolls the page to the specified section.
 *
 * This function finds the DOM element corresponding to the given section identifier
 * and scrolls the window such that the element is brought to the top of the viewport.
 * A slight offset is applied to the scroll position for visual padding or to account
 * for fixed headers.
 *
 * @param {WebsiteSection} section - The section identifier to scroll to. Must match
 *                                   the `id` attribute of the target element in the DOM.
 */
const scrollToSection = (section: WebsiteSection) => {
  // Attempt to find the DOM element by its `id`, which should match one of the WebsiteSection values.
  const selectedDiv = document.getElementById(section)
  if (selectedDiv) {
    // Calculate the element's top position relative to the viewport, then add the current scroll offset.
    const topPosition =
      selectedDiv.getBoundingClientRect().top + window.pageYOffset

    // Perform the scroll with a slight offset (-50 pixels) for visual padding,
    // and use smooth scrolling behavior for a better user experience.
    window.scrollTo({
      top: topPosition - 50, // Adjust this value if you need more or less offset.
      behavior: "smooth",
    })
  }
}

export default scrollToSection
