enum ActivityCardDescriptionVariant {
  darkAndBlue = `bg-primary-300`,
  lightAndBlue = `bg-primary-300`,
}

interface Props {
  variant?: "darkAndBlue" | "lightAndBlue"
  description: React.ReactNode
}

const ActivityCardDescription = ({ description, variant }: Props) => {
  return (
    <div
      id="activity-card-description-container"
      className={`absolute p-4 bottom-0 w-full bg-opacity-50 backdrop-blur-sm  ${
        variant
          ? ActivityCardDescriptionVariant[variant]
          : ActivityCardDescriptionVariant.darkAndBlue
      }`}
    >
      {description}
    </div>
  )
}

export default ActivityCardDescription
