// Atoms
import SocialIconContainer from "@/ui/atoms/social-icon-container"
import Credly from "@/ui/icons/social/credly"

// Icons
import GitHub from "@/ui/icons/social/github"
import Linkedin from "@/ui/icons/social/linkedin"

// Utilities
import { openExternalLink } from "@/utils"
import { externalLinks } from "@/config/site"

interface Props {
  className?: string
}

const SocialLinks = ({ className }: Props) => {
  const content = (
    <>
      <SocialIconContainer onClick={() => openExternalLink(externalLinks.github)}>
        <GitHub />
      </SocialIconContainer>
      <SocialIconContainer onClick={() => openExternalLink(externalLinks.credly)}>
        <Credly black />
      </SocialIconContainer>
      <SocialIconContainer
        onClick={() => openExternalLink(externalLinks.linkedin)}
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
