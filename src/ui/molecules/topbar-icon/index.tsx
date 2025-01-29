// Atoms
import IconContainer from "@/ui/atoms/icon-container"

interface Props {
  IconComponent: React.ElementType
  onClick: () => void
}

const TopBarIcon = ({ IconComponent, onClick }: Props) => (
  <IconContainer onClick={onClick}>
    <div className="w-8 h-8">
      <IconComponent />
    </div>
  </IconContainer>
)

export default TopBarIcon
