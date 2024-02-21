// External libraries
import React from "react"

/**
 * Custom React hook to determine the visibility of a mail shortcut button
 * based on the scroll position of the page. The visibility logic changes
 * depending on whether the viewport is above or below a certain height threshold
 * and the position of specific page elements.
 *
 * @returns {boolean} The visibility state of the mail shortcut.
 */
const useIsMailShortcutVisible = () => {
  // State to track the visibility of the mail shortcut
  const [isMailShortcutVisible, setIsMailShortcutVisible] = React.useState(true)

  React.useEffect(() => {
    // Handler to update the visibility based on scroll position
    const handleScroll = () => {
      // Attempt to find specific DOM elements to base the visibility logic on
      const firstDiv = document.getElementById("work")
      const targetDiv = document.getElementById("contact-container")
      // Early return if the target div isn't found
      if (!targetDiv) return

      // Calculate positions and screen height for comparison
      const targetDivPosition = targetDiv.getBoundingClientRect()
      const screenHeight = window.innerHeight

      // Specific logic for screens smaller than 768px in height
      if (window.innerHeight < 768) {
        if (firstDiv) {
          const firstDivPosition = firstDiv.getBoundingClientRect()
          // Hide the shortcut if the first div is below a certain point on the screen
          if (firstDivPosition.top > screenHeight * 0.75) {
            setIsMailShortcutVisible(false)
            return
          }
          // Show or hide the shortcut based on the position of the first and target div
          if (
            firstDivPosition.top <= screenHeight * 0.75 &&
            targetDivPosition.top >= screenHeight * 0.5
          ) {
            setIsMailShortcutVisible(true)
            return
          }

          setIsMailShortcutVisible(false)
        }
      }

      // For larger screens, hide the shortcut once the target div scrolls into view
      if (targetDivPosition.top <= screenHeight * 0.75) {
        setIsMailShortcutVisible(false)
        return
      }

      // Default to showing the shortcut
      setIsMailShortcutVisible(true)
    }

    // Initialize the shortcut as hidden on smaller screens
    if (window.innerHeight < 768) setIsMailShortcutVisible(false)

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Cleanup by removing the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []) // Empty dependency array means this effect runs once on mount

  // Return the current visibility state
  return isMailShortcutVisible
}

export default useIsMailShortcutVisible
