import Typography from "../typography"

interface Props {
  label: string
  onClick: () => void
  primary?: boolean
}

const Button = ({ label, onClick, primary }: Props) => {
  return (
    <div
      className={`cursor-pointer  flex justify-center items-center w-[150px] h-[50px]  rounded-md ${
        primary === false
          ? "border-[1px] opacity-50"
          : "bg-primary-100 text-white hover:bg-opacity-60"
      }`}
      onClick={onClick}
    >
      <Typography text={label.toUpperCase()} bold />
    </div>
  )
}

export default Button
