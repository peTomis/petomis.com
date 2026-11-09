// External Imports
import { useState } from "react"

// Components
import ProjectCard from "./components/project-card"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"
import { type Project, useProjects } from "@/hooks/useProjects"

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
  const [selectedProjectId, setSelectedProjectId] = useState<
    Project["id"] | undefined
  >(undefined)
  const projects = useProjects()
  // Resolve from current translations instead of retaining an old snapshot.
  const selectedProject = projects.find(project => project.id === selectedProjectId)
  const { t } = useTranslations("home")

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
      />
      <ul
        className="grid grid-cols-[repeat(auto-fit,minmax(min(330px,100%),1fr))] auto-rows-fr gap-7"
      >
        {projects.map((project, index) => (
          <li key={project.id}>
            <Reveal delay={(index % 3) * 0.08} className="h-full">
              <ProjectCard
                project={project}
                index={index + 1}
                onOpenDetails={() => setSelectedProjectId(project.id)}
              />
            </Reveal>
          </li>
        ))}
      </ul>
      {selectedProject && (
        <EmployeeDetails
          onClose={() => setSelectedProjectId(undefined)}
          experience={selectedProject}
        />
      )}
    </section>
  )
}

export default Projects
