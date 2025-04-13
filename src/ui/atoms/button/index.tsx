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
          : "bg-primary-200 text-primary-500 hover:bg-primary-100"
      }`}
      onClick={onClick}
    >
      <div className="absolute z-10 w-8 h-8 rotate-45 -bottom-4 -left-6 bg-primary-500"></div>
      <div className="absolute z-10 w-8 h-8 rotate-45 -top-4 -right-6 bg-primary-500"></div>
      <div className="absolute top-0 right-0 h-[50px] w-1 bg-primary-300"></div>
      <div className="absolute bottom-0 left-0 w-[150px] h-1 bg-primary-300"></div>
      <Typography font="montserrat" text={label.toUpperCase()} bold />
    </div>
  )
}

export default Button
