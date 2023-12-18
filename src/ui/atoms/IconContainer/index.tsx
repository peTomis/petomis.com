interface Props {
  children: React.ReactNode
  onClick?: () => void
}

const IconContainer = ({ children, onClick }: Props) => {
  return (
    <div
      className="cursor-pointer w-9 h-9 fill-defaultTextColor dark:fill-defaultTextColor-dark"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default IconContainer
