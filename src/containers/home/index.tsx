import Welcome from "@/features/home/Welcome"
import MailShortcut from "@/ui/molecules/MailShortcut"
import AboutMe from "@/features/home/AboutMe"
import Quality from "@/features/home/Quality"
import Stack from "@/features/home/Stack"
import Experience from "@/features/home/Experience"
import Contact from "@/features/home/Contact"
import TopBar from "@/features/TopBar"
import { useEffect, useState } from "react"
import Work from "@/features/home/Work"
import { WebsiteSection } from "@/utils/websiteSections"
import useIsMailShortcutVisible from "@/hooks/useIsMailShortcutVisible"

const HomeContainer = () => {
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
    <div
      className={
        "flex overflow-x-hidden relative flex-col items-center justify-center text-defaultTextColor dark:text-defaultTextColor-dark transition-colors duration-500"
      }
    >
      <TopBar />
      <Welcome onRedirect={scrollToSelectedDiv} />
      {/* <AboutMe />*/}
      <Work id="work" />
      {/*  <Stack />
      <Quality />*/}
      <Contact />
      {isMailShortcutVisible && (
        <MailShortcut
          onClick={() => {
            scrollToSelectedDiv(WebsiteSection.CONTACT)
          }}
        />
      )}
    </div>
  )
}

export default HomeContainer
