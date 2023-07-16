import style from "./style.module.css"

interface Props {
  label: string
  onClick: () => void
  primary?: boolean
}

const Button = ({ label, onClick, primary }: Props) => {
  return (
    <div
      className={`${style.button} ${
        primary === false ? style.secondary : style.primary
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  )
}

export default Button
