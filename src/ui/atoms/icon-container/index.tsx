import { cn } from "@/utils/cn"

interface Props {
  children: React.ReactNode
  onClick?: () => void
  ariaLabel?: string
}

const IconContainer = ({ children, onClick, ariaLabel }: Props) => {
  return (
    <button
      type="button"
      className={cn(
        "flex h-9 w-9 cursor-pointer items-center justify-center fill-white"
      )}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export default IconContainer
