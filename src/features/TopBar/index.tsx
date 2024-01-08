import LinkedinIcon from "@/ui/icons/Linkedin"
import GitHubIcon from "@/ui/icons/Github"
import IconContainer from "@/ui/atoms/IconContainer"
import LanguageSelector from "./components/LanguageSelector"
import DarkModeToggle from "./components/DarkModeToggle"
import TopBarContainer from "@/ui/organisms/TopBarContainer"

const TopBar = () => {
  const openGitHub = () => window.open(process.env.GITHUB, "_blank")
  const openLinkedIn = () => window.open(process.env.LINKEDIN, "_blank")

  return (
    <TopBarContainer>
      <IconContainer onClick={openGitHub}>
        <GitHubIcon />
      </IconContainer>
      <IconContainer onClick={openLinkedIn}>
        <LinkedinIcon />
      </IconContainer>
      <LanguageSelector />
      <DarkModeToggle />
    </TopBarContainer>
  )
}

export default TopBar
