// Hooks
import useScrolledPastVH from "@/hooks/useScrolledPastVH"

// Utilities
import { WebsiteSection } from "@/utils/websiteSections"

// Molecules
import TopBarContainer from "@/ui/molecules/topbar-container"

// Atoms
import IconContainer from "@/ui/atoms/icon-container"

// Icons
import AcademicHat from "@/ui/icons/AcademicHat"
import CodeBlocks from "@/ui/icons/CodeBlocks"
import SidebarOpenIcon from "@/ui/icons/burgher"
import Briefcase from "@/ui/icons/Briefcase"
import TopBarIcon from "@/ui/molecules/topbar-icon"
import LinkedinIcon from "@/ui/icons/social/linkedin"
import GitHubIcon from "@/ui/icons/social/github"
import { useTranslations } from "@/hooks/useTranslations"

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
            />
            <TopBarIcon
              IconComponent={Briefcase}
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.WORK)
              }}
              text={t("redirects.work")}
            />
            <TopBarIcon
              IconComponent={CodeBlocks}
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.PROJECTS)
              }}
              text={t("redirects.projects")}
            />
          </>
        )}
      </div>
      <div
        className={`flex flex-row ${hasScrolled ? "" : "py-2"} space-x-4`}
        id="link-and-settings-container"
        aria-label="Open Sidebar"
      >
        <IconContainer onClick={openGitHub}>
          <div className="w-7 h-7 invert">
            <GitHubIcon />
          </div>
        </IconContainer>
        <IconContainer onClick={openLinkedIn}>
          <div className="w-6 h-6">
            <LinkedinIcon />
          </div>
        </IconContainer>
        <IconContainer onClick={setSidebarVisible}>
          <SidebarOpenIcon />
        </IconContainer>
      </div>
    </TopBarContainer>
  )
}

export default TopBar
