// External libraries
import React from "react"

// Experience Components
import experiences from "./components/Experiences"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Organisms
import ActivityCardExpanded from "@/ui/organisms/ActivityCardExpanded"
import ActivityCard from "@/ui/organisms/ActivityCard"

// Molecules
import ActivityCardGrid from "@/ui/molecules/ActivityCardGrid"

// Atoms
import SectionTitle from "@/ui/atoms/SectionTitle"
import SectionDescription from "@/ui/atoms/SectionDescription"

// Patterns
import circuitBoardPatternStyle from "@/ui/patterns/circuit-board"

const Work = () => {
  const [experience, setExperience] = React.useState<any>(undefined)
  const { t } = useTranslations("home")

  return (
    <div
      id="work-container"
      className="flex flex-col items-center justify-center w-full py-8 mx-auto bg-opacity-50 bg-primary-200"
      style={circuitBoardPatternStyle}
    >
      <SectionTitle id="work-title" label={t("work.title").toUpperCase()} />
      <SectionDescription rows={[t("work.description")]} />
      {experience && (
        <ActivityCardExpanded
          onClose={() => setExperience(undefined)}
          content={<div>TODO</div>}
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
    </div>
  )
}

export default Work
