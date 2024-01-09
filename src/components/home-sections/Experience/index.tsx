import { useTranslations } from "@/modules/translations/use"
import style from "./style.module.css"

const Experience = () => {
  const { t } = useTranslations("home")
  return (
    <div id="experience-container" className={style.container}>
      <div className={style.title}>{t("aboutMe.title")}</div>
      <div className={style.text}>
        {t("aboutMe.text1")}
        <span className={"text-primary-200"}>{t("aboutMe.text2")}</span>
        {t("aboutMe.text3")}
        <span className={"text-primary-200"}>{t("aboutMe.text4")}</span>
        {t("aboutMe.text5")}
        <span className={"text-primary-200"}>{t("aboutMe.text6")}</span>
        {t("aboutMe.text7")}
      </div>
      <div className={style.text}>{t("aboutMe.text8")}</div>
      <div className={style.text}>{t("aboutMe.text9")}</div>
      <div className={style.text}>{t("aboutMe.text10")}</div>
    </div>
  )
}

export default Experience
