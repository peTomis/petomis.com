import { useTranslations } from "@/hooks/useTranslations"
import ActivityCardHintContent from "@/ui/atoms/ActivityCardHintContent"
import { TypographyColor } from "@/ui/atoms/Typography"
import FingerTapIcon from "@/ui/icons/FingerTap"
import PointerClickIcon from "@/ui/icons/PointerClick"

enum ActivityCardVariant {
  darkAndBlue = "darkAndBlue",
  lightAndBlue = "lightAndBlue",
  anubidigital = "anubidigital",
}

interface Props {
  variant?: keyof typeof ActivityCardVariant
  color?: TypographyColor
  action?: "open" | "close"
}

const ActivityCardHint = ({ variant, color, action = "open" }: Props) => {
  const { t } = useTranslations("home")

  return (
    <>
      <ActivityCardHintContent
        idSuffix="mobile"
        icon={<FingerTapIcon />}
        text={action === "open" ? t("work.mobileClick") : t("work.mobileClose")}
        visibility="md:hidden"
        variant={variant}
        color={color}
      />
      <ActivityCardHintContent
        idSuffix="desktop"
        icon={<PointerClickIcon />}
        text={
          action === "open" ? t("work.desktopClick") : t("work.desktopClose")
        }
        visibility="hidden md:flex"
        variant={variant}
        color={color}
      />
    </>
  )
}

export default ActivityCardHint
