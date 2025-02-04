// External libraries
import React from "react"

// External data
import GetExperienceData from "./experiences"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Organisms
import ListFilter from "@/ui/organisms/list-filter"

// Molecules
import ExperienceCard from "@/ui/molecules/experience-card"
import { ListFilterColor } from "@/ui/molecules/list-filter-elements"

// Atoms
import ExperienceCardContainer from "@/ui/atoms/experience-card-container"
import Typography from "@/ui/atoms/typography_"

// Icons
import Briefcase from "@/ui/icons/briefcase_"
import Funnel from "@/ui/icons/funnel_"
import { parseExperienceTime } from "@/utils"

const Experience = () => {
  const { t } = useTranslations("home")

  const jobs = ["fullstack", "mobile"]

  const filters = [
    "fullstack",
    "mobile",
    "framework",
    "database",
    "programmingLanguage",
    "ide",
    "other",
  ]

  const experiences = GetExperienceData()

  const [activeJobs, setActiveJobs] = React.useState<string[]>(jobs)

  const [activeFilters, setActiveFilters] = React.useState<string[]>(filters)

  const createDateString = ({
    unit,
    number,
  }: {
    number: number
    unit: string
  }) => {
    return String(number) + " " + t(unit)
  }

  const onJobChange = (filter: string) => {
    if (activeJobs.includes(filter)) {
      setActiveJobs(activeJobs.filter((f) => f !== filter))
    } else {
      setActiveJobs([...activeJobs, filter])
    }
  }

  const onFilterChange = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const filteredExperiences = experiences.filter(
    (experience) =>
      experience.tags
        .filter((tag) => tag.value !== "fullstack" && tag.value !== "mobile")
        .every((tag) => activeFilters.includes(tag.value)) &&
      experience.tags.some((tag) => activeJobs.includes(tag.value))
  )

  return (
    <div
      id="experience-container"
      className="relative flex flex-col items-center justify-center w-full pt-16 pb-32 mx-auto space-y-8 overflow-hidden md:pb-16 md:pt-16 bg-gradient-radial from-primary-400 to-primary-500"
    >
      <div className="z-10 flex flex-col items-center justify-center w-full space-y-8">
        <Typography
          extrabold
          size="h1"
          text={t("experience.title").toUpperCase()}
        />
      </div>
      <div
        id="experience-filter-container"
        className="flex flex-col px-4 md:px-0 items-start z-10 justify-start w-full space-y-2 max-w-[498px] xl:px-4 md:max-w-[624px]  lg:max-w-[750px] xl:max-w-[1002px]"
      >
        <ListFilter
          icon={<Briefcase />}
          label={t("experience.jobs")}
          activeFilters={activeJobs}
          filters={[
            {
              key: t("experience.tag.fullstack"),
              value: "fullstack",
            },
            {
              key: t("experience.tag.mobile"),
              value: "mobile",
            },
          ]}
          onFilterChange={onJobChange}
          color={ListFilterColor.PRIMARY300}
        />
        <ListFilter
          icon={<Funnel />}
          label={t("experience.filters")}
          activeFilters={activeFilters}
          filters={[
            {
              key: t("experience.tag.framework"),
              value: "framework",
            },
            {
              key: t("experience.tag.database"),
              value: "database",
            },
            {
              key: t("experience.tag.programmingLanguage"),
              value: "programmingLanguage",
            },
            {
              key: t("experience.tag.ide"),
              value: "ide",
            },
            {
              key: t("experience.tag.other"),
              value: "other",
            },
          ]}
          onFilterChange={onFilterChange}
          color={ListFilterColor.PRIMARY200}
        />
      </div>

      <ExperienceCardContainer>
        {filteredExperiences.map((experience, key) => (
          <ExperienceCard
            key={key}
            name={experience.name}
            icon={experience.icon}
            tags={experience.tags.map((t) => t.key)}
            duration={createDateString(
              parseExperienceTime(experience.duration)
            )}
            onClick={() => window.open(experience.url, "_blank")}
          />
        ))}
      </ExperienceCardContainer>
    </div>
  )
}

export default Experience
