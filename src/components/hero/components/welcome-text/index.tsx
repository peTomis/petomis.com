// Styles
import style from "./style.module.css"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Animations
import { useEffect, useMemo, useState } from "react"

const WelcomeText = () => {
  const words = useMemo(() => ["backend", "fullstack"], [])
  const [currentWord, setCurrentWord] = useState<string>(words[0])
  const { t } = useTranslations("home")

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
    <div className="flex flex-col items-center justify-center flex-1 px-4 pt-8 select-none sm:pt-16 pg:pt-0 lg:items-start lg:justify-start lg:text-center">
      <div className="font-bold text-center lg:text-start font-orbitron text-name text-primary-100 d:text-nameExtraSmall sm:text-nameSmall md:text-nameMedium lg:text-nameLarge xl:text-nameExtraLarge xxl:text-nameXXL">
        {t("welcome.name")}
      </div>
      <div className="relative flex justify-center font-montserrat lg:w-full lg:justify-start text-job d:text-jobExtraSmall sm:text-jobSmall md:text-jobMedium lg:text-jobLarge xl:text-jobExtraLarge xxl:text-jobXXL">
        <div className={"relative flex flex-row"}>
          <div className="opacity-0 select-none -z-10">backend</div>
          <div className="absolute left-0 ">
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
