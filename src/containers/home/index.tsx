// Hooks
import useIsMailShortcutVisible from "@/hooks/useIsMailShortcutVisible"

// Utilities
import { WebsiteSection } from "@/utils"
import scrollToSection from "@/utils/scrollToSection"

// Components
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
  const isMailShortcutVisible = useIsMailShortcutVisible()
  const handleMailShortcutClick = () => scrollToSection(WebsiteSection.CONTACT)

  return (
    <HomePageContainer>
      <TopBar scrollToSelectedDiv={scrollToSection} />
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
