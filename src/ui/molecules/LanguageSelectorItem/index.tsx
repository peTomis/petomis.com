import RoundedButton from "@/ui/atoms/RoundedButton"
import ArrowIcon from "@/ui/icons/Arrow"

interface Props {
  flag: React.ReactNode
  label: string
  onClick: () => void
  main: boolean
}

const LanguageSelectorItem = ({ flag, label, onClick, main }: Props) => {
  return (
    <div className="relative flex flex-row items-center justify-end space-x-2 select-none">
      <div className={main ? "" : "opacity-0"}>Language:</div>
      <div
        className="relative flex flex-row items-center justify-center pl-4 w-full lg:w-[200px] h-[42px] overflow-hidden bg-background-dark bg-opacity-20 dark:bg-background dark:bg-opacity-10 px-2 space-x-2 rounded-lg cursor-pointer"
        onClick={onClick}
      >
        <div className="z-10">{label}</div>
        <div className="absolute w-[70px] left-[-15px] opacity-80">{flag}</div>

        {main && (
          <div className="absolute flex items-center justify-center rotate-90 right-2 fill-defaultTextColor dark:fill-defaultTextColor-dark">
            <ArrowIcon />
          </div>
        )}
      </div>
    </div>
  )
}

export default LanguageSelectorItem
