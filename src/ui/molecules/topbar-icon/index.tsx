// Atoms
import IconContainer from "@/ui/atoms/icon-container"
import Typography from "@/ui/atoms/typography"

interface Props {
  IconComponent: React.ElementType
  onClick: () => void
  text: string
  ariaLabel?: string
}

const TopBarIcon = ({ IconComponent, onClick, text, ariaLabel }: Props) => (
  <div
    onClick={onClick}
    className="flex flex-row items-center px-4 py-1 space-x-2 transition-all duration-500 ease-in-out rounded-full cursor-pointer hover:bg-primary"
  >
    <IconContainer aria-label={ariaLabel}>
      <div className="w-8 h-8 md:w-6 md:h-6">
        <IconComponent />
      </div>
    </IconContainer>
    <div className="hidden lg:flex">
      <Typography font="montserrat" bold text={text.toUpperCase()} />
    </div>
  </div>
)

export default TopBarIcon
