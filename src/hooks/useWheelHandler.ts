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
const useWheelHandler = (
  carouselRef: React.RefObject<HTMLDivElement>,
  setHovered: React.Dispatch<React.SetStateAction<number>>,
  onScrollUp: () => void,
  onScrollDown: () => void
): void => {
  React.useEffect(() => {
    // Defines a global event handler for wheel events.
    const handleWheelGlobal = (e: WheelEvent): void => {
      // Checks if the wheel event occurred within the carousel component.
      if (
        carouselRef.current &&
        carouselRef.current.contains(e.target as Node)
      ) {
        // Prevents the default wheel scroll behavior to allow custom handling.
        e.preventDefault()

        // Determines the direction of the scroll and invokes the corresponding callback.
        if (e.deltaY > 0) {
          onScrollUp()
        } else {
          onScrollDown()
        }

        // Stops the propagation of the event to higher-level elements.
        e.stopPropagation()
      }
    }

    // Adds the wheel event listener to the window object.
    window.addEventListener("wheel", handleWheelGlobal, { passive: false })

    // Cleanup function to remove the event listener when the component unmounts or dependencies change.
    return () => {
      window.removeEventListener("wheel", handleWheelGlobal)
    }
    // Includes all external variables used in the effect as dependencies.
  }, [carouselRef, setHovered, onScrollUp, onScrollDown])
}

export default useWheelHandler
