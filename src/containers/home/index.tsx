import { useTranslations } from "@modules/translations/use"

const HomeContainer = () => {
  const { t } = useTranslations("common")
  return (
    <div className="flex flex-col items-center justify-center">
      <div>{t("greeting", { name: "Pe" })}</div>
      <div>{t("welcome")}</div>
    </div>
  )
}

export default HomeContainer
