import CloseButtonIcon from "@/ui/icons/CloseButton"
import SidebarOpenIcon from "@/ui/icons/SidebarOpen"

interface Props {
  children: React.ReactNode
  onClose: () => void
}

const SidebarCloseButtonFrame = ({ children, onClose }: Props) => {
  return (
    <div id="sidebar-close-button-frame" className={`relative w-full h-full`}>
      <div
        className="absolute items-center justify-center rotate-180 cursor-pointer text-h5 text-background left-5 top-5 fill-defaultTextColor dark:fill-defaultTextColor-dark"
        onClick={onClose}
      >
        <SidebarOpenIcon />
      </div>
      <div className="w-full h-full px-8 py-32">{children}</div>
    </div>
  )
}

export default SidebarCloseButtonFrame
