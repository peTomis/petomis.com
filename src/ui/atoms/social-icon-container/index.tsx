interface Props {
  children: React.ReactNode
  onClick?: () => void
}

const SocialIconContainer = ({ children, onClick }: Props) => {
  return (
    <div
      className="flex items-center justify-center bg-white cursor-pointer rounded-tr-md rounded-bl-md opacity-60 w-9 h-9"
      onClick={onClick}
    >
      <div className="flex w-6 h-6 fill-black">{children}</div>
    </div>
  )
}

export default SocialIconContainer
