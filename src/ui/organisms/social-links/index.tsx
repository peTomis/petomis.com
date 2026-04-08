// Atoms
import SocialIconContainer from "@/ui/atoms/social-icon-container"

// Icons
import GitHub from "@/ui/icons/social/github"
import Linkedin from "@/ui/icons/social/linkedin"

// Utilities
import { openExternalLink } from "@/utils"

interface Props {
  className?: string
}

const SocialLinks = ({ className }: Props) => {
  const content = (
    <>
      <SocialIconContainer onClick={() => openExternalLink(process.env.GITHUB)}>
        <GitHub />
      </SocialIconContainer>
      <SocialIconContainer
        onClick={() => openExternalLink(process.env.LINKEDIN)}
      >
        <Linkedin />
      </SocialIconContainer>
    </>
  )

  if (!className) {
    return content
  }

  return <div className={className}>{content}</div>
}

export default SocialLinks
