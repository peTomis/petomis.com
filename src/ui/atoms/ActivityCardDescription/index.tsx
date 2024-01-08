interface Props {
  textBackgroundColor: string
  description: React.ReactNode
}

const ActivityCardDescription = ({
  description,
  textBackgroundColor,
}: Props) => {
  return (
    <div
      id="activity-card-description-container"
      className={`absolute p-4 bottom-0 w-full bg-opacity-50 backdrop-blur-sm bg-${textBackgroundColor}`}
    >
      {description}
    </div>
  )
}

export default ActivityCardDescription
