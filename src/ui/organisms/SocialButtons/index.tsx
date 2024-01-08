import IconContainer from "@/ui/atoms/IconContainer"
import GitHubIcon from "@/ui/icons/Github"
import LinkedinIcon from "@/ui/icons/Linkedin"

const SocialButtons = () => {
  const openGitHub = () => window.open(process.env.GITHUB, "_blank")
  const openLinkedIn = () => window.open(process.env.LINKEDIN, "_blank")

  return (
    <>
      <IconContainer onClick={openGitHub}>
        <GitHubIcon />
      </IconContainer>
      <IconContainer onClick={openLinkedIn}>
        <LinkedinIcon />
      </IconContainer>
    </>
  )
}

export default SocialButtons
