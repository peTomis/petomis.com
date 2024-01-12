import { useTranslations } from "@/modules/translations/use"
import experiences from "./components/Experiences"
import ActivityCardExpanded from "@/ui/organisms/ActivityCardExpanded"
import { useState } from "react"
import ActivityCard from "@/ui/organisms/ActivityCard"
import circuitBoardPatternStyle from "@/ui/patterns/circuit-board"
import SectionTitle from "@/ui/atoms/SectionTitle"
import SectionDescription from "@/ui/atoms/SectionDescription"
import ActivityCardGrid from "@/ui/molecules/ActivityCardGrid"

const Work = () => {
  const [experience, setExperience] = useState<any>(undefined)
  const { t } = useTranslations("home")

  return (
    <div
      id="work-container"
      className="flex flex-col items-center justify-center w-full py-8 mx-auto"
      style={circuitBoardPatternStyle}
    >
      <SectionTitle id="work-title" label={t("work.title").toUpperCase()} />
      <SectionDescription rows={[t("work.description")]} />
      {experience && (
        <ActivityCardExpanded
          onClose={() => setExperience(undefined)}
          content={experience.fullDescription()}
          variant={experience.variant}
        />
      )}
      <ActivityCardGrid>
        {experiences.map((experience, key) => (
          <ActivityCard
            key={key}
            onClick={() => setExperience(experience)}
            image={experience.image()}
            description={experience.description()}
            variant={experience.variant}
          />
        ))}
      </ActivityCardGrid>
    </div>
  )
}

export default Work
