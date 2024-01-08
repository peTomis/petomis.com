import MailShortcut from "@/ui/molecules/MailShortcut"
import { WebsiteSection } from "@/utils/websiteSections"
import useIsMailShortcutVisible from "@/hooks/useIsMailShortcutVisible"
import HomePageContainer from "@/ui/molecules/HomePageContainer"
import React from "react"
import Sidebar from "@/components/Sidebar"
import TopBar from "@/components/Topbar"
import Welcome from "@/components/home-sections/Welcome"
import Contact from "@/components/home-sections/Contact"
import Work from "@/components/home-sections/Work"
import Stack from "@/components/home-sections/Stack"
import AboutMe from "@/components/home-sections/AboutMe"
import BottomBar from "@/components/home-sections/Bottombar"

const HomeContainer = () => {
  const [sidebarVisible, setSidebarVisible] = React.useState(false)
  const isMailShortcutVisible = useIsMailShortcutVisible()

  const scrollToSelectedDiv = (section: WebsiteSection) => {
    if (section === WebsiteSection.CONTACT) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      })
      return
    }

    const selectedDiv = document.getElementById(section)
    if (selectedDiv) selectedDiv.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <HomePageContainer>
      <TopBar setSidebarVisible={() => setSidebarVisible(!sidebarVisible)} />
      <Sidebar open={sidebarVisible} onClose={() => setSidebarVisible(false)} />
      <Welcome onRedirect={scrollToSelectedDiv} />
      <AboutMe />
      <Work id="work" />
      <Stack />
      <Contact />
      <BottomBar />
      {isMailShortcutVisible && (
        <MailShortcut
          onClick={() => {
            scrollToSelectedDiv(WebsiteSection.CONTACT)
          }}
        />
      )}
    </HomePageContainer>
  )
}

export default HomeContainer
