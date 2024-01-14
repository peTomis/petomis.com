import { useTranslations } from "@/modules/translations/use"
import ActivityCardHintContent from "@/ui/atoms/ActivityCardHintContent"
import FingerTapIcon from "@/ui/icons/FingerTap"
import PointerClickIcon from "@/ui/icons/PointerClick"

enum ActivityCardVariant {
  darkAndBlue = "darkAndBlue",
  lightAndBlue = "lightAndBlue",
}

const variantClasses = {
  darkAndBlue: "text-defaultTextColor-dark fill-defaultTextColor-dark",
  lightAndBlue: "text-defaultTextColor fill-defaultTextColor",
}

interface Props {
  variant?: keyof typeof ActivityCardVariant
}

const ActivityCardHint = ({ variant }: Props) => {
  const { t } = useTranslations("home")

  return (
    <>
      <ActivityCardHintContent
        idSuffix="mobile"
        icon={<FingerTapIcon />}
        text={t("work.mobileClick")}
        visibility="md:hidden"
        variant={variant}
      />
      <ActivityCardHintContent
        idSuffix="desktop"
        icon={<PointerClickIcon />}
        text={t("work.desktopClick")}
        visibility="hidden md:flex"
        variant={variant}
      />
    </>
  )
}

export default ActivityCardHint
