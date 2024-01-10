import { useTranslations } from "@/modules/translations/use"
import style from "./style.module.css"

const Experience = () => {
  const { t } = useTranslations("home")
  return (
    <div id="experience-container" className={style.container}>
      <div className={style.title}>Experience</div>
      <div className={style.text}>Work in progress</div>
    </div>
  )
}

export default Experience
