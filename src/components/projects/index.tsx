// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Organisms
import Carousel from "@/ui/organisms/carousel_"

// Molecules
import CarouselElement from "@/ui/molecules/carousel-element"

// Atoms
import Typography from "@/ui/atoms/typography"

// Assets
import CarouselElementSkewed from "@/ui/molecules/carousel-element-skewed"
import { useProjects } from "@/hooks/useProjects"

const Projects = () => {
  const projects = useProjects()
  const { t } = useTranslations("home")

  return (
    <div
      id="projects-container"
      className="relative flex flex-col items-center justify-center w-full pt-16 pb-32 mx-auto space-y-8 overflow-hidden md:pb-16 md:pt-16"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-bricks-pattern opacity-20"></div>
      <div className="z-10 flex flex-col items-center justify-center w-full space-y-8">
        <Typography
          extrabold
          size="h1"
          text={t("projects.title").toUpperCase()}
          color="PRIMARY200"
        />
        <div className="opacity-60">
          <Typography
            light
            size="h6"
            md="h4"
            text={t("projects.description")}
            color={"PRIMARY200"}
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
              onClick={() => window.open(project.website, "_blank")}
            />
          ))}
        />
      </div>
      {/* <div className="hidden py-8 md:grid md:grid-cols-2 xl:grid-cols-3 sm:gap-8"> */}
      <div className="hidden py-8 space-x-8 md:flex">
        {projects.map((project, key) => (
          <CarouselElementSkewed
            key={key}
            hovered={true}
            onMouseEnter={() => {}}
            swipingDirection={undefined}
            color={project.color}
          >
            <CarouselElement
              image={project.image}
              name={project.name}
              title={project.title}
              description={project.description}
              color={project.color}
              onClick={() => window.open(project.website, "_blank")}
              selected
            />
          </CarouselElementSkewed>
        ))}
      </div>
    </div>
  )
}

export default Projects
