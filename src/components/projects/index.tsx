// External Imports
import { useState } from "react"

// Components
import ProjectCard from "./components/project-card"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"
import { Project, useProjects } from "@/hooks/useProjects"

// Organisms
import EmployeeDetails from "@/ui/organisms/employee-details"

// Atoms
import Reveal from "@/ui/atoms/reveal"

// Molecules
import SectionHeader from "@/ui/molecules/section-header"

// Utils
import { WebsiteSection, sectionContainer, sectionNumber } from "@/utils"
import { cn } from "@/utils/cn"

const Projects = () => {
  const [employeeExperience, setEmployeeExperience] = useState<
    Project | undefined
  >(undefined)
  const projects = useProjects()
  const { t } = useTranslations("home")
  // The details modal is a sibling rather than a replacement, so the cards
  // go inert while it's open to keep them out of tab order behind it.
  const isModalOpen = employeeExperience !== undefined

  return (
    <section
      id={WebsiteSection.PROJECTS}
      aria-labelledby="projects-title"
      className={cn(
        sectionContainer,
        "relative py-16 min-[561px]:py-[90px] scroll-mt-24"
      )}
    >
      <SectionHeader
        index={sectionNumber(WebsiteSection.PROJECTS)}
        label={t("sections.projects")}
        title={t("projects.title")}
        titleId="projects-title"
        description={t("projects.description")}
      />
      <ul
        className="grid grid-cols-[repeat(auto-fit,minmax(min(330px,100%),1fr))] auto-rows-fr gap-7"
        aria-hidden={isModalOpen}
        inert={isModalOpen}
      >
        {projects.map((project, index) => (
          <li key={project.name}>
            <Reveal delay={(index % 3) * 0.08} className="h-full">
              <ProjectCard
                project={project}
                index={index + 1}
                onOpenDetails={() => setEmployeeExperience(project)}
              />
            </Reveal>
          </li>
        ))}
      </ul>
      {employeeExperience && (
        <EmployeeDetails
          onClose={() => setEmployeeExperience(undefined)}
          experience={employeeExperience}
        />
      )}
    </section>
  )
}

export default Projects
