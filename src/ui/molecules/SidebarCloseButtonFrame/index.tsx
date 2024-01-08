interface Props {
  children: React.ReactNode
  onClose: () => void
}

const SidebarCloseButtonFrame = ({ children, onClose }: Props) => {
  return (
    <div id="sidebar-close-button-frame" className={`relative w-full h-full`}>
      <div className="absolute cursor-pointer left-5 top-5" onClick={onClose}>
        X
      </div>
      <div className="w-full h-full px-8 py-32">{children}</div>
    </div>
  )
}

export default SidebarCloseButtonFrame
