import { useTranslations } from "@/modules/translations/use"
import SectionDescription, {
  SectionDescriptionFontSize,
} from "@/ui/atoms/SectionDescription"
import SectionTitle, {
  SectionTitleColor,
  SectionTitleFont,
} from "@/ui/atoms/SectionTitle"

const Experience = () => {
  const { t } = useTranslations("home")
  return (
    <div
      id="experience-container"
      className="flex flex-col items-center justify-center w-full px-4 py-16 text-defaultTextColor dark:text-defaultTextColor-dark"
    >
      <SectionTitle
        id="experience-title"
        label={t("experience.title").toUpperCase()}
        color={SectionTitleColor.PRIMARY300}
        font={SectionTitleFont.BACASIME_ANTIQUE}
      />
      <SectionDescription
        fontSize={SectionDescriptionFontSize.EXTRALIGHT}
        rows={[" Work in progress..."]}
      />
    </div>
  )
}

export default Experience
