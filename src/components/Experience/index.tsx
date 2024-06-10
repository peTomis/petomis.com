// External libraries
import React from "react"
import splash from "@public/images/splash-left.png"
import darkSplash from "@public/images/splash-left-dark.png"

// External data
import GetExperienceData from "./experiences"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Organisms
import ListFilter from "@/ui/organisms/ListFilter"

// Molecules
import ExperienceCard from "@/ui/molecules/ExperienceCard"

// Atoms
import ExperienceCardContainer from "@/ui/atoms/ExperienceCardContainer"
import { ListFilterColor } from "@/ui/molecules/ListFilterElements"

// Icons
import FunnelIcon from "@/ui/icons/Funnel"
import BriefcaseIcon from "@/ui/icons/Briefcase"
import SectionContainer from "@/ui/atoms/SectionContainer"

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
    <SectionContainer
      id="experience-container"
      splashImage={splash}
      splashDarkImage={darkSplash}
      title={t("experience.title").toUpperCase()}
      titleColor="primary-300"
      titleDarkColor="primary-300"
      description={[]}
      splashAlign="left"
    >
      <div
        id="experience-filter-container"
        className="flex flex-col items-start z-10 justify-start w-full space-y-2 max-w-[600px] md:px-4 md:max-w-[800px]  xl:max-w-[900px]"
      >
        <ListFilter
          icon={<BriefcaseIcon />}
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
          icon={<FunnelIcon />}
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
            duration={experience.duration}
            onClick={() => window.open(experience.url, "_blank")}
          />
        ))}
      </ExperienceCardContainer>
    </SectionContainer>
  )
}

export default Experience
