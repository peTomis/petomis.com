import IconContainer from "@/ui/atoms/IconContainer"
import TopBarContainer from "@/ui/molecules/TopbarContainer"
import useIsScrollingUp from "@/hooks/useIsScrollingUp"
import TopBarButtonContainer from "@/ui/molecules/TopbarButtonContainer"
import SidebarOpenIcon from "@/ui/icons/SidebarOpen"
import RoundedButton from "@/ui/atoms/RoundedButton"
import ExperienceIcon from "@/ui/icons/Experience"
import WorkIcon from "@/ui/icons/Work"
import ProjectIcon from "@/ui/icons/Project"
import SocialButtons from "@/ui/organisms/SocialButtons"
import { WebsiteSection } from "@/utils/websiteSections"

interface Props {
  setSidebarVisible: () => void
  scrollToSelectedDiv: (section: WebsiteSection) => void
}

const TopBar = ({ setSidebarVisible, scrollToSelectedDiv }: Props) => {
  const isScrollingUp = useIsScrollingUp()

  const getScrollY = () => {
    if (typeof window !== "undefined") {
      return window.scrollY
    }
    return 0
  }

  return (
    <TopBarContainer>
      <TopBarButtonContainer id="redirect-container">
        {isScrollingUp && getScrollY() > 700 && (
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
