import React from "react"

const useSwipeHandler = (
  carouselRef: React.RefObject<HTMLDivElement>,
  setHovered: React.Dispatch<React.SetStateAction<number>>,
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
      if (
        !carouselRef.current ||
        !carouselRef.current.contains(e.target as Node)
      )
        return

      const touch = e.touches[0]
      const deltaX = touch.clientX - startX
      const deltaY = touch.clientY - startY

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
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

    if (carouselRef.current) {
      carouselRef.current.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      })
      carouselRef.current.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      })
      carouselRef.current.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("touchstart", handleTouchStart)
        carouselRef.current.removeEventListener("touchmove", handleTouchMove)
        carouselRef.current.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [carouselRef, setHovered, onSwipeLeft, onSwipeRight])
}

export default useSwipeHandler
