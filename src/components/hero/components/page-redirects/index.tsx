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

// Deterministic per-shortcut rotation for the hover background: must be fixed
// so server and client render the same markup (Math.random() would mismatch
// on hydration). Values are otherwise arbitrary, just spread apart visually.
const SHORTCUT_ROTATIONS: Record<WebsiteSection, number> = {
  [WebsiteSection.PROJECTS]: 140,
  [WebsiteSection.EXPERIENCE]: 260,
  [WebsiteSection.CONTACT]: 40,
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
          href={`#${section}`}
          initialRotation={SHORTCUT_ROTATIONS[section]}
          onNavigate={() => onRedirect(section)}
          icon={icon}
        />
      ))}
    </div>
  )
}

export default PageRedirects
