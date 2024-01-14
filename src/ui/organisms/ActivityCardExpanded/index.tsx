import ActivityCardExpandedContainer from "@/ui/molecules/ActivityCardExpandedContainer"
import useLockScroll from "@/utils/lockScroll"

interface Props {
  onClose: () => void
  content: React.ReactNode
  variant?: "darkAndBlue" | "lightAndBlue"
}

const ActivityCardExpanded = ({ content, onClose, variant }: Props) => {
  useLockScroll()

  return (
    <div
      id="activity-card-expanded-background"
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-center w-screen h-screen p-4 bg-black bg-opacity-0 cursor-pointer"
      onClick={onClose}
    >
      <ActivityCardExpandedContainer onClose={onClose} variant={variant}>
        {/* {content} */}
        <div className="flex items-center justify-center w-full h-full">
          Work in progress
        </div>
      </ActivityCardExpandedContainer>
    </div>
  )
}

export default ActivityCardExpanded
