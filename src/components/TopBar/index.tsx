// Hooks
import useScrolledPastVH from "@/hooks/useScrolledPastVH"

// Utilities
import { WebsiteSection } from "@/utils/websiteSections"

// Organisms
import SocialButtons from "@/ui/organisms/social-buttons"

// Molecules
import TopBarContainer from "@/ui/molecules/TopbarContainer"
import TopBarButtonContainer from "@/ui/molecules/TopbarButtonContainer"

// Atoms
import IconContainer from "@/ui/atoms/icon-container"

// Icons
import ExperienceIcon from "@/ui/icons/Experience"
import ProjectIcon from "@/ui/icons/Project"
import SidebarOpenIcon from "@/ui/icons/burgher"
import WorkIcon from "@/ui/icons/Work"
import TopBarIcon from "@/ui/molecules/TopbarIcon"

interface Props {
  setSidebarVisible: () => void
  scrollToSelectedDiv: (section: WebsiteSection) => void
}

const TopBar = ({ setSidebarVisible, scrollToSelectedDiv }: Props) => {
  const hasScrolled = useScrolledPastVH(0.01)

  return (
    <TopBarContainer>
      <TopBarButtonContainer id="redirect-container">
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
      </TopBarButtonContainer>
      <TopBarButtonContainer
        id="link-and-settings-container"
        aria-label="Open Sidebar"
      >
        <SocialButtons />
        <IconContainer onClick={setSidebarVisible}>
          <SidebarOpenIcon />
        </IconContainer>
      </TopBarButtonContainer>
    </TopBarContainer>
  )
}

export default TopBar
