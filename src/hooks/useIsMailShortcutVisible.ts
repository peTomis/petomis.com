import { Dispatch, SetStateAction, useEffect, useState } from "react"

const useIsMailShortcutVisible = () => {
  const [isMailShortcutVisible, setIsMailShortcutVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const firstDiv = document.getElementById("work")
      const targetDiv = document.getElementById("contact-container")
      if (!targetDiv) return
      const targetDivPosition = targetDiv.getBoundingClientRect()
      const screenHeight = window.innerHeight

      if (window.innerHeight < 768) {
        if (firstDiv) {
          const firstDivPosition = firstDiv.getBoundingClientRect()
          if (firstDivPosition.top > screenHeight * 0.75) {
            setIsMailShortcutVisible(false)
            return
          }
          if (
            firstDivPosition.top <= screenHeight * 0.75 &&
            targetDivPosition.top >= screenHeight * 0.5
          ) {
            setIsMailShortcutVisible(true)
            return
          }

          setIsMailShortcutVisible(false)
        }
      }

      if (targetDivPosition.top <= screenHeight * 0.75) {
        setIsMailShortcutVisible(false)
        return
      }

      setIsMailShortcutVisible(true)
    }

    if (window.innerHeight < 768) setIsMailShortcutVisible(false)

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return isMailShortcutVisible
}

export default useIsMailShortcutVisible
