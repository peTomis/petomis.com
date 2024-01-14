import { useTranslations } from "@/hooks/useTranslations"
import PhraseContainer from "@/ui/atoms/PhraseContainer"
import SectionTitle, {
  SectionTitleColor,
  SectionTitleFont,
} from "@/ui/atoms/SectionTitle"
import Typography from "@/ui/atoms/Typography"
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
        color={SectionTitleColor.PRIMARY300}
        font={SectionTitleFont.ROBOTO}
      />
      <div className="flex flex-col space-y-16">
        <PhraseContainer id={"about-me-1"}>
          <Typography text={t("aboutMe.text1")} size="h5" />
          <Typography
            text={t("aboutMe.text2")}
            color={"primary-300"}
            darkColor={"primary-100"}
            size="h5"
            bold={true}
          />
          <Typography text={t("aboutMe.text3")} size="h5" />
          <Typography
            text={t("aboutMe.text4")}
            color={"primary-300"}
            darkColor={"primary-100"}
            size="h5"
            bold={true}
          />
          <Typography text={t("aboutMe.text5")} size="h5" />
          <Typography
            text={t("aboutMe.text6")}
            color={"primary-300"}
            darkColor={"primary-100"}
            size="h5"
            bold={true}
          />
          <Typography text={t("aboutMe.text7")} size="h5" />
        </PhraseContainer>
        <PhraseContainer id={"about-me-2"}>
          <Typography text={t("aboutMe.text8")} size="h5" />
          <Typography
            text={t("aboutMe.text9")}
            color={"primary-300"}
            darkColor={"primary-100"}
            bold={true}
            size="h5"
          />
          <Typography text={t("aboutMe.text10")} size="h5" />
          <Typography
            text={t("aboutMe.text11")}
            color={"primary-300"}
            darkColor={"primary-100"}
            bold={true}
            size="h5"
          />
          <Typography text={t("aboutMe.text12")} size="h5" />
          <Typography
            text={t("aboutMe.text13")}
            color={"primary-300"}
            darkColor={"primary-100"}
            bold={true}
            size="h5"
          />
          <Typography text={t("aboutMe.text14")} size="h5" />
        </PhraseContainer>
      </div>
    </div>
  )
}

export default AboutMe
