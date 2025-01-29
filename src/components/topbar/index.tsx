// Hooks
import useScrolledPastVH from "@/hooks/useScrolledPastVH"

// Utilities
import { WebsiteSection } from "@/utils/websiteSections"

// Molecules
import TopBarContainer from "@/ui/molecules/topbar-container"

// Atoms
import IconContainer from "@/ui/atoms/icon-container"

// Icons
import ExperienceIcon from "@/ui/icons/Experience"
import ProjectIcon from "@/ui/icons/Project"
import SidebarOpenIcon from "@/ui/icons/burgher"
import WorkIcon from "@/ui/icons/Work"
import TopBarIcon from "@/ui/molecules/topbar-icon"
import LinkedinIcon from "@/ui/icons/social/linkedin"
import GitHubIcon from "@/ui/icons/social/github"

interface Props {
  setSidebarVisible: () => void
  scrollToSelectedDiv: (section: WebsiteSection) => void
}

const TopBar = ({ setSidebarVisible, scrollToSelectedDiv }: Props) => {
  const hasScrolled = useScrolledPastVH(0.01)

  const openGitHub = () => window.open(process.env.GITHUB, "_blank")
  const openLinkedIn = () => window.open(process.env.LINKEDIN, "_blank")

  return (
    <TopBarContainer>
      <div id="redirect-container" className="flex flex-row space-x-4 ">
        {hasScrolled && (
          <>
            <TopBarIcon
              IconComponent={ExperienceIcon}
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.EXPERIENCE)
              }}
            />
            <TopBarIcon
              IconComponent={WorkIcon}
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.WORK)
              }}
            />
            <TopBarIcon
              IconComponent={ProjectIcon}
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.PROJECTS)
              }}
            />
          </>
        )}
      </div>
      <div
        className="flex flex-row space-x-4 "
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
