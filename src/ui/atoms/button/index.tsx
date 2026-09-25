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
  "inline-flex items-center justify-center gap-[9px] px-[26px] py-[14px] rounded-lg font-manrope text-[15px] transition-[background-color,border-color,box-shadow] duration-[250ms] disabled:cursor-not-allowed disabled:opacity-50"

const variants: Record<Variant, string> = {
  solid:
    "bg-electric text-electric-ink font-bold shadow-[0_8px_30px_rgba(30,167,255,.3)] hover:shadow-[0_14px_40px_rgba(30,167,255,.45)] disabled:hover:shadow-[0_8px_30px_rgba(30,167,255,.3)]",
  outline:
    "border border-white/[.14] text-ink font-semibold hover:border-electric/60 hover:bg-electric/[.06]",
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
