// Hooks
import useScrolledPastVH from "@/hooks/useScrolledPastVH"
import { useTranslations } from "@/hooks/useTranslations"

// Utilities
import { externalLinks } from "@/config/site"

// Molecules
import TopBarContainer from "@/ui/molecules/topbar-container"

// Icons
import GitHub from "@/ui/icons/social/github"
import Linkedin from "@/ui/icons/social/linkedin"
import Credly from "@/ui/icons/social/credly"

const TopBar = () => {
  const hasScrolled = useScrolledPastVH(0.01)
  const { t } = useTranslations("common")

  const socialActions = [
    {
      IconComponent: GitHub,
      href: externalLinks.github,
      label: t("social.github"),
      className: "text-white w-7 h-7",
    },
    {
      IconComponent: Credly,
      href: externalLinks.credly,
      label: t("social.credly"),
      className: "text-white w-7 h-7",
    },
    {
      IconComponent: Linkedin,
      href: externalLinks.linkedin,
      label: t("social.linkedin"),
      className: "w-6 h-6 text-white",
    },
  ]

  return (
    <TopBarContainer>
      <div className="mx-auto lg:mx-0">
        <TopBarItemContainer hasScrolled={hasScrolled}>
          <div className="flex flex-row lg:hidden">
            <TopBarSocialButtons
              actions={socialActions}
              hasScrolled={hasScrolled}
            />
          </div>
        </TopBarItemContainer>
      </div>
      <div className="hidden lg:block">
        <TopBarItemContainer hasScrolled={hasScrolled}>
          <TopBarSocialButtons
            actions={socialActions}
            hasScrolled={hasScrolled}
          />
        </TopBarItemContainer>
      </div>
    </TopBarContainer>
  )
}

const TopBarSocialButtons = ({
  actions,
  hasScrolled,
}: {
  actions: Array<{
    IconComponent: React.ElementType
    href: string
    label: string
    className: string
  }>
  hasScrolled?: boolean
}) => {
  return (
    <>
      {actions.map(({ IconComponent, href, label, className }) => (
        <TopbarIconContainer
          key={href}
          href={href}
          label={label}
          hasScrolled={hasScrolled}
        >
          <div className={className}>
            <IconComponent />
          </div>
        </TopbarIconContainer>
      ))}
    </>
  )
}

const TopbarIconContainer = ({
  children,
  href,
  label,
  hasScrolled,
}: {
  children: React.ReactNode
  href: string
  label: string
  hasScrolled?: boolean
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex items-center justify-center transition-all duration-500 ease-in-out rounded-full w-11 h-11 ${
        hasScrolled ? "hover:bg-primary" : ""
      }`}
    >
      {children}
    </a>
  )
}

const TopBarItemContainer = ({
  hasScrolled,
  children,
}: {
  hasScrolled: boolean
  children?: React.ReactNode
}) => {
  return (
    <div
      className={`flex w-full flex-row p-2 border-[0.4px] gap-x-2 rounded-full ease-in-out ${
        hasScrolled
          ? " border-primary-100 bg-primary-500 backdrop-blur-sm bg-opacity-60 inset-shadow-sm inset-shadow-indigo-500 transition-all duration-1000 "
          : " border-transparent transition-none"
      } `}
      style={{
        boxShadow: hasScrolled
          ? "inset 0 0 10px rgba(0, 113, 156, 0.8)"
          : "none",
      }}
    >
      {children}
    </div>
  )
}

export default TopBar
