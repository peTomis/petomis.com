import { useState, useEffect } from "react"

const useScrolledPastVH = (vh: number): boolean => {
  const [hasScrolledPast80VH, setHasScrolledPast80VH] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      const scrolledHeight = window.scrollY
      const threshold = viewportHeight * vh * 0.01

      if (scrolledHeight > threshold) {
        setHasScrolledPast80VH(true)
      } else {
        setHasScrolledPast80VH(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return hasScrolledPast80VH
}

export default useScrolledPastVH
