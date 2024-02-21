// Atoms
import SidebarDivider from "@/ui/atoms/SidebarDivider"

interface Props {
  children: React.ReactNode
}

const SidebarItem = ({ children }: Props) => {
  return (
    <div id="sidebar-item" className="flex flex-col space-y-2">
      <SidebarDivider />
      {children}
      <SidebarDivider />
    </div>
  )
}

export default SidebarItem
