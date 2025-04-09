// Styles
import style from "./style.module.css"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Animations
import { useEffect, useMemo, useState } from "react"

const Name = () => {
  const { t } = useTranslations("home")
  return (
    <div className="font-bold text-center lg:text-start font-agdasima text-myNameSmall text-primary-100 d:text-myNameMedium lg:text-myNameMedium xxl:text-myNameExtraLarge">
      {t("welcome.name")}
    </div>
  )
}

const WelcomeText = () => {
  const words = useMemo(() => ["backend", "fullstack"], [])
  const [currentWord, setCurrentWord] = useState<string>(words[0])

  // Effect to change the word every 8 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord)

        const nextIndex = (currentIndex + 1) % words.length
        return words[nextIndex]
      })
    }, 8000)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  }, [words])

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 select-none lg:items-start lg:justify-start lg:text-center">
      <Name />
      <div className="relative flex justify-center md:w-full md:justify-start text-h3 sm:text-h1 xxl:text-jobTitle">
        <div className={"relative flex flex-row"}>
          <div className="opacity-0 select-none -z-10">backend</div>
          <div className="absolute top-0 left-0 ">
            <div className={style.glitch} data-text={currentWord}>
              {currentWord}
            </div>
          </div>
          <div className="pl-2">developer</div>
        </div>
      </div>
    </div>
  )
}
export default WelcomeText
