import IconContainer from "@/ui/atoms/IconContainer"
import TopBarContainer from "@/ui/molecules/TopbarContainer"
import TopBarButtonContainer from "@/ui/molecules/TopbarButtonContainer"
import SidebarOpenIcon from "@/ui/icons/SidebarOpen"
import RoundedButton from "@/ui/atoms/RoundedButton"
import ExperienceIcon from "@/ui/icons/Experience"
import WorkIcon from "@/ui/icons/Work"
import ProjectIcon from "@/ui/icons/Project"
import SocialButtons from "@/ui/organisms/SocialButtons"
import { WebsiteSection } from "@/utils/websiteSections"
import useScrolledPastVH from "@/hooks/useScrolledPastVH"

interface Props {
  setSidebarVisible: () => void
  scrollToSelectedDiv: (section: WebsiteSection) => void
}

const TopBar = ({ setSidebarVisible, scrollToSelectedDiv }: Props) => {
  const hasScrolled = useScrolledPastVH(0.01)

  const getScrollY = () => {
    if (typeof window !== "undefined") {
      return window.scrollY
    }
    return 0
  }

  return (
    <TopBarContainer>
      <TopBarButtonContainer id="redirect-container">
        {hasScrolled && (
          <>
            <IconContainer
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.EXPERIENCE)
              }}
            >
              <RoundedButton>
                <ExperienceIcon />
              </RoundedButton>
            </IconContainer>
            <IconContainer
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.WORK)
              }}
            >
              <RoundedButton>
                <WorkIcon />
              </RoundedButton>
            </IconContainer>
            <IconContainer
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.PROJECTS)
              }}
            >
              <RoundedButton>
                <ProjectIcon />
              </RoundedButton>
            </IconContainer>
          </>
        )}
      </TopBarButtonContainer>
      <TopBarButtonContainer id="link-and-settings-container">
        <SocialButtons />
        <IconContainer onClick={setSidebarVisible}>
          <SidebarOpenIcon />
        </IconContainer>
      </TopBarButtonContainer>
    </TopBarContainer>
  )
}

export default TopBar
