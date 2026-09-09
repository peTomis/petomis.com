// Hooks
import useScrolledPastVH from "@/hooks/useScrolledPastVH"

// Utilities
import { openExternalLink } from "@/utils"

// Molecules
import TopBarContainer from "@/ui/molecules/topbar-container"

// Icons
import GitHub from "@/ui/icons/social/github"
import Linkedin from "@/ui/icons/social/linkedin"
import Credly from "@/ui/icons/social/credly"

const TopBar = () => {
  const hasScrolled = useScrolledPastVH(0.01)

  const socialActions = [
    {
      IconComponent: GitHub,
      onClick: () => openExternalLink(process.env.GITHUB),
      className: "text-white w-7 h-7",
    },
    {
      IconComponent: Credly,
      onClick: () => openExternalLink(process.env.CREDLY),
      className: "text-white w-7 h-7",
    },
    {
      IconComponent: Linkedin,
      onClick: () => openExternalLink(process.env.LINKEDIN),
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
    onClick: () => void
    className: string
  }>
  hasScrolled?: boolean
}) => {
  return (
    <>
      {actions.map(({ IconComponent, onClick, className }) => (
        <TopbarIconContainer
          key={className}
          onClick={onClick}
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
  onClick,
  hasScrolled,
}: {
  children: React.ReactNode
  onClick?: () => void
  hasScrolled?: boolean
}) => {
  return (
    <div
      className={`flex items-center justify-center transition-all duration-500 ease-in-out rounded-full cursor-pointer w-11 h-11 ${
        hasScrolled ? "hover:bg-primary" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
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
