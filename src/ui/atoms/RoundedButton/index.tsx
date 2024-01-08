interface Props {
  children: React.ReactNode
  onClick?: () => void
}

const RoundedButton = ({ children, onClick }: Props) => {
  return (
    <div
      className="flex cursor-pointer justify-center items-center border-[3px] rounded-full border-defaultTextColor dark:border-defaultTextColor-dark w-9 h-9"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default RoundedButton
