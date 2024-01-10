import { useTranslations } from "@/modules/translations/use"
import FingerTapIcon from "@/ui/icons/FingerTap"
import PointerClickIcon from "@/ui/icons/PointerClick"

enum ActivityCardVariant {
  darkAndBlue = `text-defaultTextColor-dark fill-defaultTextColor-dark`,
  lightAndBlue = `text-defaultTextColor fill-defaultTextColor`,
}
interface Props {
  variant?: "darkAndBlue" | "lightAndBlue"
}

const ActivityCardHint = ({ variant }: Props) => {
  const { t } = useTranslations("home")

  return (
    <>
      <div
        id="activity-card-hint-mobile"
        className={`d:hidden absolute flex flex-row justify-center items-center space-x-2 top-0 right-0 z-10 py-2 w-[200px]  bg-opacity-50 backdrop-blur-sm  rounded-bl-3xl bg-primary-300 text-center  ${
          variant
            ? ActivityCardVariant[variant]
            : ActivityCardVariant.darkAndBlue
        }`}
      >
        <FingerTapIcon />
        <div id="activity-card-hint-mobile-text">{t("work.mobileClick")}</div>
      </div>
      <div
        id="activity-card-hint-desktop"
        className={`hidden absolute d:flex flex-row justify-center items-center space-x-2 top-0 right-0 z-10 py-2 w-[200px]  bg-opacity-50 backdrop-blur-sm  rounded-bl-3xl bg-primary-300 text-center  ${
          variant
            ? ActivityCardVariant[variant]
            : ActivityCardVariant.darkAndBlue
        }`}
      >
        <PointerClickIcon />

        <div id="activity-card-hint-desktop-text">{t("work.desktopClick")}</div>
      </div>
    </>
  )
}

export default ActivityCardHint
