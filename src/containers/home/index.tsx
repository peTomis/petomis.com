// Hooks
import useIsMailShortcutVisible from "@/hooks/useIsMailShortcutVisible"

// Utilities
import { WebsiteSection } from "@/utils"
import scrollToSection from "@/utils/scrollToSection"

// Components
import TopBar from "@/components/topbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Projects from "@/components/projects"

// Molecules
import HomePageContainer from "@/ui/molecules/home-page-container"
import MailShortcut from "@/ui/molecules/mail-shortcut"

const HomeContainer = () => {
  const isMailShortcutVisible = useIsMailShortcutVisible()
  const handleMailShortcutClick = () => scrollToSection(WebsiteSection.CONTACT)

  return (
    <HomePageContainer>
      <TopBar />
      <Hero onRedirect={scrollToSection} />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <MailShortcut
        visible={isMailShortcutVisible}
        onClick={handleMailShortcutClick}
      />
    </HomePageContainer>
  )
}

export default HomeContainer
