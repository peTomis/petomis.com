import Typography from "../typography"

interface Props {
  label: string
  onClick: () => void
  primary?: boolean
}

const Button = ({ label, onClick, primary }: Props) => {
  return (
    <div
      className={`relative cursor-pointer flex justify-center items-center w-[150px] h-[50px] ${
        primary === false
          ? "border-[1px] opacity-50"
          : "bg-primary-200 text-primary-500 hover:bg-primary-100 rounded-tr-xl rounded-bl-2xl"
      }`}
      onClick={onClick}
    >
      <Typography font="montserrat" text={label.toUpperCase()} bold />
    </div>
  )
}

export default Button
