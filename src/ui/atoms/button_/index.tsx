import Typography from "../typography_"

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
          : "bg-primary-300 bg-opacity-80 hover:bg-opacity-100"
      }`}
      onClick={onClick}
    >
      <Typography text={label} />
    </div>
  )
}

export default Button
