// External libraries
import React from "react"

/**
 * Custom React hook for handling swipe gestures on a given element.
 *
 * @param {React.RefObject<HTMLDivElement>} ref - The React ref attached to the element to detect swipes on.
 * @param {() => void} onSwipeLeft - Callback function to execute when a swipe left gesture is detected.
 * @param {() => void} onSwipeRight - Callback function to execute when a swipe right gesture is detected.
 * @param {boolean} [stopPropagation=false] - Optional boolean to determine whether to stop propagation of the touch event.
 */
const useSwipeHandler = (
  ref: React.RefObject<HTMLDivElement>,
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  stopPropagation: boolean = false
) => {
  React.useEffect(() => {
    // Initial touch positions
    let startX = 0
    let startY = 0

    // Function to record the starting position of a touch
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      startX = touch.clientX
      startY = touch.clientY
    }

    // Function to handle the touch move event
    const handleTouchMove = (e: TouchEvent) => {
      // Ensure touch is within the element
      if (!ref.current || !ref.current.contains(e.target as Node)) return

      const touch = e.touches[0]
      const deltaX = touch.clientX - startX
      const deltaY = touch.clientY - startY

      // Determine if the gesture is a swipe and its direction
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          e.preventDefault()
          onSwipeRight()
        } else {
          e.preventDefault()
          onSwipeLeft()
        }
        if (stopPropagation) {
          e.stopPropagation()
        }
      }
    }

    // Function to reset touch positions
    const handleTouchEnd = () => {
      startX = 0
      startY = 0
    }

    // Add event listeners to the element
    if (ref.current) {
      ref.current.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      })
      ref.current.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      })
      ref.current.addEventListener("touchend", handleTouchEnd)
    }

    // Cleanup function to remove event listeners
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("touchstart", handleTouchStart)
        ref.current.removeEventListener("touchmove", handleTouchMove)
        ref.current.removeEventListener("touchend", handleTouchEnd)
      }
    }
    // Include stopPropagation in the dependencies array if its change should rebind the event listeners.
  }, [ref, onSwipeLeft, onSwipeRight, stopPropagation])
}

export default useSwipeHandler
