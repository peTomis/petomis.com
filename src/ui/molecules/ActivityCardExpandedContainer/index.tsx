import CloseButtonIcon from "@/ui/icons/CloseButton"
import ActivityCardHint from "../ActivityCardHint"
import { TypographyColor } from "@/ui/atoms/Typography"

export enum ActivityCardExpandedFillVariant {
  darkAndBlue = `fill-freelanceIcon`,
  lightAndBlue = `fill-defaultTextColor`,
}

enum ActivityCardExpandedBgVariant {
  darkAndBlue = `bg-black  text-freelanceIcon`,
  lightAndBlue = `bg-freelanceIcon text-defaultTextColor`,
}

interface Props {
  variant?: "darkAndBlue" | "lightAndBlue"
  color?: TypographyColor
  children: React.ReactNode
  onClose: () => void
}

const ActivityCardExpandedContainer = ({
  children,
  onClose,
  variant = "darkAndBlue",
  color,
}: Props) => {
  return (
    <div
      id="activity-card-expanded-container"
      className={`relative flex w-full m-2 xl:m-4 overflow-x-hidden overflow-y-auto transition  animate-scaleUp ${ActivityCardExpandedBgVariant[variant]}`}
      onClick={(e) => {
        e.stopPropagation()
      }}
      style={{
        height: "-webkit-fill-available",
      }}
    >
      <div className="cursor-pointer" onClick={onClose}>
        <ActivityCardHint variant={variant} color={color} action="close" />
      </div>
      {children}
    </div>
  )
}

export default ActivityCardExpandedContainer
