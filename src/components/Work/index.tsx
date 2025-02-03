// External libraries
import React from "react"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Organisms
import ActivityCardExpanded from "@/ui/organisms/activity-card-expanded"
import ActivityCard from "@/ui/organisms/activity-card"

// Molecules
import ActivityCardGrid from "@/ui/molecules/ActivityCardGrid"

// Patterns
import { useJobExperiences } from "@/hooks/useJobExperiences"
import SectionContainer from "@/ui/atoms/SectionContainer"

const Work = () => {
  const [experience, setExperience] = React.useState<any>(undefined)
  const experiences = useJobExperiences()
  const { t } = useTranslations("home")

  return (
    <SectionContainer
      id="work-container"
      title={t("work.title").toUpperCase()}
      description={[t("work.description")]}
    >
      {experience && (
        <ActivityCardExpanded
          onClose={() => setExperience(undefined)}
          content={experience.details()}
          variant={experience.variant}
        />
      )}
      <ActivityCardGrid>
        {experiences.map((experience, key) => (
          <ActivityCard
            id={experience.job}
            key={key}
            onClick={() => setExperience(experience)}
            image={experience.image()}
            description={experience.description()}
            variant={experience.variant}
          />
        ))}
      </ActivityCardGrid>
    </SectionContainer>
  )
}

export default Work
