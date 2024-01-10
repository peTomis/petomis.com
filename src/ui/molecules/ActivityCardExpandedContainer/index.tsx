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
  variant,
}: Props) => {
  return (
    <div
      id="activity-card-expanded-container"
      className={`relative flex w-full m-4 xl:m-8 rounded-2xl xl:rounded-3xl overflow-x-hidden overflow-y-auto ${
        variant
          ? ActivityCardExpandedBgVariant[variant]
          : ActivityCardExpandedBgVariant.darkAndBlue
      }`}
      onClick={(e) => {
        e.stopPropagation()
      }}
      style={{
        height: "-webkit-fill-available",
      }}
    >
      <div
        id="activity-card-expanded-close-button"
        className={`absolute top-4 right-4 cursor-pointer ${
          variant
            ? ActivityCardExpandedFillVariant[variant]
            : ActivityCardExpandedFillVariant.darkAndBlue
        }`}
        onClick={onClose}
      >
        <CloseButtonIcon />
      </div>
      {children}
    </div>
  )
}

export default ActivityCardExpandedContainer
