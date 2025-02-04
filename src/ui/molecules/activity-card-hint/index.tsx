import { useTranslations } from "@/hooks/useTranslations"
import ActivityCardHintContent from "@/ui/atoms/activity-card-hint-content"
import FingerTap from "@/ui/icons/finger-tap"
import PointerClick from "@/ui/icons/pointer-click"
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
        icon={<FingerTap />}
        text={action === "open" ? t("work.mobileClick") : t("work.mobileClose")}
        visibility="md:hidden"
        variant={variant}
      />
      <ActivityCardHintContent
        idSuffix="desktop"
        icon={<PointerClick />}
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
