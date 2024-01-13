import React from "react"
import { useEffect } from "react"
import useIsSectionVisible from "./useIsSectionVisible"

const useIsSectionLoaded = (id: string, delta?: number) => {
  const [isSectionLoaded, setIsSectionLoaded] = React.useState(false)
  const isSectionVisible = useIsSectionVisible(id)

  useEffect(() => {
    if (!isSectionLoaded && isSectionVisible) setIsSectionLoaded(true)
  }, [isSectionVisible, isSectionLoaded])

  useEffect(() => {
    const targetDiv = document.getElementById(id)
    if (!targetDiv) return
    const targetDivPosition = targetDiv.getBoundingClientRect()
    const screenHeight = window.innerHeight

    if (targetDivPosition.top <= screenHeight * (delta ?? 1.2)) {
      setIsSectionLoaded(true)
    }
  }, [])

  return isSectionLoaded
}

export default useIsSectionLoaded
