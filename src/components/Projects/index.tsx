import { useTranslations } from "@/hooks/useTranslations"
import { CarouselElementColor } from "@/ui/atoms/CarouselElementText"
import SectionDescription from "@/ui/atoms/SectionDescription"
import SectionTitle from "@/ui/atoms/SectionTitle"
import Carousel from "@/ui/organisms/Carousel"
import image from "@public/images/me.png"
import CarouselElement from "@/ui/molecules/CarouselElement"
import SectionContainer from "@/ui/atoms/SectionContainer"

const Projects = () => {
  const { t } = useTranslations("home")

  const projects = []

  for (let i = 0; i < 5; i++) {
    projects.push({
      src: image,
      title: t("projects.titlePlaceholder") + i,
      description: t("projects.descriptionPlaceholder") + i,
      color: CarouselElementColor.BLUE,
    })
  }

  return (
    <SectionContainer
      id="projects-container"
      title={t("projects.title").toUpperCase()}
      description={[t("projects.description")]}
      titleColor="primary-300"
    >
      <Carousel
        elements={projects.map((project, key) => (
          <CarouselElement
            key={key}
            src={project.src}
            title={project.title}
            description={project.description}
            color={project.color}
          />
        ))}
      />
    </SectionContainer>
  )
}

export default Projects
