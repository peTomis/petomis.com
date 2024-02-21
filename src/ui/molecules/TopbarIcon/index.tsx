// Atoms
import IconContainer from "@/ui/atoms/IconContainer"
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
