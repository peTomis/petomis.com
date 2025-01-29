// External libraries
import React from "react"

// Sidebar Components
import LanguageSelector from "./components/language-selector"

// Organisms
import SocialButtons from "@/ui/organisms/social-buttons"

// Molecules
import SidebarCloseButtonFrame from "@/ui/molecules/sidebar-close-button-frame"
import SidebarContainer from "@/ui/molecules/sidebar-container"

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
          <LanguageSelector />
        </div>
        <div
          id="sidebar-social-links"
          className="absolute flex flex-row space-x-4 bottom-5 right-5 "
        >
          <SocialButtons />
        </div>
      </SidebarCloseButtonFrame>
    </SidebarContainer>
  )
}

export default Sidebar
