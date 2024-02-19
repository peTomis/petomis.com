// External libraries
import React from "react"

/**
 * Custom React hook that determines if a specific section on the page is visible
 * within the viewport. It listens for scroll events and checks the position of the
 * section relative to the viewport height.
 *
 * @param {string} id - The DOM id of the section to check for visibility.
 * @returns {boolean} A boolean state indicating whether the section is visible.
 */
const useIsSectionVisible = (id: string) => {
  // State to track the visibility of the section
  const [isSectionVisible, setIsSectionVisible] = React.useState(false)

  React.useEffect(() => {
    // Function to handle scroll events and check if the section is visible
    const handleScroll = () => {
      // Early return if section is already marked as visible to avoid unnecessary checks
      if (isSectionVisible) return

      // Find the section element by its id
      const targetDiv = document.getElementById(id)
      if (!targetDiv) return // Exit if the element doesn't exist

      // Get the position of the section relative to the viewport
      const targetDivPosition = targetDiv.getBoundingClientRect()
      const screenHeight = window.innerHeight

      // Check if the top of the section is within 120% of the viewport height
      // This means the section is close to or within the visible area of the viewport
      if (targetDivPosition.top <= screenHeight * 1.2) {
        setIsSectionVisible(true) // Mark the section as visible
        return
      }

      // Otherwise, mark the section as not visible
      setIsSectionVisible(false)
    }

    // Add the scroll event listener to the window
    window.addEventListener("scroll", handleScroll)

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []) // Empty dependency array means this effect runs once on mount

  // Return the visibility state of the section
  return isSectionVisible
}

export default useIsSectionVisible
