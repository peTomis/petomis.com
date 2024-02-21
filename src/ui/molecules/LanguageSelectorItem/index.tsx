// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Atoms
import Typography from "@/ui/atoms/Typography"

// Icons
import ArrowIcon from "@/ui/icons/Arrow"

interface Props {
  label: string
  onClick: () => void
  main: boolean
}

const LanguageSelectorItem = ({ label, onClick, main }: Props) => {
  const { t } = useTranslations("common")
  return (
    <div className="relative flex flex-row items-center justify-end space-x-2 select-none">
      <div className={main ? "" : "opacity-0"}>
        <Typography text={t("sidebar.language")} />
      </div>
      <div
        className="relative flex flex-row items-center justify-center pl-4 w-full lg:w-[200px] h-[42px] overflow-hidden bg-background-dark bg-opacity-10 dark:bg-background dark:bg-opacity-10 px-2 space-x-2 rounded-lg cursor-pointer"
        onClick={onClick}
      >
        <div className="z-10">
          <Typography text={label} />
        </div>

        {main && (
          <div className="absolute flex items-center justify-center rotate-90 opacity-50 right-4 fill-defaultTextColor dark:fill-defaultTextColor-dark">
            <ArrowIcon />
          </div>
        )}
      </div>
    </div>
  )
}

export default LanguageSelectorItem
