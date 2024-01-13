import useIsSectionLoaded from "@/hooks/useIsSectionLoaded"
import ActivityCardDescription from "@/ui/atoms/ActivityCardDescription/index"
import ActivityCardHint from "@/ui/atoms/ActivityCardHint"
import ActivityCardImage from "@/ui/atoms/ActivityCardImage"
import ActivityCardContainer from "@/ui/molecules/ActivityCardContainer"
import React from "react"

interface Props {
  variant?: "darkAndBlue" | "lightAndBlue"
  image: React.ReactNode
  description: React.ReactNode
  onClick?: () => void
  id: string
}

const ActivityCard = ({ description, image, onClick, variant, id }: Props) => {
  const isSectionLoaded = useIsSectionLoaded(id)

  return (
    <ActivityCardContainer
      id={id}
      variant={variant}
      onClick={onClick}
      visible={isSectionLoaded}
    >
      <ActivityCardHint variant={variant} />
      <ActivityCardImage image={image} />
      <ActivityCardDescription variant={variant} description={description} />
    </ActivityCardContainer>
  )
}

export default ActivityCard
