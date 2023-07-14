import { useEffect, useState } from "react"
import style from "./style.module.css"
import ArrowIcon from "@/ui/icons/Arrow"

const ScrollSuggest = () => {
  const [hidden, setHidden] = useState(false)
  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" })
    setHidden(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      setHidden(true)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {!hidden && (
        <div
          className={
            "fixed flex justify-center items-center z-40 pb-[4px] bottom-[16px] md:bottom-[32px]  w-[64px] h-[64px] rounded-full cursor-pointer animate-bounce"
          }
        >
          <div className={style.triangle} onClick={handleClick}>
            <ArrowIcon width={60} height={60} />
          </div>
        </div>
      )}
    </>
  )
}
export default ScrollSuggest
