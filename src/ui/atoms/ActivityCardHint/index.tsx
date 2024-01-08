import { useTranslations } from "@/modules/translations/use"
import FingerTapIcon from "@/ui/icons/FingerTap"
import PointerClickIcon from "@/ui/icons/PointerClick"

interface Props {
  textBackgroundColor: string
  textColor: string
}

const ActivityCardHint = ({ textBackgroundColor, textColor }: Props) => {
  const { t } = useTranslations("home")

  return (
    <>
      <div
        id="activity-card-hint-mobile"
        className={`lg:hidden absolute flex flex-row justify-center items-center space-x-2 top-0 right-0 z-10 py-2 w-[200px]  bg-opacity-50 backdrop-blur-sm  rounded-bl-3xl bg-${textBackgroundColor} text-center text-${textColor}`}
      >
        <FingerTapIcon />
        <div id="activity-card-hint-mobile-text">{t("work.mobileClick")}</div>
      </div>
      <div
        id="activity-card-hint-desktop"
        className={`hidden lg:flex absolute lg:flex-row justify-center items-center space-x-2 top-0 right-0 z-10 py-2 w-[200px]  bg-opacity-50 backdrop-blur-sm  rounded-bl-3xl bg-${textBackgroundColor} text-center text-${textColor}`}
      >
        <PointerClickIcon />

        <div id="activity-card-hint-desktop-text">{t("work.desktopClick")}</div>
      </div>
    </>
  )
}

export default ActivityCardHint
