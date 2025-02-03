// Hooks
import useIsMailShortcutVisible from "@/hooks/useIsMailShortcutVisible"
import useSidebarVisibility from "@/hooks/useSidebarVisibility"
import scrollToSection from "@/hooks/useScrollToSection"

// Utilities
import { WebsiteSection } from "@/utils/websiteSections"

// Components
import Sidebar from "@/components/sidebar"
import TopBar from "@/components/topbar"
import Hero from "@/components/Hero"
import Contact from "@/components/contact"
import Work from "@/components/Work"
import Experience from "@/components/experienc"
import Footer from "@/components/footer"
import Projects from "@/components/project"
import Certifications from "@/components/certifications"

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
      <Hero onRedirect={scrollToSection} />
      <Certifications />
      <Experience />
      <Projects />
      <Work />
      <Contact />
      <Footer />
      {isMailShortcutVisible && (
        <MailShortcut onClick={handleMailShortcutClick} />
      )}
    </HomePageContainer>
  )
}

export default HomeContainer
