// Icons
import Mail from "@/ui/icons/mail"

interface Props {
  onClick: () => void
}

const MailShortcut = ({ onClick }: Props) => {
  return (
    <div
      className="fixed border-[0.4px] border-primary-100 flex justify-center items-center z-10 bottom-[16px] right-[16px] w-[64px] h-[64px] rounded-tr-3xl rounded-bl-3xl bg-primary-500 xl:backdrop-blur-sm  bg-opacity-60 hover:bg-primary text-white cursor-pointer"
      onClick={onClick}
      style={{
        boxShadow: "inset 0 0 10px rgba(0, 113, 156, 0.8)",
      }}
    >
      <div className="flex w-10 h-10 fill-white">
        <Mail />
      </div>
    </div>
  )
}

export default MailShortcut
