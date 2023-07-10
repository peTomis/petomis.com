import MailIcon from "@/ui/icons/Mail"

interface Props {
  onClick: () => void
}

const ButtonContact = ({ onClick }: Props) => {
  return (
    <div
      className={
        "fixed flex justify-center items-center z-40 pb-[4px] bottom-[16px] md:bottom-[32px] right-[16px] md:right-[32px] w-[64px] h-[64px] rounded-full bg-primary text-white cursor-pointer"
      }
      onClick={onClick}
    >
      <MailIcon />
    </div>
  )
}

export default ButtonContact
