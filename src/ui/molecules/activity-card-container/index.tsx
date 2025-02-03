import { customTransitionAnimation } from "@/ui/animations/CustomTransitionAnimation"
import { ActivityColorSecondaryBg, ActivityColorVariant } from "@/utils"

interface Props {
  variant?: ActivityColorVariant
  children: React.ReactNode
  onClick?: () => void
  visible?: boolean
  id?: string
  skipAnimation?: boolean
}

const ActivityCardContainer = ({
  variant = ActivityColorVariant.MOBILE,
  children,
  onClick,
  visible,
  id,
}: Props) => {
  return (
    <div
      id={id}
      className={`cursor-pointer relative mx-auto h-[500px] w-[300px] overflow-hidden select-none ${
        ActivityColorSecondaryBg[variant]
      } ${customTransitionAnimation(visible)}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default ActivityCardContainer
