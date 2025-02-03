// External Libraries
import Image from "next/image"
import leftSplash from "@public/images/left-splash.png"
import rightSplash from "@public/images/right-splash.png"
// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Atoms
import PhraseContainer from "@/ui/atoms/PhraseContainer"
import SectionTitle from "@/ui/atoms/SectionTitle"
import Typography from "@/ui/atoms/Typography"

const AboutMe = () => {
  const { t } = useTranslations("home")
  return (
    <div
      id="about-me-container"
      className={
        "relative pt-12 pb-24 lg:pt-24 flex flex-col bg-primary-100 px-8 space-y-8 lg:mx-auto w-full justify-center items-center lg:items-center lg:justify-start"
      }
    >
      <SectionTitle
        id="about-me-title"
        label={t("aboutMe.title").toUpperCase()}
        color={"primary-300"}
        font={"roboto"}
      />
      <div className="flex flex-col space-y-16">
        <PhraseContainer id={"about-me-1"}>
          <Typography text={t("aboutMe.text1")} size="h6" />
          <Typography
            text={t("aboutMe.text2")}
            color={"primary-300"}
            darkColor={"primary-100"}
            size="h6"
            bold={true}
          />
          <Typography text={t("aboutMe.text3")} size="h6" />
          <Typography
            text={t("aboutMe.text4")}
            color={"primary-300"}
            darkColor={"primary-100"}
            size="h6"
            bold={true}
          />
          <Typography text={t("aboutMe.text5")} size="h6" />
          <Typography
            text={t("aboutMe.text6")}
            color={"primary-300"}
            darkColor={"primary-100"}
            size="h6"
            bold={true}
          />
          <Typography text={t("aboutMe.text7")} size="h6" />
        </PhraseContainer>
        <PhraseContainer id={"about-me-2"}>
          <Typography text={t("aboutMe.text8")} size="h6" />
          <Typography
            text={t("aboutMe.text9")}
            color={"primary-300"}
            darkColor={"primary-100"}
            bold={true}
            size="h6"
          />
          <Typography text={t("aboutMe.text10")} size="h6" />
          <Typography
            text={t("aboutMe.text11")}
            color={"primary-300"}
            darkColor={"primary-100"}
            bold={true}
            size="h6"
          />
          <Typography text={t("aboutMe.text12")} size="h6" />
          <Typography
            text={t("aboutMe.text13")}
            color={"primary-300"}
            darkColor={"primary-100"}
            bold={true}
            size="h6"
          />
          <Typography text={t("aboutMe.text14")} size="h6" />
        </PhraseContainer>
      </div>
    </div>
  )
}

export default AboutMe
