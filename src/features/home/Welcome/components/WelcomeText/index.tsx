import { useEffect, useState } from "react"
import style from "./style.module.css"
import { useTranslations } from "@/modules/translations/use"
import Button from "@/ui/atoms/Button"

const WelcomeText = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState("")

  const { t } = useTranslations("home")
  const words = [t("welcome.firstRole"), t("welcome.secondRole")]

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
    return
  }

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

  const hello = () => <div className={style.hello}>{t("welcome.hello")}</div>
  const iAm = () => <div className={style.iAm}>{t("welcome.iAm")}</div>
  const name = () => <div className={style.name}>{t("welcome.name")}</div>

  return (
    <div className={style.container}>
      <div className={style.smallTextRow}>
        {hello()}
        {iAm()}
      </div>
      <div className={style.smallTextRow}>{name()}</div>
      <div className={style.largeTextRow}>{hello()}</div>
      <div className={style.largeTextRow}>
        {iAm()}
        {name()}
      </div>
      <div className={style.jobTypewriter}>
        <h1 className={style.jobTypewriterText}>
          <span className={style.typewriter}>{currentWord}</span>
          <div className={style.cursor} />
        </h1>
      </div>
      <div className={style.contactContainer}>
        <Button
          label={t("welcome.contact")}
          primary={false}
          onClick={scrollToBottom}
        />
      </div>
    </div>
  )
}
export default WelcomeText
