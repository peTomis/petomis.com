import style from "./style.module.css"
import { useTranslations } from "@/modules/translations/use"

interface Props {
  halfWidth: number
}

const WelcomeText = ({ halfWidth }: Props) => {
  const { t } = useTranslations("home")
  const isXl = 2 * halfWidth > 1280

  const containerStyle = {
    width: `${isXl ? 640 * 0.95 : halfWidth * 0.95}px`,
  }

  return (
    <div className={style.container} style={containerStyle}>
      <div className="font-bold text-slogan font-cascadia">{t("hello")}</div>
      <div className="flex flex-row space-x-4">
        <div className="font-bold text-slogan font-roboto">{t("iAm")}</div>
        <div className="font-bold text-slogan font-roboto text-primary-100">
          {t("name")}
        </div>
      </div>
      <div className="text-slogan font-bacasimeAntique text-primary-300">
        {t("role")}
      </div>
    </div>
  )
}
export default WelcomeText
