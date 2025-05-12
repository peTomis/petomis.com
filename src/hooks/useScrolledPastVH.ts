// External libraries
import { useEffect, useState } from "react"

/**
 * Custom hook that checks if the user has scrolled past a certain percentage of the viewport height.
 *
 * @param {number} vh - The percentage of the viewport height to check against.
 * @returns {boolean} - True if the user has scrolled past the specified percentage of the viewport height, false otherwise.
 */
const useScrolledPastVH = (vh: number): boolean => {
  // State to track whether the user has scrolled past the specified VH percentage
  const [hasScrolledPastVH, setHasScrolledPastVH] = useState(false)

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Calculate the threshold in pixels based on the viewport height and the specified percentage
      const threshold = window.innerHeight * vh * 0.01
      // Check if the current scroll position is greater than the threshold
      if (window.scrollY > threshold) {
        setHasScrolledPastVH(true)
      } else {
        setHasScrolledPastVH(false)
      }
    }

    // Add the scroll event listener to the window
    window.addEventListener("scroll", handleScroll)

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [vh]) // Effect depends on the vh prop to recalculate if vh changes

  return hasScrolledPastVH
}

export default useScrolledPastVH
