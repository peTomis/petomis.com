// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Utils
import { WebsiteSection } from "@/utils/websiteSections"

// Molecules
import SectionShortcut from "@/ui/molecules/SectionShortcut"

// Icons
import ExperienceIcon from "@/ui/icons/Experience"
import WorkIcon from "@/ui/icons/Work"
import ProjectIcon from "@/ui/icons/Project"

interface Props {
  onRedirect: (section: WebsiteSection) => void
}

const PageRedirects = ({ onRedirect }: Props) => {
  const { t } = useTranslations("home")
  return (
    <div className="flex flex-row items-center justify-between w-full h-full overflow-x-hidden">
      <SectionShortcut
        label={t("redirects.experience")}
        onClick={() => {
          onRedirect(WebsiteSection.EXPERIENCE)
        }}
        icon={<ExperienceIcon />}
      />
      <SectionShortcut
        label={t("redirects.work")}
        onClick={() => {
          onRedirect(WebsiteSection.WORK)
        }}
        icon={<WorkIcon />}
      />
      <SectionShortcut
        label={t("redirects.projects")}
        onClick={() => {
          onRedirect(WebsiteSection.PROJECTS)
        }}
        icon={<ProjectIcon />}
      />
    </div>
  )
}

export default PageRedirects
