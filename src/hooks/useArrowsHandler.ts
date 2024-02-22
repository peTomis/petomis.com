// External libraries
import React from "react"

/**
 * A custom React hook for handling wheel events on a specific carousel component.
 * It listens for global wheel events and, if the event originated from within the
 * carousel component, prevents the default scrolling behavior and triggers
 * either an onScrollUp or onScrollDown callback based on the scroll direction.
 *
 * @param {React.RefObject<HTMLDivElement>} carouselRef - A ref object pointing to the carousel DOM element.
 * @param {React.Dispatch<React.SetStateAction<number>>} setHovered - A state setter function from useState hook,
 *        used here to potentially set state based on hover interactions (not directly used in this hook).
 * @param {() => void} onScrollUp - Callback function to execute when scrolling up.
 * @param {() => void} onScrollDown - Callback function to execute when scrolling down.
 */
const useArrowsHandler = (
  carouselRef: React.RefObject<HTMLDivElement>,
  setHovered: React.Dispatch<React.SetStateAction<number>>,
  onScrollUp: () => void,
  onScrollDown: () => void
): void => {
  React.useEffect(() => {
    // Defines a global event handler for wheel events.
    const handleKeydown = (e: KeyboardEvent): void => {
      // Checks if the wheel event occurred within the carousel component.
      if (carouselRef.current) {
        // Prevents the default wheel scroll behavior to allow custom handling.
        e.preventDefault()

        // Determines the direction of the scroll and invokes the corresponding callback.
        if (e.code === "ArrowRight") {
          onScrollUp()
        }

        if (e.code === "ArrowLeft") {
          onScrollDown()
        }

        // Stops the propagation of the event to higher-level elements.
        e.stopPropagation()
      }
    }

    // Adds the wheel event listener to the window object.
    window.addEventListener("keydown", handleKeydown)

    // Cleanup function to remove the event listener when the component unmounts or dependencies change.
    return () => {
      window.removeEventListener("keydown", handleKeydown)
    }
    // Includes all external variables used in the effect as dependencies.
  }, [carouselRef, setHovered, onScrollUp, onScrollDown])
}

export default useArrowsHandler
