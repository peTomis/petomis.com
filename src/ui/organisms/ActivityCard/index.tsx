import ActivityCardDescription from "@/ui/atoms/ActivityCardDescription/index"
import ActivityCardHint from "@/ui/atoms/ActivityCardHint"
import ActivityCardImage from "@/ui/atoms/ActivityCardImage"
import ActivityCardContainer from "@/ui/molecules/ActivityCardContainer"

interface Props {
  variant?: "darkAndBlue" | "lightAndBlue"
  image: React.ReactNode
  description: React.ReactNode
  onClick?: () => void
}

const ActivityCard = ({ description, image, onClick, variant }: Props) => {
  return (
    <ActivityCardContainer variant={variant} onClick={onClick}>
      <ActivityCardHint variant={variant} />
      <ActivityCardImage image={image} />
      <ActivityCardDescription variant={variant} description={description} />
    </ActivityCardContainer>
  )
}

export default ActivityCard
