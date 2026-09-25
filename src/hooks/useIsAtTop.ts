// External libraries
import { useEffect, useState } from "react"

/** Whether the page is scrolled to (within `threshold` px of) the very top. */
const useIsAtTop = (threshold = 8) => {
  // Pages load at the top, so this also matches the server render.
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const update = () => setIsAtTop(window.scrollY <= threshold)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [threshold])

  return isAtTop
}

export default useIsAtTop
