// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Utils
import useLockScroll from "@/utils/lockScroll"

// Molecules
import ActivityCardExpandedContainer from "@/ui/molecules/ActivityCardExpandedContainer"

interface Props {
  onClose: () => void
  content: React.ReactNode
  variant?: "darkAndBlue" | "lightAndBlue"
}

const ActivityCardExpanded = ({ content, onClose, variant }: Props) => {
  const { t } = useTranslations("common")
  useLockScroll()

  return (
    <div
      id="activity-card-expanded-background"
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-center w-screen h-screen p-4 bg-black bg-opacity-0 cursor-pointer"
      onClick={onClose}
    >
      <ActivityCardExpandedContainer onClose={onClose} variant={variant}>
        <div className="flex flex-col items-center justify-center w-full cursor-default md:flex-row">
          <div className="flex items-center justify-center w-full">
            {t("common.wip")}
          </div>
          <div className="flex items-center justify-center w-full">
            {t("common.wip")}
          </div>
        </div>
      </ActivityCardExpandedContainer>
    </div>
  )
}

export default ActivityCardExpanded
