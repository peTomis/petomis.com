import { useTranslations } from "@/modules/translations/use"
import experiences from "./components/Experiences"
import ActivityCardExpanded from "@/ui/organisms/ActivityCardExpanded"
import { useState } from "react"
import ActivityCard from "@/ui/organisms/ActivityCard"
import circuitBoardPatternStyle from "@/ui/patterns/circuit-board"

const Work = () => {
  const [experience, setExperience] = useState<any>(undefined)
  const { t } = useTranslations("home")

  return (
    <div
      id="work-container"
      className="flex flex-col w-full py-8 mx-auto "
      style={circuitBoardPatternStyle}
    >
      <div className="w-full py-8 font-extrabold text-center text-h1 font-roboto text-defaultTextColor dark:text-defaultTextColor-dark">
        {t("work.title").toUpperCase()}
      </div>
      <div className="flex flex-col w-full pt-8 pb-16 font-light text-center text-h5 xl:text-h4 font-roboto text-defaultTextColor dark:text-defaultTextColor-dark">
        <div>{t("work.description")}</div>
      </div>
      {experience && (
        <ActivityCardExpanded
          backgroundColor={experience.imageBackgroundColor}
          textColor={experience.textColor}
          onClose={() => setExperience(undefined)}
          content={experience.description()}
        />
      )}
      <div className="flex mx-auto font-extrabold text-center text-h2 font-bacasimeAntique text-primary-300">
        {t("experience.title")}
      </div>
      <div
        id="activity-card-grid"
        className="grid gap-4 p-4 mx-auto md:grid-cols-2"
      >
        {experiences.map((experience, key) => (
          <ActivityCard
            key={key}
            imageBackgroundColor={experience.imageBackgroundColor}
            textBackgroundColor={experience.textBackgroundColor}
            onClick={() => setExperience(experience)}
            textColor={experience.textColor}
            image={experience.image()}
            description={experience.description()}
          />
        ))}
      </div>
    </div>
  )
}

export default Work
