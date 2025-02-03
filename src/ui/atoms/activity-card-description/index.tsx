import { ActivityColorBg, ActivityColorVariant } from "@/utils"

interface Props {
  variant?: ActivityColorVariant
  description: React.ReactNode
}

const ActivityCardDescription = ({
  description,
  variant = ActivityColorVariant.MOBILE,
}: Props) => {
  return (
    <div
      id="activity-card-description-container"
      className={`absolute p-4 bottom-0 w-full bg-opacity-50 backdrop-blur-sm  ${ActivityColorBg[variant]}`}
    >
      {description}
    </div>
  )
}

export default ActivityCardDescription
