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
  <button
    aria-label={ariaLabel}
    onClick={onClick}
    className="flex flex-row items-center px-2 py-2 space-x-2 cursor-pointer hover:bg-white md:px-4 hover:bg-opacity-10"
  >
    <IconContainer>
      <div className="w-8 h-8 md:w-6 md:h-6">
        <IconComponent />
      </div>
    </IconContainer>
    <div className="hidden lg:flex">
      <Typography bold text={text} />
    </div>
  </button>
)

export default TopBarIcon
