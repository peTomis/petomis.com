import { useTranslations } from "@/hooks/useTranslations"
import { CarouselElementColor } from "@/ui/atoms/CarouselElementText"
import SectionDescription from "@/ui/atoms/SectionDescription"
import SectionTitle from "@/ui/atoms/SectionTitle"
import Carousel from "@/ui/organisms/Carousel"
import image from "@public/images/me.png"

import CarouselElement from "@/ui/molecules/CarouselElement"

const startDate = new Date("2022-03-01")

const Projects = () => {
  const openAnubiHomepage = () => window.open(process.env.ANUBI, "_blank")

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
    <div
      className="flex flex-col items-center justify-center w-full px-4 py-16 text-defaultTextColor dark:text-defaultTextColor-dark"
      id="projects-container"
    >
      <SectionTitle
        id="projects-title"
        label={t("projects.title").toUpperCase()}
        color={"primary-300"}
        font={"bacasimeAntique"}
      />
      <SectionDescription
        extralight={true}
        rows={[t("projects.description")]}
      />
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
    </div>
  )
}

export default Projects
