// External libraries
import Image from "next/image"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Atoms
import Typography from "@/ui/atoms/typography"
import SocialIconContainer from "@/ui/atoms/social-icon-container"

// Icons
import GitHub from "@/ui/icons/social/github"
import Linkedin from "@/ui/icons/social/linkedin"

const Footer = () => {
  const { t } = useTranslations("common")
  const currentYear = new Date().getFullYear()

  const openMaterialDesign = () => window.open(process.env.MATERIAL, "_blank")
  const openHeropatterns = () => window.open(process.env.HEROPATTERNS, "_blank")
  const openGitHub = () => window.open(process.env.GITHUB, "_blank")
  const openLinkedIn = () => window.open(process.env.LINKEDIN, "_blank")

  return (
    <footer
      id="footer-container"
      className="flex flex-col items-center w-screen bg-[#111111]"
    >
      <div
        id="footer-text-container"
        className="flex flex-col items-start px-8 pt-8 md:px-0 space-y-4 w-full max-w-[800px] md:flex-row md:space-y-0"
      >
        <div
          id="footer-text-column"
          className="flex flex-col items-center justify-start flex-1 w-full space-y-2 md:space-y-4 "
        >
          <div id="footer-info" className="flex flex-col w-full space-y-4">
            <div
              id="footer-name"
              className="flex flex-row items-center justify-start w-full h-8 space-x-4"
            >
              <div className="flex items-center justify-center ">
                <Image
                  src={"/favicon.svg"}
                  alt={"Logo"}
                  width={40}
                  height={40}
                />
              </div>
              <Typography text={t("footer.name")} bold={true} size="h5" />
            </div>
            <div id="footer-hashtag" className="w-full">
              <Typography text={t("footer.hashtag")} italic={true} size="h5" />
            </div>
          </div>
          <div id="footer-description" className="w-full">
            <Typography
              text={t("footer.description")}
              font={"bacasimeAntique"}
              size={"h5"}
            />
          </div>
        </div>
        <div
          id="footer-references"
          className="flex flex-col space-y-2 md:space-y-4 md:justify-end d:text-end"
        >
          <div className="flex space-x-2 cursor-pointer md:justify-end">
            <Typography
              text={t("footer.icons")}
              clickable={true}
              onClick={openMaterialDesign}
            />
            <Typography
              italic={true}
              underline={true}
              text={"Material Design"}
              clickable={true}
              onClick={openMaterialDesign}
            />
          </div>
          <div className="flex space-x-2 cursor-pointer md:justify-end">
            <Typography
              text={t("footer.patterns")}
              clickable={true}
              onClick={openHeropatterns}
            />
            <Typography
              italic={true}
              underline={true}
              text={"Heropatterns"}
              clickable={true}
              onClick={openHeropatterns}
            />
          </div>
        </div>
      </div>
      <div
        id="footer-social-buttons"
        className="flex flex-row justify-center w-full py-8 space-x-4"
      >
        <SocialIconContainer onClick={openGitHub}>
          <GitHub />
        </SocialIconContainer>
        <SocialIconContainer onClick={openLinkedIn}>
          <Linkedin />
        </SocialIconContainer>
      </div>
      <div
        id="footer-copyright"
        className="w-full py-2 text-center bg-black text-small md:text-base"
      >
        <Typography text={t("footer.copyright_1")} />
        <Typography text={String(currentYear)} />
        <Typography text={" Giuseppe Tomis"} opacity={60} />
        <Typography text={t("footer.copyright_2")} />
      </div>
    </footer>
  )
}

export default Footer
