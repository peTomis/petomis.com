import React from "react"

const useSwipeHandler = (
  ref: React.RefObject<HTMLDivElement>,
  onSwipeLeft: () => void,
  onSwipeRight: () => void
) => {
  React.useEffect(() => {
    let startX = 0
    let startY = 0

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      startX = touch.clientX
      startY = touch.clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!ref.current || !ref.current.contains(e.target as Node)) return

      const touch = e.touches[0]
      const deltaX = touch.clientX - startX
      const deltaY = touch.clientY - startY

      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          e.preventDefault()
          onSwipeRight()
          e.stopPropagation()
        } else {
          e.preventDefault()
          onSwipeLeft()
          e.stopPropagation()
        }
      }
    }

    const handleTouchEnd = () => {
      startX = 0
      startY = 0
    }

    if (ref.current) {
      ref.current.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      })
      ref.current.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      })
      ref.current.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("touchstart", handleTouchStart)
        ref.current.removeEventListener("touchmove", handleTouchMove)
        ref.current.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [ref, onSwipeLeft, onSwipeRight])
}

export default useSwipeHandler
