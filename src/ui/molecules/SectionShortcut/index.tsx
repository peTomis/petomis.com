import Typography from "@/ui/atoms/Typography"

interface Props {
  icon: React.ReactNode
  label: string
  onClick: () => void
}

const SectionShortcut = ({ icon, label, onClick }: Props) => {
  return (
    <div
      className="flex flex-col items-center flex-1 rounded-lg cursor-pointer select-none md:text-h5 xxl:text-h4"
      onClick={onClick}
    >
      <div className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px]  xxl:w-[92px] xxl:h-[92px]">
        {icon}
      </div>

      <Typography text={label.toUpperCase()} bold md="h5" xxl="h4" />
    </div>
  )
}

export default SectionShortcut
