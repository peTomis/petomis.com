// External Imports
import { useState } from "react"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"
import { Project, useProjects } from "@/hooks/useProjects"
import useMediaQuery from "@/hooks/useMediaQuery"

// Organisms
import Carousel from "@/ui/organisms/carousel"
import EmployeeDetails from "@/ui/organisms/employee-details"

// Molecules
import CarouselElement from "@/ui/molecules/carousel-element"
import CarouselElementSkewed from "@/ui/molecules/carousel-element-skewed"

// Atoms
import Typography from "@/ui/atoms/typography"

const Projects = () => {
  const [employeeExperience, setEmployeeExperience] = useState<
    Project | undefined
  >(undefined)
  const projects = useProjects()
  const { t } = useTranslations("home")
  // The mobile carousel and the desktop grid both stay mounted at all times
  // (Tailwind's `hidden`/`md:*` classes only toggle CSS display); `inert`
  // additionally keeps the one that's off-screen out of tab order and out of
  // the accessibility tree, regardless of viewport quirks. Both also go inert
  // while the details modal is open, since it's a sibling rather than a
  // replacement and would otherwise leave the covered cards tabbable/readable
  // behind it.
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const isModalOpen = employeeExperience !== undefined
  const carouselInert = isDesktop || isModalOpen
  const gridInert = !isDesktop || isModalOpen

  return (
    <section
      id="projects-container"
      aria-labelledby="projects-title"
      className="relative flex flex-col items-center justify-center w-full pt-16 pb-32 mx-auto space-y-8 overflow-hidden md:pb-16 md:pt-16"
    >
      <div className="z-10 flex flex-col items-center justify-center w-full space-y-8">
        <Typography
          as="h2"
          id="projects-title"
          extrabold
          size="h1"
          font="montserrat"
          text={t("projects.title").toUpperCase()}
          color="PRIMARY100"
        />
        <div className="opacity-60">
          <Typography
            light
            size="h6"
            md="h4"
            text={t("projects.description")}
            color={"PRIMARY100"}
          />
        </div>
      </div>
      <div
        className="pt-8 md:hidden"
        aria-hidden={carouselInert}
        inert={carouselInert}
      >
        <Carousel
          elements={projects.map((project, key) => (
            <CarouselElement
              key={key}
              image={project.image}
              name={project.name}
              title={project.title}
              description={project.description}
              color={project.color}
              employeeTag={project.employeeTag}
              website={project.website}
              onOpenDetails={() => setEmployeeExperience(project)}
              collaborators={project.collaborators}
            />
          ))}
        />
      </div>
      <div
        className="hidden py-8 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-8 xl:gap-16"
        aria-hidden={gridInert}
        inert={gridInert}
      >
        {projects.map((project, key) => (
          <CarouselElementSkewed
            key={key}
            onMouseEnter={() => {}}
            swipingDirection={undefined}
            color={project.color}
            employeeTag={project.employeeTag}
          >
            <CarouselElement
              image={project.image}
              name={project.name}
              title={project.title}
              description={project.description}
              color={project.color}
              employeeTag={project.employeeTag}
              website={project.website}
              onOpenDetails={() => setEmployeeExperience(project)}
              collaborators={project.collaborators}
              selected
            />
          </CarouselElementSkewed>
        ))}
      </div>
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
