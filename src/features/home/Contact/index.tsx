import { useTranslations } from "@/modules/translations/use"
import style from "./style.module.css"

const Contact = () => {
  const { t } = useTranslations("home")
  return <div className={style.container}></div>
}

export default Contact
