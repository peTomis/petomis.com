import Typography from "../typography"
import { cn } from "@/utils/cn"

interface Props {
  label: string
  onClick?: () => void
  primary?: boolean
  type?: "button" | "submit"
  disabled?: boolean
}

const Button = ({ label, onClick, primary, type = "button", disabled }: Props) => {
  return (
    <button
      type={type}
      aria-label={label}
      disabled={disabled}
      className={cn(
        "relative flex h-[50px] w-[150px] items-center justify-center",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        primary === false
          ? "border-[1px] opacity-50"
          : "rounded-tr-xl rounded-bl-2xl bg-primary-200 text-primary-500 hover:bg-primary-100"
      )}
      onClick={onClick}
    >
      <Typography font="montserrat" text={label.toUpperCase()} bold />
    </button>
  )
}

export default Button
