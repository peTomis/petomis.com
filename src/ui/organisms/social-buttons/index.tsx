// Atoms
import SocialIconContainer from "@/ui/atoms/social-icon-container"

// Icons
import GitHubIcon from "@/ui/icons/social/github"
import LinkedinIcon from "@/ui/icons/social/linkedin"

interface Props {
  dark?: boolean
}

const SocialButtons = ({ dark }: Props) => {
  const openGitHub = () => window.open(process.env.GITHUB, "_blank")
  const openLinkedIn = () => window.open(process.env.LINKEDIN, "_blank")

  return (
    <>
      <SocialIconContainer onClick={openGitHub}>
        <GitHubIcon />
      </SocialIconContainer>
      <SocialIconContainer onClick={openLinkedIn}>
        <LinkedinIcon />
      </SocialIconContainer>
    </>
  )
}

export default SocialButtons
