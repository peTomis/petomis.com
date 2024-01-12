import React from "react"

const useWheelHandler = (
  carouselRef: React.RefObject<HTMLDivElement>,
  setHovered: React.Dispatch<React.SetStateAction<number>>,
  onScrollUp: () => void,
  onScrollDown: () => void
) => {
  React.useEffect(() => {
    const handleWheelGlobal = (e: any) => {
      if (carouselRef.current && carouselRef.current.contains(e.target)) {
        e.preventDefault()

        if (e.deltaY > 0) {
          onScrollUp()
        } else {
          onScrollDown()
        }

        e.stopPropagation()
      }
    }

    window.addEventListener("wheel", handleWheelGlobal, { passive: false })
    return () => {
      window.removeEventListener("wheel", handleWheelGlobal)
    }
  }, [carouselRef, setHovered, onScrollUp, onScrollDown])
}

export default useWheelHandler
