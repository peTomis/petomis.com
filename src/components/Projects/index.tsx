import { useTranslations } from "@/hooks/useTranslations"
import Carousel from "@/ui/organisms/Carousel"
import CarouselElement from "@/ui/molecules/CarouselElement"
import SectionContainer from "@/ui/atoms/SectionContainer"
import metchImage from "@public/images/metch-bg.png"
import { CarouselElementColor } from "@/ui/atoms/CarouselElementText"
import MetchLogo from "@/ui/icons/MetchLogo"

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

  const projects = [metch]

  return (
    <SectionContainer
      id="projects-container"
      title={t("projects.title").toUpperCase()}
      description={[t("projects.description")]}
      bgColor="bg-primary-200"
      bgOpacity="bg-opacity-50"
    >
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
    </SectionContainer>
  )
}

export default Projects
