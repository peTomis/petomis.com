// Icons
import SidebarOpenIcon from "@/ui/icons/SidebarOpen"

interface Props {
  children: React.ReactNode
  onClose: () => void
}

const SidebarCloseButtonFrame = ({ children, onClose }: Props) => {
  return (
    <div id="sidebar-close-button-frame" className="relative w-full h-full">
      <button
        className="absolute flex items-center justify-center p-2 cursor-pointer left-5 top-5 text-h5 text-background fill-defaultTextColor dark:fill-defaultTextColor-dark"
        onClick={onClose}
        aria-label="Close sidebar"
        style={{ transform: "rotate(180deg)" }}
      >
        <SidebarOpenIcon />
      </button>
      <div className="w-full h-full px-8 py-32">{children}</div>
    </div>
  )
}

export default SidebarCloseButtonFrame
