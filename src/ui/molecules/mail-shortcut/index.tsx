// Icons
import Mail from "@/ui/icons/mail"

interface Props {
  onClick: () => void
}

const MailShortcut = ({ onClick }: Props) => {
  return (
    <div
      className="fixed flex justify-center items-center z-10 bottom-[16px] md:bottom-[32px] right-[16px] md:right-[32px] w-[64px] h-[64px] rounded-full bg-primary text-white cursor-pointer"
      onClick={onClick}
    >
      <div className="flex w-10 h-10 fill-white">
        <Mail />
      </div>
    </div>
  )
}

export default MailShortcut
