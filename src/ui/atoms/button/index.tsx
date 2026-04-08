import Typography from "../typography"
import { cn } from "@/utils/cn"

interface Props {
  label: string
  onClick: () => void
  primary?: boolean
}

const Button = ({ label, onClick, primary }: Props) => {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "relative flex h-[50px] w-[150px] cursor-pointer items-center justify-center",
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
