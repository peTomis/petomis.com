import style from "./style.module.css"

interface Props {
  label: string
  onClick: () => void
  primary?: boolean
}

const Button = ({ label, onClick, primary }: Props) => {
  return (
    <div
      className={`cursor-pointer text-defaultTextColor-dark  flex justify-center items-center w-[150px] h-[50px]  rounded-md ${
        primary === false
          ? "border-[1px] font-thin opacity-50"
          : "bg-primary-300"
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  )
}

export default Button
