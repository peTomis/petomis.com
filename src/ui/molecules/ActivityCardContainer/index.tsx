interface Props {
  imageBackgroundColor: string
  children: React.ReactNode
  onClick?: () => void
}

const ActivityCardContainer = ({
  imageBackgroundColor,
  children,
  onClick,
}: Props) => {
  console.log(imageBackgroundColor)
  return (
    <div
      id="activity-card-container"
      className={`cursor-pointer relative mx-auto h-[500px] w-[300px] bg-${imageBackgroundColor} rounded-lg overflow-hidden select-none`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default ActivityCardContainer
