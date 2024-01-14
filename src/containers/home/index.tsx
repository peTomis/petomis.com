import MailShortcut from "@/ui/molecules/MailShortcut"
import { WebsiteSection } from "@/utils/websiteSections"
import useIsMailShortcutVisible from "@/hooks/useIsMailShortcutVisible"
import HomePageContainer from "@/ui/molecules/HomePageContainer"
import React from "react"
import Sidebar from "@/components/Sidebar"
import TopBar from "@/components/TopBarr"
import Welcome from "@/components/Welcome"
import Contact from "@/components/Contact"
import Work from "@/components/Work"
import Experience from "@/components/Experience"
import BottomBar from "@/components/BottomBarr"
import Projects from "@/components/Projects"
import AboutMe from "@/components/AboutMe"

const HomeContainer = () => {
  const [sidebarVisible, setSidebarVisible] = React.useState(false)
  const isMailShortcutVisible = useIsMailShortcutVisible()

  const scrollToSelectedDiv = (section: WebsiteSection) => {
    const selectedDiv = document.getElementById(section)
    if (selectedDiv) {
      // Get the top position of the selected div relative to the document
      const topPosition =
        selectedDiv.getBoundingClientRect().top + window.pageYOffset

      // Scroll to 300px above the selected div
      window.scrollTo({
        top: topPosition - 50,
        behavior: "smooth",
      })
    }
  }

  return (
    <HomePageContainer>
      <TopBar
        setSidebarVisible={() => setSidebarVisible(!sidebarVisible)}
        scrollToSelectedDiv={scrollToSelectedDiv}
      />
      <Sidebar open={sidebarVisible} onClose={() => setSidebarVisible(false)} />
      <Welcome onRedirect={scrollToSelectedDiv} />
      <AboutMe />
      <Experience />
      <Work />
      <Projects />
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
