import CloseButtonIcon from "@/ui/icons/CloseButton"
import useLockScroll from "@/utils/lockScroll"

interface Props {
  backgroundColor: string
  textColor: string
  onClose: () => void
  content: React.ReactNode
}

const ActivityCardExpanded = ({
  backgroundColor,
  content,
  onClose,
  textColor,
}: Props) => {
  useLockScroll()

  return (
    <div
      id="activity-card-expanded-background"
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-center w-screen h-screen p-4 bg-black bg-opacity-0 cursor-pointer"
      onClick={onClose}
    >
      <div
        id="activity-card-expanded-container"
        className={`relative flex w-full m-4 xl:m-8 bg-${backgroundColor} rounded-2xl xl:rounded-3xl overflow-x-hidden overflow-y-auto`}
        onClick={(e) => {
          e.stopPropagation()
        }}
        style={{
          height: "-webkit-fill-available",
        }}
      >
        <div
          id="activity-card-expanded-close-button"
          className={`absolute top-4 right-4 cursor-pointer fill-${textColor}`}
          onClick={onClose}
        >
          <CloseButtonIcon />
        </div>
        {content}
      </div>
    </div>
  )
}

export default ActivityCardExpanded
