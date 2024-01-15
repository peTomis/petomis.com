import SidebarCloseButtonFrame from "@/ui/molecules/SidebarCloseButtonFrame"
import SidebarContainer from "@/ui/molecules/SidebarContainer"
import DarkModeToggle from "./components/DarkModeToggle"
import SocialButtons from "@/ui/organisms/SocialButtons"
import LanguageSelector from "./components/LanguageSelector"
import SidebarItem from "@/ui/molecules/SidebarItem"
import React from "react"
import useSwipeHandler from "@/hooks/useSwipeHandler"

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
