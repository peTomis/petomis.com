import { useTranslations } from "@/modules/translations/use"
import LinkedinIcon from "@/ui/icons/Linkedin"
import GitHubIcon from "@/ui/icons/Github"
import DarkModeToggle from "./DarkModeToggle"
import IconContainer from "@/ui/atoms/IconContainer"
import LanguageSelector from "./LanguageSelector"

interface Props {
  onClick: (id: string) => void
}

const TopBar = ({ onClick }: Props) => {
  const { t, i18n } = useTranslations("home")

  const openGitHub = () => window.open(process.env.GITHUB, "_blank")
  const openLinkedIn = () => window.open(process.env.LINKEDIN, "_blank")
  return (
    <div
      id="topBar"
      className="absolute top-0 z-20 flex items-center justify-center w-full pt-2 space-x-4 lg:justify-end lg:pr-4"
    >
      <IconContainer onClick={openGitHub}>
        <GitHubIcon />
      </IconContainer>
      <IconContainer onClick={openLinkedIn}>
        <LinkedinIcon />
      </IconContainer>
      <LanguageSelector />
      <DarkModeToggle />
    </div>
  )
}

export default TopBar
