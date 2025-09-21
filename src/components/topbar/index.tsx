// Hooks
import useScrolledPastVH from "@/hooks/useScrolledPastVH"
import { useTranslations } from "@/hooks/useTranslations"

// Utilities
import { WebsiteSection } from "@/utils"

// Molecules
import TopBarContainer from "@/ui/molecules/topbar-container"
import TopBarIcon from "@/ui/molecules/topbar-icon"

// Atoms
import IconContainer from "@/ui/atoms/icon-container"

// Icons
import AcademicHat from "@/ui/icons/academic-hat"
import CodeBlocks from "@/ui/icons/code-blocks"
import Mail from "@/ui/icons/mail"
import GitHub from "@/ui/icons/social/github"
import Linkedin from "@/ui/icons/social/linkedin"

interface Props {
  scrollToSelectedDiv: (section: WebsiteSection) => void
}

const TopBar = ({ scrollToSelectedDiv }: Props) => {
  const hasScrolled = useScrolledPastVH(0.01)
  const { t } = useTranslations("home")

  const openGitHub = () => window.open(process.env.GITHUB, "_blank")
  const openLinkedIn = () => window.open(process.env.LINKEDIN, "_blank")

  return (
    <TopBarContainer>
      <div className="mx-auto lg:mx-0">
        <TopBarItemContainer hasScrolled={hasScrolled}>
          {hasScrolled && (
            <TopBarIcon
              IconComponent={AcademicHat}
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.EXPERIENCE)
              }}
              text={t("redirects.experience")}
              ariaLabel="Experience"
            />
          )}
          {hasScrolled && (
            <TopBarIcon
              IconComponent={CodeBlocks}
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.PROJECTS)
              }}
              text={t("redirects.projects")}
              ariaLabel="Projects"
            />
          )}
          {hasScrolled && (
            <TopBarIcon
              IconComponent={Mail}
              onClick={() => {
                scrollToSelectedDiv(WebsiteSection.CONTACT)
              }}
              text={t("redirects.contact")}
              ariaLabel="Work"
            />
          )}
          {hasScrolled && (
            <div className="flex items-center justify-center lg:hidden">
              <div
                className="w-1 h-1 rounded-full opacity-60 bg-primary "
                style={{
                  boxShadow: "inset 0 0 7px rgba(255, 255, 255, 0.8)",
                }}
              ></div>
            </div>
          )}
          <div className="block lg:hidden">
            <TopbarIconContainer onClick={openGitHub} hasScrolled={hasScrolled}>
              <div className="w-7 h-7 invert">
                <GitHub />
              </div>
            </TopbarIconContainer>
          </div>
          <div className="block lg:hidden">
            <TopbarIconContainer
              onClick={openLinkedIn}
              hasScrolled={hasScrolled}
            >
              <div className="w-6 h-6 invert">
                <Linkedin />
              </div>
            </TopbarIconContainer>
          </div>
        </TopBarItemContainer>
      </div>
      <div className="hidden lg:block">
        <TopBarItemContainer hasScrolled={hasScrolled}>
          <TopbarIconContainer onClick={openGitHub} hasScrolled={hasScrolled}>
            <div className="w-7 h-7 invert">
              <GitHub />
            </div>
          </TopbarIconContainer>
          <TopbarIconContainer onClick={openLinkedIn} hasScrolled={hasScrolled}>
            <div className="w-6 h-6 invert">
              <Linkedin />
            </div>
          </TopbarIconContainer>
        </TopBarItemContainer>
      </div>
    </TopBarContainer>
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
