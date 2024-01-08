import SidebarCloseButtonFrame from "@/ui/molecules/SidebarCloseButtonFrame"
import SidebarContainer from "@/ui/molecules/SidebarContainer"

interface Props {
  onClose: () => void
  open: boolean
}

const Sidebar = ({ onClose, open }: Props) => {
  return (
    <SidebarContainer open={open}>
      <SidebarCloseButtonFrame onClose={onClose}>
        Sidebar content
      </SidebarCloseButtonFrame>
    </SidebarContainer>
  )
}

export default Sidebar
