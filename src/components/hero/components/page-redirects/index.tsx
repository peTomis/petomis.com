// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Utils
import { WebsiteSection } from "@/utils"

// Molecules
import SectionShortcut from "@/ui/molecules/section-shortcut"

// Icons
import AcademicHat from "@/ui/icons/academic-hat"
import Briefcase from "@/ui/icons/briefcase_"
import CodeBlocks from "@/ui/icons/code-blocks"

interface Props {
  onRedirect: (section: WebsiteSection) => void
}

const PageRedirects = ({ onRedirect }: Props) => {
  const { t } = useTranslations("home")
  return (
    <div className="flex flex-row items-center justify-between w-full h-full space-x-2 overflow-x-hidden fill-white max-w-[460px] lg:max-w-[1080px] mx-auto lg:mx-0">
      <SectionShortcut
        label={t("redirects.experience")}
        onClick={() => {
          onRedirect(WebsiteSection.EXPERIENCE)
        }}
        icon={<AcademicHat />}
      />
      <SectionShortcut
        label={t("redirects.projects")}
        onClick={() => {
          onRedirect(WebsiteSection.PROJECTS)
        }}
        icon={<CodeBlocks />}
      />
      <SectionShortcut
        label={t("redirects.work")}
        onClick={() => {
          onRedirect(WebsiteSection.CAREER)
        }}
        icon={<Briefcase />}
      />
    </div>
  )
}

export default PageRedirects
