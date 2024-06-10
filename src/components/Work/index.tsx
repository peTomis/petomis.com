// External libraries
import React from "react"
import splash from "@public/images/splash-left.png"
import darkSplash from "@public/images/splash-left-dark.png"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Organisms
import ActivityCardExpanded from "@/ui/organisms/ActivityCardExpanded"
import ActivityCard from "@/ui/organisms/ActivityCard"

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
      splashImage={splash}
      splashDarkImage={darkSplash}
      titleColor="primary-100"
      titleDarkColor="primary-100"
      title={t("work.title").toUpperCase()}
      description={[t("work.description")]}
      splashAlign="left"
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
            color={experience.color}
          />
        ))}
      </ActivityCardGrid>
    </SectionContainer>
  )
}

export default Work
