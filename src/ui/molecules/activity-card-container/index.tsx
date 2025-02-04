import { customTransitionAnimation } from "@/ui/animations/custom-transition-animation"
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
      className={`cursor-pointer relative mx-auto z-10 h-[500px] w-[300px] overflow-hidden select-none ${
        ActivityColorSecondaryBg[variant]
      } ${customTransitionAnimation(visible)}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default ActivityCardContainer
