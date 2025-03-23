// Hooks
import useScrolledPastVH from "@/hooks/useScrolledPastVH"
import { useTranslations } from "@/hooks/useTranslations"

// Utilities
import { WebsiteSection } from "@/utils"

// Molecules
import TopBarContainer from "@/ui/molecules/topbar-container"
import TopBarIcon from "@/ui/molecules/topbar-icon"

// Atoms
import IconContainer from "@/ui/atoms/icon-container"

// Icons
import AcademicHat from "@/ui/icons/academic-hat"
import CodeBlocks from "@/ui/icons/code-blocks"
import Briefcase from "@/ui/icons/briefcase_"
import GitHub from "@/ui/icons/social/github"
import Linkedin from "@/ui/icons/social/linkedin"
import Burgher from "@/ui/icons/burgher"

interface Props {
  setSidebarVisible: () => void
  scrollToSelectedDiv: (section: WebsiteSection) => void
}

const TopBar = ({ setSidebarVisible, scrollToSelectedDiv }: Props) => {
  const hasScrolled = useScrolledPastVH(0.01)
  const { t } = useTranslations("home")

  const openGitHub = () => window.open(process.env.GITHUB, "_blank")
  const openLinkedIn = () => window.open(process.env.LINKEDIN, "_blank")

  return (
    <TopBarContainer>
      <div
        id="redirect-container"
        className={`flex flex-row pl-2 space-x-2 md:space-x-4 `}
      >
        {hasScrolled && (
          <>
            <TopBarIcon
              IconComponent={AcademicHat}
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.EXPERIENCE)
              }}
              text={t("redirects.experience")}
              ariaLabel="Experience"
            />
            <TopBarIcon
              IconComponent={CodeBlocks}
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.PROJECTS)
              }}
              text={t("redirects.projects")}
              ariaLabel="Projects"
            />
            <TopBarIcon
              IconComponent={Briefcase}
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.CAREER)
              }}
              text={t("redirects.work")}
              ariaLabel="Work"
            />
          </>
        )}
      </div>
      <div
        className={`flex pr-4 md:pr-0 flex-row ${
          hasScrolled ? "" : "py-2"
        } space-x-4`}
        id="link-and-settings-container"
      >
        <IconContainer onClick={openGitHub} ariaLabel="Open GitHub">
          <div className="w-7 h-7 invert">
            <GitHub />
          </div>
        </IconContainer>
        <IconContainer onClick={openLinkedIn} ariaLabel="Open LinkedIn">
          <div className="w-6 h-6">
            <Linkedin />
          </div>
        </IconContainer>
        <IconContainer onClick={setSidebarVisible} ariaLabel="Open sidebar">
          <Burgher />
        </IconContainer>
      </div>
    </TopBarContainer>
  )
}

export default TopBar
