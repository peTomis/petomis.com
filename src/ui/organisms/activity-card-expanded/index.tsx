// Utils
import useLockScroll from "@/utils/lockScroll"

// Molecules
import ActivityCardExpandedContainer from "@/ui/molecules/activity-card-expanded-container"
import { ActivityColorVariant } from "@/utils"

interface Props {
  onClose: () => void
  content: React.ReactNode
  variant?: ActivityColorVariant
}

const ActivityCardExpanded = ({ content, onClose, variant }: Props) => {
  useLockScroll()

  return (
    <div
      id="activity-card-expanded-background"
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-center w-screen h-[94vh] px-4 bg-opacity-0 cursor-pointer"
      onClick={onClose}
    >
      <ActivityCardExpandedContainer onClose={onClose} variant={variant}>
        {content}
      </ActivityCardExpandedContainer>
    </div>
  )
}

export default ActivityCardExpanded
