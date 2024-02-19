// External libraries
import Image from "next/image"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Organisms
import SocialButtons from "@/ui/organisms/SocialButtons"

// Atoms
import Typography from "@/ui/atoms/Typography"

const BottomBar = () => {
  const { t } = useTranslations("common")
  const currentYear = new Date().getFullYear()

  const openHeroicons = () => window.open(process.env.HEROICONS, "_blank")
  const openHeropatterns = () => window.open(process.env.HEROPATTERNS, "_blank")

  return (
    <footer
      id="bottombar-container"
      className="flex items-center justify-center w-full p-8 bg-black"
    >
      <div
        id="bottombar-background"
        className="flex flex-col w-full my-4 md:max-w-[1000px]"
      >
        <div
          id="bottombar-text-container"
          className="flex flex-col items-start space-y-4 md:space-y-0 md:flex-row"
        >
          <div
            id="bottombar-text-column"
            className="flex flex-col items-center justify-start flex-1 w-full space-y-4 "
          >
            <div id="bottombar-info" className="flex flex-col w-full space-y-4">
              <div
                id="bottombar-name"
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
                  text={t("bottomBar.name")}
                  bold={true}
                  color="defaultTextColor-dark"
                  size="h5"
                />
              </div>
              <div id="bottombar-hashtag" className="w-full">
                <Typography
                  text={t("bottomBar.hashtag")}
                  color="defaultTextColor-dark"
                  italic={true}
                  size="h5"
                />
              </div>
            </div>
            <div id="bottombar-description" className="w-full">
              <Typography
                text={t("bottomBar.description")}
                font={"bacasimeAntique"}
                color="defaultTextColor-dark"
                size={"h5"}
              />
            </div>
          </div>
          <div
            id="bottombar-external-links"
            className="flex flex-col items-center flex-1 w-full space-y-4 md:justify-end"
          >
            <div
              id="bottombar-social-buttons"
              className="flex flex-row items-start justify-start w-full h-full py-2 space-x-2 pb-auto md:justify-end fill-defaultTextColor-dark"
            >
              <SocialButtons dark={true} />
            </div>
            <div
              id="bottombar-references"
              className="flex flex-col w-full space-y-4 md:justify-end d:text-end"
            >
              <div className="flex space-x-2 cursor-pointer md:justify-end">
                <Typography
                  text={t("bottomBar.icons")}
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
                  text={t("bottomBar.patterns")}
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
        </div>

        <div
          id="bottombar-divider"
          className="flex flex-col my-8 items-center justify-between h-[1px] bg-background bg-opacity-20"
        />

        <div
          id="bottombar-copyright"
          className="flex items-center justify-center w-full pt-4"
        >
          <div id="bottombar-copyright-text">
            <Typography
              text={currentYear + t("bottomBar.copyright")}
              color="defaultTextColor-dark"
              clickable={true}
              onClick={openHeropatterns}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default BottomBar
