import CloseButtonIcon from "@/ui/icons/CloseButton"

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
  children: React.ReactNode
  onClose: () => void
}

const ActivityCardExpandedContainer = ({
  children,
  onClose,
  variant = "darkAndBlue",
}: Props) => {
  return (
    <div
      id="activity-card-expanded-container"
      className={`relative flex w-full m-2 xl:m-4 overflow-x-hidden overflow-y-auto ${ActivityCardExpandedBgVariant[variant]}`}
      onClick={(e) => {
        e.stopPropagation()
      }}
      style={{
        height: "-webkit-fill-available",
      }}
    >
      <div
        id="activity-card-expanded-close-button"
        className={`absolute top-4 right-4 cursor-pointer ${ActivityCardExpandedFillVariant[variant]}`}
        onClick={onClose}
      >
        <CloseButtonIcon />
      </div>
      {children}
    </div>
  )
}

export default ActivityCardExpandedContainer
