import { cn } from "@/utils/cn"

type Variant = "solid" | "outline"
type Size = "md" | "sm"

interface CommonProps {
  children: React.ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

interface LinkProps extends CommonProps {
  href: string
  onClick?: (_event: React.MouseEvent<HTMLAnchorElement>) => void
}

interface NativeButtonProps extends CommonProps {
  href?: undefined
  type?: "button" | "submit"
  disabled?: boolean
  onClick?: () => void
}

type Props = LinkProps | NativeButtonProps

const base =
  "inline-flex items-center justify-center gap-[9px] rounded-full font-manrope disabled:cursor-not-allowed disabled:opacity-50"

const sizes: Record<Size, string> = {
  md: "px-[26px] py-[14px] text-[15px]",
  sm: "px-[22px] py-[11px] text-[14px]",
}

// Liquid glass styles live in styles/tailwind.css (`.glass*`).
const variants: Record<Variant, string> = {
  solid: "glass-accent text-electric-ink font-bold",
  outline: "glass glass-interactive text-ink font-semibold",
}

/**
 * Site-wide call-to-action button. Renders an `<a>` when `href` is given,
 * otherwise a native `<button>`.
 */
const Button = (props: Props) => {
  const { children, variant = "solid", size = "md", className } = props
  const classes = cn(base, sizes[size], variants[variant], className)

  if (props.href !== undefined) {
    return (
      <a href={props.href} onClick={props.onClick} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  )
}

export default Button
