// Hooks
import useIsMailShortcutVisible from "@/hooks/useIsMailShortcutVisible"
import useSidebarVisibility from "@/hooks/useSidebarVisibility"

// Utilities
import { WebsiteSection } from "@/utils"
import scrollToSection from "@/utils/scrollToSection"

// Components
import Sidebar from "@/components/sidebar"
import TopBar from "@/components/topbar"
import Hero from "@/components/hero"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"

// Molecules
import HomePageContainer from "@/ui/molecules/home-page-container"
import MailShortcut from "@/ui/molecules/mail-shortcut"

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
      <Projects />
      <Contact />
      <Footer />
      {isMailShortcutVisible && (
        <MailShortcut onClick={handleMailShortcutClick} />
      )}
    </HomePageContainer>
  )
}

export default HomeContainer
