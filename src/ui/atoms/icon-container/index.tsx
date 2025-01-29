interface Props {
  children: React.ReactNode
  onClick?: () => void
}

const IconContainer = ({ children, onClick }: Props) => {
  return (
    <div
      className="flex items-center justify-center cursor-pointer w-9 h-9 fill-defaultTextColor"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default IconContainer
