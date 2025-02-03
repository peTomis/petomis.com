//External Libraries
import React from "react"

// Hooks
import useIsSectionLoaded from "@/hooks/useIsSectionLoaded"

// Molecules
import ActivityCardContainer from "@/ui/molecules/activity-card-container"
import ActivityCardHint from "@/ui/molecules/activity-card-hint"

// Atoms
import ActivityCardDescription from "@/ui/atoms/activity-card-description/index"
import ActivityCardImage from "@/ui/atoms/ActivityCardImage"

// Utils
import { ActivityColorVariant } from "@/utils"

interface Props {
  variant?: ActivityColorVariant
  image: React.ReactNode
  description: React.ReactNode
  onClick?: () => void
  id: string
}

const ActivityCard = ({ description, image, onClick, variant, id }: Props) => {
  const isSectionLoaded = useIsSectionLoaded(id, 3)
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
