import { useTranslations } from "@/modules/translations/use"
import { CarouselElementTextColor } from "@/ui/atoms/CarouselElementText"
import SectionDescription, {
  SectionDescriptionFontSize,
} from "@/ui/atoms/SectionDescription"
import SectionTitle, {
  SectionTitleColor,
  SectionTitleFont,
} from "@/ui/atoms/SectionTitle"
import Carousel from "@/ui/organisms/Carousel"
import { useEffect, useState } from "react"
import image from "@public/images/me-light.png"
import CarouselElement from "@/ui/molecules/CarouselElement"

const startDate = new Date("2022-03-01")

const Projects = () => {
  const [daysPassed, setDaysPassed] = useState(0)

  const openAnubiHomepage = () => window.open(process.env.ANUBI, "_blank")

  useEffect(() => {
    const today = new Date()
    const timeDiff = Math.abs(today.getTime() - startDate.getTime())
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24))

    setDaysPassed(days)
  }, [])

  const { t } = useTranslations("home")

  return (
    <div
      className="flex flex-col items-center justify-center w-full px-4 py-16 text-defaultTextColor dark:text-defaultTextColor-dark"
      id="projects-container"
    >
      <SectionTitle
        id="contact-title"
        label={t("projects.title").toUpperCase()}
        color={SectionTitleColor.PRIMARY300}
        font={SectionTitleFont.BACASIME_ANTIQUE}
      />
      <SectionDescription
        fontSize={SectionDescriptionFontSize.EXTRALIGHT}
        rows={[t("projects.description")]}
      />
      <Carousel
        elements={[
          <CarouselElement
            key={0}
            src={image}
            title="Netlog"
            description="I did facebook"
            color={CarouselElementTextColor.BLACK}
          />,
          <CarouselElement
            key={1}
            src={image}
            title="Facebook"
            description="I also made twitter, a social network that allows me to write a very long text description in order to test the project section style result"
            color={CarouselElementTextColor.PURPLE}
          />,
          <CarouselElement
            key={2}
            src={image}
            title="Twitter"
            description="I also made twitter, a social network that allows me to write a very long text description in order to test the project section style result"
            color={CarouselElementTextColor.RED}
          />,
          <CarouselElement
            key={1}
            src={image}
            title="Linkedin"
            description="I also made twitter"
            color={CarouselElementTextColor.BLUE}
          />,
          <CarouselElement
            key={1}
            src={image}
            title="Tiktok"
            description="I also made twitter"
            color={CarouselElementTextColor.YELLOW}
          />,
        ]}
      />
    </div>
  )
}

export default Projects
