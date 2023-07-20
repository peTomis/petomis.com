import MailIcon from "@/ui/icons/Mail"
import style from "./style.module.css"

interface Props {
  onClick: () => void
}

const ButtonContact = ({ onClick }: Props) => {
  return (
    <div className={style.base} onClick={onClick}>
      <MailIcon />
    </div>
  )
}

export default ButtonContact
