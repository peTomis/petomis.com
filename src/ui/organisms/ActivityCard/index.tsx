import ActivityCardDescription from "@/ui/atoms/ActivityCardDescription/index"
import ActivityCardHint from "@/ui/atoms/ActivityCardHint"
import ActivityCardImage from "@/ui/atoms/ActivityCardImage"
import ActivityCardContainer from "@/ui/molecules/ActivityCardContainer"

interface Props {
  imageBackgroundColor: string
  textBackgroundColor: string
  textColor: string
  image: React.ReactNode
  description: React.ReactNode
  onClick?: () => void
}

const ActivityCard = ({
  imageBackgroundColor,
  textBackgroundColor,
  textColor,
  description,
  image,
  onClick,
}: Props) => {
  return (
    <ActivityCardContainer
      imageBackgroundColor={imageBackgroundColor}
      onClick={onClick}
    >
      <ActivityCardHint
        textBackgroundColor={textBackgroundColor}
        textColor={textColor}
      />
      <ActivityCardImage image={image} />
      <ActivityCardDescription
        textBackgroundColor={textBackgroundColor}
        description={description}
      />
    </ActivityCardContainer>
  )
}

export default ActivityCard
