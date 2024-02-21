// External libraries
import React from "react"

/**
 * A custom React hook that determines if the user is scrolling upwards on the webpage.
 *
 * It listens to the window's scroll events to calculate the direction of the scroll.
 * If the current scroll position is less than the last scroll position, it is considered
 * that the user is scrolling up. The hook updates the `isScrollingUp` state accordingly.
 * This state can be used to implement dynamic UI behaviors based on the scroll direction,
 * such as showing or hiding elements when the user scrolls up.
 *
 * @returns {boolean} A boolean state indicating whether the user is currently scrolling up.
 */
const useIsScrollingUp = () => {
  // State to track if the user is scrolling up
  const [isScrollingUp, setIsScrollingUp] = React.useState(false)
  // State to keep track of the last scroll position
  const [lastScrollTop, setLastScrollTop] = React.useState(0)

  React.useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Get the current scroll position from the window object or the document element
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop

      // If the current scroll position is at the top of the page, set isScrollingUp to false
      if (currentScrollTop === 0) {
        setIsScrollingUp(false)
      }
      // If the current scroll position is less than the last recorded scroll position, the user is scrolling up
      else if (currentScrollTop < lastScrollTop) {
        setIsScrollingUp(true)
      } else {
        // Otherwise, the user is not scrolling up
        setIsScrollingUp(false)
      }

      // Update the last recorded scroll position to the current scroll position
      setLastScrollTop(currentScrollTop)
    }

    // Add the handleScroll function as an event listener to window scroll events
    window.addEventListener("scroll", handleScroll)

    // Return a cleanup function that removes the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollTop]) // The effect depends on the lastScrollTop state

  // Return the isScrollingUp state to indicate if the user is scrolling up
  return isScrollingUp
}

export default useIsScrollingUp
