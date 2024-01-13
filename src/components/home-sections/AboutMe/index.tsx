import { useTranslations } from "@/modules/translations/use"
import PhraseContainer from "@/ui/atoms/PhraseContainer"
import SectionTitle, {
  SectionTitleColor,
  SectionTitleFont,
} from "@/ui/atoms/SectionTitle"
import circuitBoardPatternStyle from "@/ui/patterns/circuit-board"

const AboutMe = () => {
  const { t } = useTranslations("home")
  return (
    <div
      id="about-me-container"
      className={
        "pt-12 pb-24 lg:pt-24 flex flex-col bg-primary-100 bg-opacity-20 px-8 space-y-8 lg:mx-auto w-full justify-center items-center lg:items-center lg:justify-start"
      }
      style={circuitBoardPatternStyle}
    >
      <SectionTitle
        id="about-me-title"
        label={t("aboutMe.title").toUpperCase()}
        color={SectionTitleColor.DEFAULT}
        font={SectionTitleFont.ROBOTO}
      />
      <div className="flex flex-col space-y-16">
        <PhraseContainer id={"about-me-1"}>
          <>
            {t("aboutMe.text1")}
            <span className={"text-primary-400 dark:text-primary-100"}>
              {t("aboutMe.text2")}
            </span>
            {t("aboutMe.text3")}
            <span className={"text-primary-400 dark:text-primary-100"}>
              {t("aboutMe.text4")}
            </span>
            {t("aboutMe.text5")}
            <span className={"text-primary-400 dark:text-primary-100"}>
              {t("aboutMe.text6")}
            </span>
            {t("aboutMe.text7")}
          </>
        </PhraseContainer>
        <PhraseContainer id={"about-me-2"}>
          {t("aboutMe.text8")}
          <span className={"text-primary-400 dark:text-primary-100"}>
            {t("aboutMe.text9")}
          </span>
          {t("aboutMe.text10")}
          <span className={"text-primary-400 dark:text-primary-100"}>
            {t("aboutMe.text11")}
          </span>
          {t("aboutMe.text12")}
          <span className={"text-primary-400 dark:text-primary-100"}>
            {t("aboutMe.text13")}
          </span>
          {t("aboutMe.text14")}
        </PhraseContainer>
      </div>
    </div>
  )
}

export default AboutMe
