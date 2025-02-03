import {
  ActivityColorBg,
  ActivityColorDetailBg,
  ActivityColorVariant,
} from "@/utils"
import ActivityCardHint from "../activity-card-hint"

interface Props {
  variant?: ActivityColorVariant
  children: React.ReactNode
  onClose: () => void
}

const ActivityCardExpandedContainer = ({
  children,
  onClose,
  variant = ActivityColorVariant.MOBILE,
}: Props) => {
  return (
    <div
      id="activity-card-expanded-container"
      className={`relative flex w-full m-2 xl:m-4 overflow-x-hidden overflow-y-auto transition  animate-scaleUp ${ActivityColorDetailBg[variant]}`}
      onClick={(e) => {
        e.stopPropagation()
      }}
      style={{
        height: "-webkit-fill-available",
      }}
    >
      <div
        id="activity-card-expanded-content"
        className={`flex w-full overflow-x-hidden overflow-y-auto transition`}
        onClick={(e) => {
          e.stopPropagation()
        }}
        style={{
          height: "-webkit-fill-available",
        }}
      >
        <div
          id="activity-card-expanded-close"
          className="absolute top-0 right-0 z-30 cursor-pointer"
          onClick={onClose}
        >
          <ActivityCardHint variant={variant} action="close" />
        </div>
        {children}
      </div>
    </div>
  )
}

export default ActivityCardExpandedContainer
