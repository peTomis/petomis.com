enum ActivityCardContainerVariant {
  darkAndBlue = `bg-black`,
  lightAndBlue = `bg-freelanceIcon`,
}

interface Props {
  variant?: "darkAndBlue" | "lightAndBlue"
  children: React.ReactNode
  onClick?: () => void
}

const ActivityCardContainer = ({ variant, children, onClick }: Props) => {
  return (
    <div
      id="activity-card-container"
      className={`cursor-pointer relative mx-auto h-[500px] w-[300px] rounded-lg overflow-hidden select-none ${
        variant
          ? ActivityCardContainerVariant[variant]
          : ActivityCardContainerVariant.darkAndBlue
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default ActivityCardContainer
