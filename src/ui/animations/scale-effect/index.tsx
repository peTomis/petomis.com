import { useEffect, useState } from "react"
import style from "./style.module.css"

interface Props {
  children: React.ReactNode
}

const ScaleEffect = ({ children }: Props) => {
  const [load, setLoad] = useState(false)
  const [delta, setDelta] = useState(0.5)

  useEffect(() => {
    if (!load) {
      const targetDiv = document.getElementById("targetDiv")
      if (!targetDiv) return
      const targetDivPosition = targetDiv.getBoundingClientRect()
      const screenHeight = window.innerHeight
      if (targetDivPosition.top <= screenHeight / 2 && delta != 1) setDelta(1)
      setLoad(true)
    }

    const handleScroll = () => {
      const targetDiv = document.getElementById("targetDiv")
      if (!targetDiv) return
      const targetDivPosition = targetDiv.getBoundingClientRect()
      const screenHeight = window.innerHeight

      if (targetDivPosition.top <= screenHeight / 2 && delta != 1) setDelta(1)

      if (
        targetDivPosition.top <= screenHeight &&
        targetDivPosition.top >= screenHeight / 2
      ) {
        const newDelta = parseFloat(
          (
            1 -
            ((targetDivPosition.top - screenHeight / 2) / (screenHeight / 2)) *
              0.5
          ).toFixed(2)
        )
        setDelta(newDelta)
      }

      if (targetDivPosition.top >= screenHeight && delta != 0.5) setDelta(0.5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      id="targetDiv"
      className={style.scalingDiv}
      style={{ transform: `scale(${delta})`, transformOrigin: "top center" }}
    >
      {children}
    </div>
  )
}

export default ScaleEffect
