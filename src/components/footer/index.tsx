// External libraries
import Image from "next/image"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Atoms
import Typography from "@/ui/atoms/Typography"
import SocialIconContainer from "@/ui/atoms/social-icon-container"

// Icons
import GitHubIcon from "@/ui/icons/social/github"
import LinkedinIcon from "@/ui/icons/social/linkedin"

const Footer = () => {
  const { t } = useTranslations("common")
  const currentYear = new Date().getFullYear()

  const openHeroicons = () => window.open(process.env.HEROICONS, "_blank")
  const openHeropatterns = () => window.open(process.env.HEROPATTERNS, "_blank")
  const openGitHub = () => window.open(process.env.GITHUB, "_blank")
  const openLinkedIn = () => window.open(process.env.LINKEDIN, "_blank")

  return (
    <footer
      id="footer-container"
      className="flex flex-col items-center pt-8 w-screen bg-[#111111]"
    >
      <div
        id="footer-text-container"
        className="flex flex-col items-start space-y-4 w-full max-w-[800px] md:flex-row md:space-y-0"
      >
        <div
          id="footer-text-column"
          className="flex flex-col items-center justify-start flex-1 w-full space-y-4 "
        >
          <div id="footer-info" className="flex flex-col w-full space-y-4">
            <div
              id="footer-name"
              className="flex flex-row items-center justify-start w-full h-8 space-x-4"
            >
              <div className="flex items-center justify-center ">
                <Image
                  src={"/favicon.svg"}
                  alt={"alt"}
                  width={40}
                  height={40}
                />
              </div>
              <Typography
                text={t("footer.name")}
                bold={true}
                color="defaultTextColor-dark"
                size="h5"
              />
            </div>
            <div id="footer-hashtag" className="w-full">
              <Typography
                text={t("footer.hashtag")}
                color="defaultTextColor-dark"
                italic={true}
                size="h5"
              />
            </div>
          </div>
          <div id="footer-description" className="w-full">
            <Typography
              text={t("footer.description")}
              font={"bacasimeAntique"}
              color="defaultTextColor-dark"
              size={"h5"}
            />
          </div>
        </div>
        <div
          id="footer-references"
          className="flex flex-col space-y-4 md:justify-end d:text-end"
        >
          <div className="flex space-x-2 cursor-pointer md:justify-end">
            <Typography
              text={t("footer.icons")}
              color="defaultTextColor-dark"
              clickable={true}
              onClick={openHeroicons}
            />
            <Typography
              italic={true}
              underline={true}
              text={"Heroicons"}
              clickable={true}
              onClick={openHeroicons}
              color="defaultTextColor-dark"
            />
          </div>
          <div className="flex space-x-2 cursor-pointer md:justify-end">
            <Typography
              text={t("footer.patterns")}
              color="defaultTextColor-dark"
              clickable={true}
              onClick={openHeropatterns}
            />
            <Typography
              italic={true}
              underline={true}
              text={"Heropatterns"}
              clickable={true}
              onClick={openHeropatterns}
              color="defaultTextColor-dark"
            />
          </div>
        </div>
      </div>
      <div
        id="footer-social-buttons"
        className="flex flex-row justify-center w-full py-8 space-x-4"
      >
        <SocialIconContainer onClick={openGitHub}>
          <GitHubIcon />
        </SocialIconContainer>
        <SocialIconContainer onClick={openLinkedIn}>
          <LinkedinIcon />
        </SocialIconContainer>
      </div>
      <div
        id="footer-copyright"
        className="w-full py-2 text-center bg-black text-small md:text-base"
      >
        <Typography
          text={t("footer.copyright_1")}
          color="defaultTextColor-dark"
        />
        <Typography text={String(currentYear)} color="defaultTextColor-dark" />
        <Typography
          text={" Giuseppe Tomis"}
          color="defaultTextColor-dark"
          opacity={60}
        />
        <Typography
          text={t("footer.copyright_2")}
          color="defaultTextColor-dark"
        />
      </div>
    </footer>
  )
}

export default Footer
