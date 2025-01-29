// Atoms
import IconContainer from "@/ui/atoms/icon-container"
import RoundedButton from "@/ui/atoms/RoundedButton"

interface Props {
  IconComponent: React.ElementType
  onClick: () => void
}

const TopBarIcon = ({ IconComponent, onClick }: Props) => (
  <IconContainer onClick={onClick}>
    <RoundedButton>
      <IconComponent />
    </RoundedButton>
  </IconContainer>
)

export default TopBarIcon
