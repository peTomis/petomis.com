import { useEffect, useState } from "react"
import style from "./style.module.css"
import { useTranslations } from "@/modules/translations/use"

interface Props {
  halfWidth: number
}

const WelcomeText = ({ halfWidth }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState("")

  const { t } = useTranslations("home")
  const words = [t("roleA"), t("roleB")]

  useEffect(() => {
    const wordIndex = currentIndex % words.length
    const word = words[wordIndex]
    let wordTimer: any

    const typeWriter = (word: string, index: number, typingSpeed: number) => {
      if (index < word.length) {
        setCurrentWord((prevWord) => prevWord + word[index])
        wordTimer = setTimeout(() => {
          typeWriter(word, index + 1, typingSpeed)
        }, typingSpeed)
      } else {
        setTimeout(() => {
          deleteWord(word, word.length - 1, 50)
        }, 2000) // Delay before starting the delete effect
      }
    }

    const deleteWord = (word: string, index: number, deletingSpeed: number) => {
      if (index >= 1) {
        // Start deleting from position [1]
        setCurrentWord((prevWord) => prevWord.slice(0, -1))
        setTimeout(() => {
          deleteWord(word, index - 1, deletingSpeed)
        }, deletingSpeed)
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }
    }

    setCurrentWord(word[0]) // Set initial letter at position [0]
    typeWriter(word, 1, 150) // Typing speed: 150 milliseconds per character

    return () => {
      clearTimeout(wordTimer)
    }
  }, [currentIndex])

  return (
    <div className={style.container}>
      <div className="font-roboto text-h4 lg:mx-0 d:text-h1">{t("hello")}</div>
      <div className="flex flex-col items-start w-full d:items-end d:space-x-4 d:flex-row">
        <div className="text-h3 font-roboto d:text-h1 d:pb-2">{t("iAm")}</div>
        <div className="font-bold text-h3 font-agdasima xxs:text-h1 text-primary-100 d:text-myName">
          {t("name")}
        </div>
      </div>
      <div className="flex items-center justify-center pl-4 d:pl-8 text-h5 font-bacasimeAntique text-primary-300 xxs:text-h4 d:text-h2">
        <h1 className="relative text-3xl text-center">
          <span className={style.typewriter}>{currentWord}</span>
          <div className={style.cursor} />
        </h1>
      </div>
      <div className={style.contactContainer}>
        <div className={style.contact}>{t("contact")}</div>
      </div>
    </div>
  )
}
export default WelcomeText
