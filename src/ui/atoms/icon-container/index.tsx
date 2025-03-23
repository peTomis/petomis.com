interface Props {
  children: React.ReactNode
  onClick?: () => void
  ariaLabel?: string
}

const IconContainer = ({ children, onClick, ariaLabel }: Props) => {
  return (
    <button
      className="flex items-center justify-center cursor-pointer w-9 h-9 fill-white"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export default IconContainer
