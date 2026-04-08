// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Utils
import { WebsiteSection } from "@/utils"

// Molecules
import SectionShortcut from "@/ui/molecules/section-shortcut"

// Icons
import AcademicHat from "@/ui/icons/academic-hat"
import CodeBlocks from "@/ui/icons/code-blocks"
import Mail from "@/ui/icons/mail"

interface Props {
  onRedirect: (_section: WebsiteSection) => void
}

const PageRedirects = ({ onRedirect }: Props) => {
  const { t } = useTranslations("home")

  const shortcuts = [
    {
      label: t("redirects.projects"),
      section: WebsiteSection.PROJECTS,
      icon: <CodeBlocks />,
    },
    {
      label: t("redirects.experience"),
      section: WebsiteSection.EXPERIENCE,
      icon: <AcademicHat />,
    },

    {
      label: t("redirects.contact"),
      section: WebsiteSection.CONTACT,
      icon: <Mail />,
    },
  ]

  return (
    <div className="flex flex-row items-center justify-between w-full h-full space-x-2 overflow-x-hidden fill-white max-w-[460px] lg:max-w-[1080px] mx-auto lg:mx-0">
      {shortcuts.map(({ label, section, icon }) => (
        <SectionShortcut
          key={section}
          label={label}
          onClick={() => onRedirect(section)}
          icon={icon}
        />
      ))}
    </div>
  )
}

export default PageRedirects
