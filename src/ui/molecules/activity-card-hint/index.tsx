import { useTranslations } from "@/hooks/useTranslations"
import ActivityCardHintContent from "@/ui/atoms/activity-card-hint-content"
import FingerTapIcon from "@/ui/icons/FingerTap"
import PointerClickIcon from "@/ui/icons/PointerClick"
import { ActivityColorVariant } from "@/utils"

interface Props {
  variant?: ActivityColorVariant
  action?: "open" | "close"
}

const ActivityCardHint = ({ variant, action = "open" }: Props) => {
  const { t } = useTranslations("home")

  return (
    <>
      <ActivityCardHintContent
        idSuffix="mobile"
        icon={<FingerTapIcon />}
        text={action === "open" ? t("work.mobileClick") : t("work.mobileClose")}
        visibility="md:hidden"
        variant={variant}
      />
      <ActivityCardHintContent
        idSuffix="desktop"
        icon={<PointerClickIcon />}
        text={
          action === "open" ? t("work.desktopClick") : t("work.desktopClose")
        }
        visibility="hidden md:flex"
        variant={variant}
      />
    </>
  )
}

export default ActivityCardHint
