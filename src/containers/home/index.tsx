// External libraries
import React from "react"

// Hooks
import useIsMailShortcutVisible from "@/hooks/useIsMailShortcutVisible"
import useSidebarVisibility from "@/hooks/useSidebarVisibility"
import scrollToSection from "@/hooks/useScrollToSection"

// Utilities
import { WebsiteSection } from "@/utils/websiteSections"

// Components
import Sidebar from "@/components/Sidebar"
import TopBar from "@/components/TopBar"
import Welcome from "@/components/Welcome"
import Contact from "@/components/Contact"
import Work from "@/components/Work"
import Experience from "@/components/Experience"
import BottomBar from "@/components/BottomBar"
import Projects from "@/components/Projects"
import AboutMe from "@/components/AboutMe"

// Molecules
import HomePageContainer from "@/ui/molecules/HomePageContainer"
import MailShortcut from "@/ui/molecules/MailShortcut"

const HomeContainer = () => {
  const { sidebarVisible, toggleSidebar, closeSidebar } = useSidebarVisibility()
  const isMailShortcutVisible = useIsMailShortcutVisible()
  const handleMailShortcutClick = () => scrollToSection(WebsiteSection.CONTACT)

  return (
    <HomePageContainer>
      <TopBar
        setSidebarVisible={toggleSidebar}
        scrollToSelectedDiv={scrollToSection}
      />
      <Sidebar open={sidebarVisible} onClose={closeSidebar} />
      <Welcome onRedirect={scrollToSection} />
      <AboutMe />
      <Experience />
      <Work />
      <Projects />
      <Contact />
      <BottomBar />
      {isMailShortcutVisible && (
        <MailShortcut onClick={handleMailShortcutClick} />
      )}
    </HomePageContainer>
  )
}

export default HomeContainer
