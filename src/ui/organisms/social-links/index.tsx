// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Icons
import GitHub from "@/ui/icons/social/github"
import Linkedin from "@/ui/icons/social/linkedin"

// Utilities
import { externalLinks } from "@/config/site"
import { cn } from "@/utils/cn"

interface Props {
  /** Accessible name for the group (renders a `<nav>` when given). */
  label?: string
  /** Icons only, without the glass pill container. */
  bare?: boolean
  className?: string
}

/** Round social icon links (GitHub, LinkedIn), in a glass pill unless `bare`. */
const SocialLinks = ({ label, bare, className }: Props) => {
  const { t } = useTranslations("common")

  const links = [
    {
      href: externalLinks.github,
      label: t("social.github"),
      icon: <GitHub />,
      size: "w-[17px] h-[17px]",
    },
    {
      href: externalLinks.linkedin,
      label: t("social.linkedin"),
      icon: <Linkedin />,
      size: "w-4 h-4",
    },
  ]

  const Wrapper = label ? "nav" : "div"

  return (
    <Wrapper
      aria-label={label}
      className={cn(
        "inline-flex items-center gap-0.5",
        !bare && "p-[5px] rounded-full glass",
        className
      )}
    >
      {links.map(({ href, label: linkLabel, icon, size }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={linkLabel}
          className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full text-ink-label transition-colors duration-[250ms] hover:text-ink hover:bg-white/[.08]"
        >
          <span className={size}>{icon}</span>
        </a>
      ))}
    </Wrapper>
  )
}

export default SocialLinks
