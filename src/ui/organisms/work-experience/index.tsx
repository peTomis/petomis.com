import { ActivityColorDetailBg, ActivityColorVariant } from "@/utils"
import WorkExperienceDescription from "../work-experience-description"
import WorkExperienceTasks, {
  WorkExperienceTaskItem,
} from "../work-experience-tasks"
import WorkExperienceTools from "../work-experience-tools"

interface Props {
  title: React.ReactNode
  tasks: WorkExperienceTaskItem[]
  sentences: string[]
  tools: WorkExperienceTools[]
  variant: ActivityColorVariant
}

const WorkExperience = ({
  title,
  tasks,
  sentences,
  tools,
  variant = ActivityColorVariant.MOBILE,
}: Props) => {
  return (
    <div className="relative flex flex-col w-full cursor-default xl:items-center xl:justify-center xl:flex-row">
      <div
        className={`flex flex-col flex-1 ${ActivityColorDetailBg[variant]} items-start xl:w-full xl:h-full justify-between xl:py-16 xl:space-y-16 `}
      >
        <div className="flex items-center justify-center flex-1 w-full h-full">
          {title}
        </div>
        <WorkExperienceDescription sentences={sentences} variant={variant} />
      </div>

      <div className="relative flex flex-col items-start justify-between flex-1 w-full h-full pb-32 lg:pb-0">
        <WorkExperienceTasks tasks={tasks} variant={variant} />
        <WorkExperienceTools variant={variant} tools={tools} />
      </div>
    </div>
  )
}

export default WorkExperience
