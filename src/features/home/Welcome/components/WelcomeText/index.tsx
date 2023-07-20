import style from "./style.module.css"
import { useTranslations } from "@/modules/translations/use"
import Button from "@/ui/atoms/Button"
import { useTypewriterEffect } from "@/ui/animations/TypewriterEffect"
import { useCallback } from "react"

const Hello = () => {
  const { t } = useTranslations("home")
  return <div className={style.hello}>{t("welcome.hello")}</div>
}

const IAm = () => {
  const { t } = useTranslations("home")
  return <div className={style.iAm}>{t("welcome.iAm")}</div>
}

const Name = () => {
  const { t } = useTranslations("home")
  return <div className={style.name}>{t("welcome.name")}</div>
}

const WelcomeText = () => {
  const { t } = useTranslations("home")
  const words = [t("welcome.firstRole"), t("welcome.secondRole")]

  const { currentWord } = useTypewriterEffect(words)

  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  }, [])

  return (
    <div className={style.container}>
      <div className={style.smallTextRow}>
        <Hello />
        <IAm />
      </div>
      <div className={style.smallTextRow}>
        <Name />
      </div>
      <div className={style.largeTextRow}>
        <Hello />
      </div>
      <div className={style.largeTextRow}>
        <IAm />
        <Name />
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
