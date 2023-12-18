interface Props {
  icon: React.ReactNode
  label: string
  onClick: () => void
}

const RedirectRow = ({ icon, label, onClick }: Props) => {
  return (
    <div
      className="flex flex-col items-center rounded-lg cursor-pointer select-none"
      onClick={onClick}
    >
      <div className="w-[48px] h-[48px]">{icon}</div>
      <div className="text-base font-roboto">{label}</div>
    </div>
  )
}

export default RedirectRow
