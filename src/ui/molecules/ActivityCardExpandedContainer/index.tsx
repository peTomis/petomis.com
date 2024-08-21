import ActivityCardHint from "../ActivityCardHint"

export enum ActivityCardExpandedFillVariant {
  darkAndBlue = `fill-primary-50`,
  lightAndBlue = `fill-defaultTextColor`,
  anubidigital = `fill-anubidigital`,
  pienissimo = `fill-pienissimo`,
}

enum ActivityCardExpandedBgVariant {
  darkAndBlue = `bg-black  text-primary-50`,
  lightAndBlue = `bg-primary-50 text-defaultTextColor`,
  anubidigital = `bg-black text-anubidigital`,
  pienissimo = `bg-white text-defaultTextColor`,
}

enum Color {
  darkAndBlue = "defaultTextColor-dark",
  lightAndBlue = "defaultTextColor",
  anubidigital = "defaultTextColor-dark",
  pienissimo = "defaultTextColor",
}

interface Props {
  variant?: "darkAndBlue" | "lightAndBlue" | "anubidigital" | "pienissimo"
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
      className={`relative flex w-full m-2 xl:m-4 overflow-x-hidden overflow-y-auto transition  animate-scaleUp ${ActivityCardExpandedBgVariant[variant]}`}
      onClick={(e) => {
        e.stopPropagation()
      }}
      style={{
        height: "-webkit-fill-available",
      }}
    >
      <div
        id="activity-card-expanded-container"
        className={`flex w-full overflow-x-hidden overflow-y-auto transition`}
        onClick={(e) => {
          e.stopPropagation()
        }}
        style={{
          height: "-webkit-fill-available",
        }}
      >
        <div
          className="absolute top-0 right-0 z-30 cursor-pointer"
          onClick={onClose}
        >
          <ActivityCardHint
            variant={variant}
            color={Color[variant]}
            action="close"
          />
        </div>
        {children}
      </div>
    </div>
  )
}

export default ActivityCardExpandedContainer
