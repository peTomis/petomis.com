interface Props {
  children: React.ReactNode
  onClick?: () => void
}

const IconContainer = ({ children, onClick }: Props) => {
  return (
    <div
      className="flex cursor-pointer w-9 h-9 fill-defaultTextColor"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default IconContainer
