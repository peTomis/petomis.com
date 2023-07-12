import { useTranslations } from "@/modules/translations/use"
import style from "./style.module.css"

const AboutMe = () => {
  const { t } = useTranslations("home")
  return (
    <div className={style.container}>
      <div className={style.title}>{t("aboutMeTitle")}</div>
      <div className={style.text}>
        {t("aboutMeText1")}
        <span className={"text-primary-200"}>{t("aboutMeText2")}</span>
        {t("aboutMeText3")}
        <span className={"text-primary-200"}>{t("aboutMeText4")}</span>
        {t("aboutMeText5")}
        <span className={"text-primary-200"}>{t("aboutMeText6")}</span>
        {t("aboutMeText7")}
      </div>
      <div className={style.text}>{t("aboutMeText8")}</div>
      <div className={style.text}>{t("aboutMeText9")}</div>
      <div className={style.text}>{t("aboutMeText10")}</div>
    </div>
  )
}

export default AboutMe
