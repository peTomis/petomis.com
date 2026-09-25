// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Molecules
import TopBarContainer from "@/ui/molecules/topbar-container"

// Organisms
import SocialLinks from "@/ui/organisms/social-links"

/** Fixed top bar: the social links glass island (centred on mobile). */
const TopBar = () => {
  const { t } = useTranslations("common")

  return (
    <TopBarContainer>
      <SocialLinks label={t("nav.social")} className="mx-auto lg:mr-0" />
    </TopBarContainer>
  )
}

export default TopBar
