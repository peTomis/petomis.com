// Hooks
import { useTranslations } from "@/hooks/useTranslations"
import { openExternalLink } from "@/utils"

// Atoms
import Typography from "@/ui/atoms/typography"
import SocialLinks from "@/ui/organisms/social-links"

import LogoIcon from "@/ui/logo/logoIcon"
import LanguageSelector from "./components/language-selector"

const Footer = () => {
  const { t } = useTranslations("common")
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="footer-container"
      className="flex flex-col items-center w-screen bg-[#111111]"
    >
      <div
        id="footer-text-container"
        className="flex flex-col items-start px-8 pt-16 md:px-0 space-y-4 w-full max-w-[800px] md:flex-row md:space-y-0"
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
              <div className="flex items-start">
                <LogoIcon />
              </div>
              <Typography
                font="orbitron"
                text={t("footer.name")}
                bold={true}
                size="h5"
              />
            </div>
            <div id="footer-hashtag" className="w-full">
              <Typography
                font="montserrat"
                text={t("footer.hashtag")}
                italic={true}
                size="h5"
              />
            </div>
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
              onClick={() => openExternalLink(process.env.MATERIAL)}
            />
            <Typography
              italic={true}
              underline={true}
              text={"Material Design"}
              clickable={true}
              onClick={() => openExternalLink(process.env.MATERIAL)}
            />
          </div>
          <div className="pt-4 lg:pt-0">
            <LanguageSelector />
          </div>
        </div>
      </div>
      <SocialLinks className="flex flex-row justify-center w-full py-8 space-x-4 text-black" />
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
