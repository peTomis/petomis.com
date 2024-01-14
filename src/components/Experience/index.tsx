import { useTranslations } from "@/hooks/useTranslations"
import ExperienceCard from "@/ui/molecules/ExperienceCard"
import ExperienceCardContainer from "@/ui/atoms/ExperienceCardContainer"
import SectionTitle, {
  SectionTitleColor,
  SectionTitleFont,
} from "@/ui/atoms/SectionTitle"
import FunnelIcon from "@/ui/icons/Funnel"
import { ListFilterColor } from "@/ui/molecules/ListFilterElements"
import React from "react"
import BriefcaseIcon from "@/ui/icons/Briefcase"
import ListFilter from "@/ui/organisms/ListFilter"
import GetExperienceData from "./experiences"

const Experience = () => {
  const { t } = useTranslations("home")
  const jobs = ["fullstack", "mobile"]
  const filters = [
    "backend",
    "frontend",
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
      experience.tags.some((tag) => activeFilters.includes(tag.value)) &&
      experience.tags.some((tag) => activeJobs.includes(tag.value))
  )

  return (
    <div
      id="experience-container"
      className="flex flex-col items-center justify-center w-full py-16 space-y-16 text-defaultTextColor dark:text-defaultTextColor-dark"
    >
      <SectionTitle
        id="experience-title"
        label={t("experience.title").toUpperCase()}
        color={SectionTitleColor.PRIMARY300}
        font={SectionTitleFont.BACASIME_ANTIQUE}
      />

      <div
        id="experience-filter-container"
        className="flex flex-col items-start justify-start w-full space-y-2 max-w-[600px] md:px-4 md:max-w-[800px]  xl:max-w-[900px]"
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
              key: t("experience.tag.backend"),
              value: "backend",
            },
            {
              key: t("experience.tag.frontend"),
              value: "frontend",
            },
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
          />
        ))}
      </ExperienceCardContainer>
    </div>
  )
}

export default Experience
