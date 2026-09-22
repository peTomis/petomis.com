// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Atoms
import SocialIconContainer from "@/ui/atoms/social-icon-container"
import Credly from "@/ui/icons/social/credly"

// Icons
import GitHub from "@/ui/icons/social/github"
import Linkedin from "@/ui/icons/social/linkedin"

// Utilities
import { externalLinks } from "@/config/site"

interface Props {
  className?: string
}

const SocialLinks = ({ className }: Props) => {
  const { t } = useTranslations("common")

  const content = (
    <>
      <SocialIconContainer href={externalLinks.github} label={t("social.github")}>
        <GitHub />
      </SocialIconContainer>
      <SocialIconContainer href={externalLinks.credly} label={t("social.credly")}>
        <Credly black />
      </SocialIconContainer>
      <SocialIconContainer
        href={externalLinks.linkedin}
        label={t("social.linkedin")}
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
