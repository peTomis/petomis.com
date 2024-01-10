import { useTranslations } from "@/modules/translations/use"
import SocialButtons from "@/ui/organisms/SocialButtons"

const BottomBar = () => {
  const { t } = useTranslations("common")
  const currentYear = new Date().getFullYear()

  const openHeroicons = () => window.open(process.env.HEROICONS, "_blank")
  const openHeropatterns = () => window.open(process.env.HEROPATTERNS, "_blank")

  return (
    <div
      id="bottombar-container"
      className="flex items-center justify-center w-full p-8 bg-black"
    >
      <div
        id="bottombar-background"
        className="flex flex-col w-full my-4 text-background md:max-w-[1000px] font-roboto"
      >
        <div
          id="bottombar-text-container"
          className="flex flex-col items-start space-y-4 md:space-y-0 md:flex-row"
        >
          <div
            id="bottombar-text-column"
            className="flex flex-col items-center justify-start flex-1 w-full space-y-4 "
          >
            <div id="bottombar-info" className="flex flex-col w-full">
              <div
                id="bottombar-name"
                className="w-full font-bold text-h5 d:text-h3"
              >
                {t("bottomBar.name")}
              </div>
              <div id="bottombar-hashtag" className="w-full italic d:text-h5">
                {t("bottomBar.hashtag")}
              </div>
            </div>
            <div
              id="bottombar-description"
              className="w-full text-base font-light font-bacasimeAntique d:text-h5"
            >
              {t("bottomBar.description")}
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
              <div className="flex space-x-2 cursor-pointer md:justify-end first-letter:w-full">
                <div>{t("bottomBar.icons")}</div>
                <div className="italic underline" onClick={openHeroicons}>
                  Heroicons
                </div>
              </div>
              <div className="flex space-x-2 cursor-pointer md:justify-end first-letter:w-full">
                <div>{t("bottomBar.patterns")}</div>
                <div className="italic underline" onClick={openHeropatterns}>
                  Heropatterns
                </div>
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
          <div id="bottombar-copyright-text" className="text-base">
            {currentYear} {t("bottomBar.copyright")}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBar
