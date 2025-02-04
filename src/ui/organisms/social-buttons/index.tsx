// Atoms
import SocialIconContainer from "@/ui/atoms/social-icon-container"

// Icons
import GitHub from "@/ui/icons/social/github"
import Linkedin from "@/ui/icons/social/linkedin"

const SocialButtons = () => {
  const openGitHub = () => window.open(process.env.GITHUB, "_blank")
  const openLinkedIn = () => window.open(process.env.LINKEDIN, "_blank")

  return (
    <>
      <SocialIconContainer onClick={openGitHub}>
        <GitHub />
      </SocialIconContainer>
      <SocialIconContainer onClick={openLinkedIn}>
        <Linkedin />
      </SocialIconContainer>
    </>
  )
}

export default SocialButtons
