interface Props {
  icon: React.ReactNode
  label: string
  onClick: () => void
}

const RedirectRow = ({ icon, label, onClick }: Props) => {
  return (
    <div
      className="flex flex-row items-center space-x-4 font-light cursor-pointer select-none"
      onClick={onClick}
    >
      <div className="w-[32px] h-[32px] xxl:w-[48px] xxl:h-[48px]">{icon}</div>
      <div className="text-h5 xxl:text-h1">{label}</div>
    </div>
  )
}

export default RedirectRow
