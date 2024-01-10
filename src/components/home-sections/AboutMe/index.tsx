import { useTranslations } from "@/modules/translations/use"

const AboutMe = () => {
  const { t } = useTranslations("home")
  return (
    <div
      id="about-me-container"
      className={
        "py-12 lg:py-24 flex flex-col bg-primary-300 bg-opacity-20 px-8 space-y-4 lg:mx-auto lg:space-y-8 w-full justify-center items-center lg:items-center lg:justify-start"
      }
    >
      <div
        id="about-me-title"
        className=" w-full d:max-w-[500px] text-h2 font-bacasimeAntique font-extrabold text-primary-100  lg:max-w-[1200px]"
      >
        {t("aboutMe.title")}
      </div>
      <div className="font-roboto text-h5 d:max-w-[500px] font-normal tracking-wide leading-8 lg:leading-10 lg:max-w-[1200px]">
        {t("aboutMe.text1")}
        <span className={"text-primary-200"}>{t("aboutMe.text2")}</span>
        {t("aboutMe.text3")}
        <span className={"text-primary-200"}>{t("aboutMe.text4")}</span>
        {t("aboutMe.text5")}
        <span className={"text-primary-200"}>{t("aboutMe.text6")}</span>
        {t("aboutMe.text7")}
      </div>
      <div className="font-roboto text-h5 d:max-w-[500px] font-normal tracking-wide leading-8 lg:leading-10 lg:max-w-[1200px]">
        {t("aboutMe.text8")}
        <span className={"text-primary-200"}>{t("aboutMe.text9")}</span>
        {t("aboutMe.text10")}
        <span className={"text-primary-200"}>{t("aboutMe.text11")}</span>
        {t("aboutMe.text12")}
        <span className={"text-primary-200"}>{t("aboutMe.text13")}</span>
        {t("aboutMe.text14")}
      </div>
    </div>
  )
}

export default AboutMe
