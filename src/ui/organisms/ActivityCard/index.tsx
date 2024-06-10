import useIsSectionLoaded from "@/hooks/useIsSectionLoaded"
import ActivityCardDescription from "@/ui/atoms/ActivityCardDescription/index"
import ActivityCardHint from "@/ui/molecules/ActivityCardHint"
import ActivityCardImage from "@/ui/atoms/ActivityCardImage"
import ActivityCardContainer from "@/ui/molecules/ActivityCardContainer"
import React from "react"
import { TypographyColor } from "@/ui/atoms/Typography"

interface Props {
  variant?: "darkAndBlue" | "lightAndBlue" | "anubidigital"
  image: React.ReactNode
  description: React.ReactNode
  onClick?: () => void
  id: string
  color?: TypographyColor
}

const ActivityCard = ({
  description,
  image,
  onClick,
  variant,
  id,
  color,
}: Props) => {
  const isSectionLoaded = useIsSectionLoaded(id, 3)
  return (
    <ActivityCardContainer
      id={id}
      variant={variant}
      onClick={onClick}
      visible={isSectionLoaded}
    >
      <ActivityCardHint variant={variant} color={color} />
      <ActivityCardImage image={image} />
      <ActivityCardDescription variant={variant} description={description} />
    </ActivityCardContainer>
  )
}

export default ActivityCard
