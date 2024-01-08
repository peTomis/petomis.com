import { useEffect, useState } from "react"

const useIsScrollingUp = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop

      // Check if the page is at the top
      if (currentScrollTop === 0) {
        setIsScrollingUp(false)
      }
      // Check if scrolled more than 100px and is scrolling up
      else if (currentScrollTop < lastScrollTop) {
        setIsScrollingUp(true)
      } else {
        setIsScrollingUp(false)
      }

      // Update the last scroll position
      setLastScrollTop(currentScrollTop)
    }

    // Listen for scroll events on the window
    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollTop])

  return isScrollingUp
}

export default useIsScrollingUp
