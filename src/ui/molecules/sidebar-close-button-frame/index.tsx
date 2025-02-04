// Icons
import Burgher from "@/ui/icons/burgher"

interface Props {
  children: React.ReactNode
  onClose: () => void
}

const SidebarCloseButtonFrame = ({ children, onClose }: Props) => {
  return (
    <div id="sidebar-close-button-frame" className="relative w-full h-full">
      <button
        className="absolute top-0 flex items-center justify-center p-2 cursor-pointer right-1 text-h5 fill-white"
        onClick={onClose}
        aria-label="Close sidebar"
      >
        <Burgher />
      </button>
      <div className="w-full h-full px-8 py-32">{children}</div>
    </div>
  )
}

export default SidebarCloseButtonFrame
