// External libraries
import React from "react"

// Sidebar Components
import DarkModeToggle from "./components/DarkModeToggle"
import LanguageSelector from "./components/LanguageSelector"

// Organisms
import SocialButtons from "@/ui/organisms/SocialButtons"

// Molecules
import SidebarItem from "@/ui/molecules/SidebarItem"
import SidebarCloseButtonFrame from "@/ui/molecules/SidebarCloseButtonFrame"
import SidebarContainer from "@/ui/molecules/SidebarContainer"

interface Props {
  onClose: () => void
  open: boolean
}

const Sidebar = ({ onClose, open }: Props) => {
  return (
    <SidebarContainer open={open} onClose={onClose}>
      <SidebarCloseButtonFrame onClose={onClose}>
        <div
          id="sidebar-content-container"
          className="relative flex flex-col justify-start h-full space-y-8"
        >
          <SidebarItem>
            <LanguageSelector />
          </SidebarItem>
          <DarkModeToggle />
          <div
            id="sidebar-social-links"
            className="absolute bottom-0 right-0 flex flex-row space-x-4 "
          >
            <SocialButtons />
          </div>
        </div>
      </SidebarCloseButtonFrame>
    </SidebarContainer>
  )
}

export default Sidebar
