import { useEffect, useState } from "react"

const useIsSectionLoaded = (id: string) => {
  const [isSectionLoaded, setIsSectionLoaded] = useState(false)

  useEffect(() => {
    const targetDiv = document.getElementById(id)
    if (!targetDiv) return
    const targetDivPosition = targetDiv.getBoundingClientRect()
    const screenHeight = window.innerHeight

    if (targetDivPosition.top <= screenHeight * 1.2) {
      setIsSectionLoaded(true)
      return
    }
  }, [])

  return isSectionLoaded
}

export default useIsSectionLoaded
