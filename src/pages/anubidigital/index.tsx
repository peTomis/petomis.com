// Hooks
import useIsMailShortcutVisible from "@/hooks/useIsMailShortcutVisible"
import useSidebarVisibility from "@/hooks/useSidebarVisibility"
import scrollToSection from "@/hooks/useScrollToSection"

// Utilities
import { WebsiteSection } from "@/utils"

// Components
import Sidebar from "@/components/sidebar"
import TopBar from "@/components/topbar"
import Contact from "@/components/contact"
import Experience from "@/components/experience"
import Footer from "@/components/footer"

// Molecules
import HomePageContainer from "@/ui/molecules/home-page-container"
import MailShortcut from "@/ui/molecules/mail-shortcut"
import { NextPage } from "next"
import { fetchTranslations } from "@/modules/translations/fetch"

const PienissimoPage: NextPage = () => {
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
      <Experience />
      <Contact />
      <Footer />
      {isMailShortcutVisible && (
        <MailShortcut onClick={handleMailShortcutClick} />
      )}
    </HomePageContainer>
  )
}

export default PienissimoPage

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await fetchTranslations(locale, ["common", "home", "jobs"])),
    },
  }
}
