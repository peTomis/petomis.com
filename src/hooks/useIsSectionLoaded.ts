// External libraries
import React from "react"

// Hooks
import useIsSectionVisible from "./useIsSectionVisible"

/**
 * Hook to determine if a section is loaded based on its visibility.
 *
 * @param {string} id - The DOM id of the section to check.
 * @param {number} [delta=1.2] - Optional multiplier to adjust the threshold for considering the section as loaded.
 * @returns {boolean} State indicating whether the section is considered loaded.
 */
const useIsSectionLoaded = (id: string, delta?: number) => {
  // State to track the loaded status of the section
  const [isSectionLoaded, setIsSectionLoaded] = React.useState(false)
  // Use another custom hook to check if the section is currently visible on the screen
  const isSectionVisible = useIsSectionVisible(id)

  // Effect to set the section as loaded when it becomes visible
  React.useEffect(() => {
    // If the section is not already marked as loaded and is visible, mark it as loaded
    if (!isSectionLoaded && isSectionVisible) {
      setIsSectionLoaded(true)
    }
  }, [isSectionVisible, isSectionLoaded]) // Depend on the visibility and loaded state

  // Effect to determine if the section is within a certain distance from the top of the viewport
  React.useEffect(() => {
    const targetDiv = document.getElementById(id) // Get the DOM element by ID
    if (!targetDiv) return // Exit if the element is not found

    const targetDivPosition = targetDiv.getBoundingClientRect() // Get the position of the element
    const screenHeight = window.innerHeight // Get the height of the viewport

    // If the top of the section is within a delta multiplier of the viewport height, mark it as loaded
    if (targetDivPosition.top <= screenHeight * (delta ?? 1.2)) {
      setIsSectionLoaded(true)
    }
  }, []) // This effect runs once on mount

  // Return the loaded state
  return isSectionLoaded
}

export default useIsSectionLoaded
