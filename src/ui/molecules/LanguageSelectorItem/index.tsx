import RoundedButton from "@/ui/atoms/RoundedButton"

interface Props {
  flag: React.ReactNode
  label: string
  onClick: () => void
}

const LanguageSelectorItem = ({ flag, label, onClick }: Props) => {
  return (
    <div
      className="flex flex-row items-center justify-center space-x-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="scale-75">
        <RoundedButton onClick={() => {}}>{flag}</RoundedButton>
      </div>
      <div className="font-light text-h5">{label}</div>
    </div>
  )
}

export default LanguageSelectorItem
