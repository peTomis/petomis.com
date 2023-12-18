import ExperienceIcon from "@/ui/icons/Experience"
import RedirectRow from "./components/RedirectRow"
import WorkIcon from "@/ui/icons/Work"
import ProjectIcon from "@/ui/icons/Project"

const PageRedirects = () => {
  return (
    <div className="flex flex-col ml-8 space-y-8">
      <RedirectRow
        label="Experience"
        onClick={() => {}}
        icon={<ExperienceIcon />}
      />
      <RedirectRow label="Work" onClick={() => {}} icon={<WorkIcon />} />
      <RedirectRow label="Projects" onClick={() => {}} icon={<ProjectIcon />} />
    </div>
  )
}

export default PageRedirects
