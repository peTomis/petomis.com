import { cn } from "@/utils/cn"

type Variant = "solid" | "outline"

interface CommonProps {
  children: React.ReactNode
  variant?: Variant
  className?: string
}

interface LinkProps extends CommonProps {
  href: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

interface NativeButtonProps extends CommonProps {
  href?: undefined
  type?: "button" | "submit"
  disabled?: boolean
  onClick?: () => void
}

type Props = LinkProps | NativeButtonProps

const base =
  "inline-flex items-center justify-center gap-[9px] px-[26px] py-[14px] rounded-full font-manrope text-[15px] disabled:cursor-not-allowed disabled:opacity-50"

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
  const { children, variant = "solid", className } = props
  const classes = cn(base, variants[variant], className)

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
