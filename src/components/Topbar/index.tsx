import LinkedinIcon from "@/ui/icons/Linkedin"
import GitHubIcon from "@/ui/icons/Github"
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

interface Props {
  setSidebarVisible: () => void
}

const TopBar = ({ setSidebarVisible }: Props) => {
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
            <IconContainer onClick={() => {}}>
              <RoundedButton>
                <ExperienceIcon size={20} />
              </RoundedButton>
            </IconContainer>
            <IconContainer onClick={() => {}}>
              <RoundedButton>
                <WorkIcon size={20} />
              </RoundedButton>
            </IconContainer>
            <IconContainer onClick={setSidebarVisible}>
              <RoundedButton>
                <ProjectIcon size={20} />
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
