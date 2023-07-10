import { useTranslations } from "@/modules/translations/use"
import style from "./TopBar.module.css"
import LinkedinIcon from "@/ui/icons/Linkedin"
import TwitterIcon from "@/ui/icons/Twitter"
import GitHubIcon from "@/ui/icons/Github"
import Link from "next/link"

const TopBar = () => {
  const { t } = useTranslations("common")

  const openGitHub = () => window.open(process.env.GITHUB, "_blank")
  const openLinkedIn = () => window.open(process.env.LINKEDIN, "_blank")
  const openTwitter = () => window.open(process.env.TWITTER, "_blank")

  return (
    <div id="topBar" className={style.container}>
      <div className={style.pageList}>
        <Link href={{ pathname: "/" }}>
          <div id="section1" className={style.item}>
            {t("topBar.features")}
          </div>
        </Link>
        <Link href={{ pathname: "/jobs" }}>
          <div id="section2" className={style.item}>
            {t("topBar.section2")}
          </div>
        </Link>
        <Link href={{ pathname: "/contact" }}>
          <div id="section3" className={style.item}>
            {t("topBar.section3")}
          </div>
        </Link>
      </div>
      <div className={style.logo}>petomis</div>
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
