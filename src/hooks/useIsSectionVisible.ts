import { useEffect, useState } from "react"

const useIsSectionVisible = (id: string) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isSectionVisible) return
      const targetDiv = document.getElementById(id)
      if (!targetDiv) return
      const targetDivPosition = targetDiv.getBoundingClientRect()
      const screenHeight = window.innerHeight

      if (targetDivPosition.top <= screenHeight * 1.2) {
        setIsSectionVisible(true)
        return
      }

      setIsSectionVisible(false)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return isSectionVisible
}

export default useIsSectionVisible
