// Atoms
import IconContainer from "@/ui/atoms/IconContainer"

// Icons
import GitHubIcon from "@/ui/icons/programming/GitHubSmall"
import LinkedinIcon from "@/ui/icons/companies/Linkedin"

interface Props {
  dark?: boolean
}

const SocialButtons = ({ dark }: Props) => {
  const openGitHub = () => window.open(process.env.GITHUB, "_blank")
  const openLinkedIn = () => window.open(process.env.LINKEDIN, "_blank")

  return (
    <>
      <IconContainer onClick={openGitHub} dark={dark}>
        <GitHubIcon />
      </IconContainer>
      <IconContainer onClick={openLinkedIn} dark={dark}>
        <LinkedinIcon />
      </IconContainer>
    </>
  )
}

export default SocialButtons
