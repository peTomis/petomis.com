// External libraries
import React from "react"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Organisms
import ActivityCardExpanded from "@/ui/organisms/activity-card-expanded"
import ActivityCard from "@/ui/organisms/activity-card"

// Molecules
import ActivityCardGrid from "@/ui/molecules/activity-card-grid"

// Patterns
import { useJobExperiences } from "@/hooks/useJobExperiences"
import Typography from "@/ui/atoms/typography_"

const Work = () => {
  const [experience, setExperience] = React.useState<any>(undefined)
  const experiences = useJobExperiences()
  const { t } = useTranslations("home")

  return (
    <div
      id="work-container"
      className="relative flex flex-col items-center justify-center w-full pt-16 pb-32 mx-auto space-y-8 overflow-hidden md:pb-16 md:pt-16 bg-gradient-radial from-primary-400 to-black"
    >
      <div className="z-10 flex flex-col items-center justify-center w-full space-y-8">
        <Typography extrabold size="h1" text={t("work.title").toUpperCase()} />
        <div className="opacity-60">
          <Typography light size="h6" md="h4" text={t("work.description")} />
        </div>
      </div>
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
      {/* <div className="absolute invisible md:visible right-0 w-[1024px] h-[1024px] fill-primary-400 opacity-20">
        <Scroll />
      </div> */}
    </div>
  )
}

export default Work
