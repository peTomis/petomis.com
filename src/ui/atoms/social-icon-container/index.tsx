import { cn } from "@/utils/cn"

interface Props {
  children: React.ReactNode
  href: string
  label: string
}

const SocialIconContainer = ({ children, href, label }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-tr-md rounded-bl-md bg-white bg-opacity-60"
      )}
    >
      <div className="flex w-6 h-6 fill-black">{children}</div>
    </a>
  )
}

export default SocialIconContainer
