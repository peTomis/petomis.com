import { useTranslations } from "@/modules/translations/use"
import style from "./TopBar.module.css"
import LinkedinIcon from "@/ui/icons/Linkedin"
import TwitterIcon from "@/ui/icons/Twitter"
import GitHubIcon from "@/ui/icons/Github"

interface Props {
  onClick: (id: string) => void
}

const TopBar = ({ onClick }: Props) => {
  const { t, i18n } = useTranslations("home")

  const openGitHub = () => window.open(process.env.GITHUB, "_blank")
  const openLinkedIn = () => window.open(process.env.LINKEDIN, "_blank")
  const openTwitter = () => window.open(process.env.TWITTER, "_blank")

  return (
    <div id="topBar" className={style.container}>
      <div className={style.pageList}>
        <div
          id="section1"
          className={style.item}
          onClick={() => {
            onClick("home")
          }}
        >
          {t("topBar.home")}
        </div>
        <div
          id="section2"
          className={style.item}
          onClick={() => {
            onClick("experience")
          }}
        >
          {t("topBar.experience")}
        </div>

        <div
          id="section3"
          className={style.item}
          onClick={() => {
            onClick("contact")
          }}
        >
          {t("topBar.contact")}
        </div>
      </div>
      <div className={style.logoContainer}>
        <div className="text-primary">pe</div>
        <div className={"text-white"}>tomis</div>
      </div>
      <div className={style.social}>
        <div className={style.item} onClick={openGitHub}>
          <GitHubIcon />
        </div>
        <div className={style.item} onClick={openLinkedIn}>
          <LinkedinIcon />
        </div>
        {/* <div className={style.item} onClick={openTwitter}>
          <TwitterIcon />
        </div> */}
      </div>
    </div>
  )
}

export default TopBar
