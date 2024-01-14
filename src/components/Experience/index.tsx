import { useTranslations } from "@/modules/translations/use"
import ExperienceCard from "@/ui/molecules/ExperienceCard"
import ExperienceCardContainer from "@/ui/atoms/ExperienceCardContainer"
import SectionTitle, {
  SectionTitleColor,
  SectionTitleFont,
} from "@/ui/atoms/SectionTitle"
import NestjsIcon from "@/ui/icons/programming/NestJs"
import NextjsIcon from "@/ui/icons/programming/Nextjs"

const Experience = () => {
  const { t } = useTranslations("home")
  return (
    <div
      id="experience-container"
      className="flex flex-col items-center justify-center w-full py-16 space-y-16 text-defaultTextColor dark:text-defaultTextColor-dark"
    >
      <SectionTitle
        id="experience-title"
        label={t("experience.title").toUpperCase()}
        color={SectionTitleColor.PRIMARY300}
        font={SectionTitleFont.BACASIME_ANTIQUE}
      />
      <div>Filters</div>
      <ExperienceCardContainer>
        <ExperienceCard
          name={"Next.js"}
          icon={<NextjsIcon />}
          tags={["Fullstack"]}
          duration="2 years"
        />
        <ExperienceCard
          name={"Nest.js"}
          icon={<NestjsIcon />}
          tags={["Fullstack", "Mobile"]}
          duration="2 years"
        />
      </ExperienceCardContainer>
    </div>
  )
}

export default Experience
