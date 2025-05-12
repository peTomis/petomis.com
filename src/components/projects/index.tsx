// External Imports
import { useState } from "react"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"
import { Project, useProjects } from "@/hooks/useProjects"

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

  return (
    <div
      id="projects-container"
      className="relative flex flex-col items-center justify-center w-full pt-16 pb-32 mx-auto space-y-8 overflow-hidden md:pb-16 md:pt-16"
    >
      <div className="z-10 flex flex-col items-center justify-center w-full space-y-8">
        <Typography
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
      <div className="pt-8 md:hidden">
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
              onClick={() =>
                project.employeeTag
                  ? setEmployeeExperience(project)
                  : window.open(project.website, "_blank")
              }
              collaborators={project.collaborators}
            />
          ))}
        />
      </div>
      <div className="hidden py-8 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-8 xl:gap-16">
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
              onClick={() =>
                project.employeeTag
                  ? setEmployeeExperience(project)
                  : window.open(project.website, "_blank")
              }
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
    </div>
  )
}

export default Projects
