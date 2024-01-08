interface Props {
  icon: React.ReactNode
  label: string
  onClick: () => void
}

const SectionShortcut = ({ icon, label, onClick }: Props) => {
  return (
    <div
      className="flex flex-col items-center flex-1 rounded-lg cursor-pointer select-none fill-defaultTextColor dark:fill-defaultTextColor-dark"
      onClick={onClick}
    >
      <div className="w-[48px] h-[48px] xl:w-[92px] xl:h-[92px]">{icon}</div>
      <div className="text-base font-roboto xl:text-h4">{label}</div>
    </div>
  )
}

export default SectionShortcut
