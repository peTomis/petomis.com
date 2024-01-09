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
import Experience from "@/components/home-sections/Experience"
import BottomBar from "@/components/Bottombar"
import Projects from "@/components/home-sections/Projects"

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
      <Experience />
      <Stack />
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
