import { useTranslations } from "@/hooks/useTranslations"
import splash from "@public/images/splash-right.png"
import darkSplash from "@public/images/splash-right-dark.png"
import Carousel from "@/ui/organisms/Carousel"
import CarouselElement from "@/ui/molecules/CarouselElement"
import SectionContainer from "@/ui/atoms/SectionContainer"
import image from "@public/images/me.png"
import metchImage from "@public/images/metch-bg.png"
import Typography from "@/ui/atoms/Typography"
import { CarouselElementColor } from "@/ui/atoms/CarouselElementText"
import MetchLogo from "@/ui/icons/MetchLogo"

const Projects = () => {
  const { t } = useTranslations("home")

  const project1 = {
    src: image,
    name: "Project 1",
    title: (
      <Typography
        text={"Project 1".toUpperCase()}
        size="h4"
        color="defaultTextColor-dark"
      />
    ),
    description: "Placeholder for a project named Project 1",
    color: CarouselElementColor.BLACK,
    website: process.env.FOO,
  }

  const project2 = {
    src: image,
    name: "Project 2",
    title: (
      <Typography
        text={"Project 2".toUpperCase()}
        size="h4"
        color="defaultTextColor-dark"
      />
    ),
    description: "Placeholder for a project named Project 2",
    color: CarouselElementColor.YELLOW,
    website: process.env.FOO,
  }

  const metch = {
    src: metchImage,
    name: "Metch",
    title: (
      <div className="w-[200px] xxl:w-[300px]">
        <MetchLogo />
      </div>
    ),
    description:
      "The game Changer! Match is a platform that aims to make the process of finding talents and teams in the gaming sector simple and efficient.",
    color: CarouselElementColor.RED,
    website: process.env.METCH_GG,
  }

  const project4 = {
    src: image,
    name: "Project 4",
    title: (
      <Typography
        text={"Project 4".toUpperCase()}
        size="h4"
        color="defaultTextColor-dark"
      />
    ),
    description: "Placeholder for a project named Project 4",
    color: CarouselElementColor.PURPLE,
    website: process.env.FOO,
  }

  const project5 = {
    src: image,
    name: "Project 5",
    title: (
      <Typography
        text={"Project 5".toUpperCase()}
        size="h4"
        color="defaultTextColor-dark"
      />
    ),
    description: "Placeholder for a project named Project 5",
    color: CarouselElementColor.GREEN,
    website: process.env.FOO,
  }

  const projects = [project1, project2, metch, project4, project5]

  return (
    <SectionContainer
      id="projects-container"
      title={t("projects.title").toUpperCase()}
      description={[t("projects.description")]}
      bgColor="bg-primary-200"
      bgOpacity="bg-opacity-50"
      splashImage={splash}
      splashDarkImage={darkSplash}
    >
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
    </SectionContainer>
  )
}

export default Projects
