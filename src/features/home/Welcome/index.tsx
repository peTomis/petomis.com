import style from "./style.module.css"
import { useEffect, useState } from "react"
import WelcomeImage from "./components/WelcomeImage"
import WelcomeText from "./components/WelcomeText"

const Welcome = () => {
  const [width, setWidth] = useState(0)

  const halfWidth = width / 2

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    setWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className={style.container}>
      <WelcomeText halfWidth={halfWidth} />
      <WelcomeImage halfWidth={halfWidth} />
    </div>
  )
}
export default Welcome
