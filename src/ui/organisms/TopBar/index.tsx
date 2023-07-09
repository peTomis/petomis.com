import { useTranslations } from "@/modules/translations/use"
import style from "./TopBar.module.css"
import Typography from "@/ui/atoms/Typography"

const TopBar = () => {
  const { t } = useTranslations("common")
  return (
    <div id="topBar" className={style.container}>
      <div id="section1" className={style.item}>
        <Typography>{t("topBar.features")}</Typography>
      </div>
      <div id="section2" className={style.item}>
        <Typography>{t("topBar.section2")}</Typography>
      </div>
      <div id="section3" className={style.item}>
        <Typography>{t("topBar.section3")}</Typography>
      </div>
    </div>
  )
}

export default TopBar
