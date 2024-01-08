import ExperienceIcon from "@/ui/icons/Experience"
import WorkIcon from "@/ui/icons/Work"
import ProjectIcon from "@/ui/icons/Project"
import { WebsiteSection } from "@/utils/websiteSections"
import SectionShortcut from "@/ui/molecules/SectionShortcut"

interface Props {
  onRedirect: (section: WebsiteSection) => void
}

const PageRedirects = ({ onRedirect }: Props) => {
  return (
    <div className="flex flex-row items-center justify-between w-full h-full overflow-x-hidden font-light">
      <SectionShortcut
        label="Experience"
        onClick={() => {
          onRedirect(WebsiteSection.EXPERIENCE)
        }}
        icon={<ExperienceIcon />}
      />
      <SectionShortcut
        label="Work"
        onClick={() => {
          onRedirect(WebsiteSection.WORK)
        }}
        icon={<WorkIcon />}
      />
      <SectionShortcut
        label="Projects"
        onClick={() => {
          onRedirect(WebsiteSection.PROJECTS)
        }}
        icon={<ProjectIcon />}
      />
    </div>
  )
}

export default PageRedirects
