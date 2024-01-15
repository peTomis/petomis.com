import { useTranslations } from "@/hooks/useTranslations"
import ActivityCardHintContent from "@/ui/atoms/ActivityCardHintContent"
import { TypographyColor } from "@/ui/atoms/Typography"
import FingerTapIcon from "@/ui/icons/FingerTap"
import PointerClickIcon from "@/ui/icons/PointerClick"

enum ActivityCardVariant {
  darkAndBlue = "darkAndBlue",
  lightAndBlue = "lightAndBlue",
}

interface Props {
  variant?: keyof typeof ActivityCardVariant
  color?: TypographyColor
}

const ActivityCardHint = ({ variant, color }: Props) => {
  const { t } = useTranslations("home")

  return (
    <>
      <ActivityCardHintContent
        idSuffix="mobile"
        icon={<FingerTapIcon />}
        text={t("work.mobileClick")}
        visibility="md:hidden"
        variant={variant}
        color={color}
      />
      <ActivityCardHintContent
        idSuffix="desktop"
        icon={<PointerClickIcon />}
        text={t("work.desktopClick")}
        visibility="hidden md:flex"
        variant={variant}
        color={color}
      />
    </>
  )
}

export default ActivityCardHint
