interface Props {
  children: React.ReactNode
  onClick?: () => void
  dark?: boolean
}

const IconContainer = ({ children, onClick, dark }: Props) => {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer w-9 h-9 ${
        dark === undefined
          ? "fill-defaultTextColor dark:fill-defaultTextColor-dark"
          : dark
          ? "fill-defaultTextColor-dark"
          : "fill-defaultTextColor"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default IconContainer
