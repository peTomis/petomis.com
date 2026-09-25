// Components
import Brand from "./components/brand"
import SectionNav from "./components/section-nav"

// Hooks
import useIsAtTop from "@/hooks/useIsAtTop"
import { useTranslations } from "@/hooks/useTranslations"

// Molecules
import TopBarContainer from "@/ui/molecules/topbar-container"

// Organisms
import SocialLinks from "@/ui/organisms/social-links"

// Utils
import { cn } from "@/utils/cn"

/**
 * Fixed top bar of floating glass islands: brand on the left, section links
 * in the middle and social links on the right. Below 768px only the social
 * links show, centred, and without their glass pill while at the top.
 */
const TopBar = () => {
  const { t } = useTranslations("common")
  const isAtTop = useIsAtTop()

  return (
    <TopBarContainer>
      <div className="grid items-center w-full max-w-[1200px] mx-auto gap-3 grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
        <Brand className="hidden md:inline-flex justify-self-start" />
        <SectionNav label={t("nav.sections")} className="hidden md:flex" />
        <SocialLinks
          label={t("nav.social")}
          className={cn(
            "justify-self-center md:justify-self-end transition-[background,border-color,box-shadow,backdrop-filter] duration-300",
            isAtTop &&
              "max-md:bg-none max-md:border-transparent max-md:shadow-none max-md:backdrop-blur-none"
          )}
        />
      </div>
    </TopBarContainer>
  )
}

export default TopBar
