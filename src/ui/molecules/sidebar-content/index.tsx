// Atoms
import SidebarDivider from "@/ui/atoms/sidebar-divider"

interface Props {
  children: React.ReactNode
}

const SidebarContent = ({ children }: Props) => {
  return (
    <div id="sidebar-item" className="flex flex-col space-y-2">
      <SidebarDivider />
      {children}
      <SidebarDivider />
    </div>
  )
}

export default SidebarContent
