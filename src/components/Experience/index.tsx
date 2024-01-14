import { useTranslations } from "@/modules/translations/use"
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
import { experiences } from "./experiences"

const Experience = () => {
  const jobs = ["Fullstack Developer", "Mobile Developer"]
  const filters = [
    "Programming Language",
    "Database",
    "Framework",
    "Other",
    "IDE",
  ]

  const [activeJobs, setActiveJobs] = React.useState<string[]>(jobs)

  const [activeFilters, setActiveFilters] = React.useState<string[]>(filters)

  const { t } = useTranslations("home")

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
      experience.tags.some((tag) => activeFilters.includes(tag)) &&
      experience.tags.some((tag) =>
        activeJobs.includes(tag.concat(" Developer"))
      )
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
        className="flex flex-col items-start justify-start w-full space-y-2  max-w-[900px]"
      >
        <ListFilter
          icon={<BriefcaseIcon />}
          label="Jobs"
          activeFilters={activeJobs}
          filters={jobs}
          onFilterChange={onJobChange}
          color={ListFilterColor.PRIMARY300}
        />
        <ListFilter
          icon={<FunnelIcon />}
          label="Filters"
          activeFilters={activeFilters}
          filters={filters}
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
            tags={experience.tags}
            duration={experience.duration}
          />
        ))}
      </ExperienceCardContainer>
    </div>
  )
}

export default Experience
