interface Props {
  image: React.ReactNode
}

const ActivityCardImage = ({ image }: Props) => {
  return (
    <div
      id="activity-card-image-container"
      className="absolute top-0 left-0 w-full"
    >
      {image}
    </div>
  )
}

export default ActivityCardImage
