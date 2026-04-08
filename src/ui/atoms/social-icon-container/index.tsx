import { cn } from "@/utils/cn"

interface Props {
  children: React.ReactNode
  onClick?: () => void
}

const SocialIconContainer = ({ children, onClick }: Props) => {
  return (
    <button
      type="button"
      className={cn(
        "flex h-9 w-9 cursor-pointer items-center justify-center rounded-tr-md rounded-bl-md bg-white opacity-60"
      )}
      onClick={onClick}
    >
      <div className="flex w-6 h-6 fill-black">{children}</div>
    </button>
  )
}

export default SocialIconContainer
