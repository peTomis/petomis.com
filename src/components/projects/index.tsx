// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Organisms
import Carousel from "@/ui/organisms/carousel_"

// Molecules
import CarouselElement from "@/ui/molecules/carousel-element"

// Atoms
import { CarouselElementColor } from "@/ui/atoms/carousel-element-text"
import Typography from "@/ui/atoms/typography_"

// Icons
import MetchLogo from "@/ui/icons/companies/metch"

// Assets
import metchImage from "@public/images/metch-bg.png"

const Projects = () => {
  const { t } = useTranslations("home")

  const metch = {
    src: metchImage,
    name: "Metch",
    title: (
      <div className="w-[200px] lg:w-[300px]">
        <MetchLogo />
      </div>
    ),
    description:
      "The game Changer! Match is a platform that aims to make the process of finding talents and teams in the gaming sector simple and efficient.",
    color: CarouselElementColor.RED,
    website: process.env.METCH_GG,
  }

  const projects = [metch, metch, metch]

  return (
    <div
      id="projects-container"
      className="relative flex flex-col items-center justify-center w-full pt-16 pb-32 mx-auto space-y-8 overflow-hidden bg-gradient-radial from-primary-50 to-primary-100 md:pb-16 md:pt-16"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern opacity-20"></div>
      <div className="z-10 flex flex-col items-center justify-center w-full space-y-8">
        <Typography
          extrabold
          size="h1"
          text={t("projects.title").toUpperCase()}
          color="PRIMARY400"
        />
        <div className="opacity-60">
          <Typography
            light
            size="h6"
            md="h4"
            text={t("projects.description")}
            color={"PRIMARY400"}
          />
        </div>
      </div>
      <div className="pt-8">
        <Carousel
          elements={projects.map((project, key) => (
            <CarouselElement
              key={key}
              src={project.src}
              name={project.name}
              title={project.title}
              description={project.description}
              color={project.color}
              onClick={() => window.open(project.website, "_blank")}
            />
          ))}
        />
      </div>
    </div>
  )
}

export default Projects
