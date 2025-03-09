import { ActivityColorVariant } from "@/utils"
import WorkExperienceDescription from "../work-experience-description"
import WorkExperienceTasks, {
  WorkExperienceTaskItem,
} from "../work-experience-tasks"
import WorkExperienceTools from "../work-experience-tools"

interface Props {
  tasks: WorkExperienceTaskItem[]
  sentences: string[]
  tools: WorkExperienceTools[]
  variant: ActivityColorVariant
}

const WorkExperience = ({
  tasks,
  sentences,
  tools,
  variant = ActivityColorVariant.MOBILE,
}: Props) => {
  return (
    <div className="flex flex-col p-8 space-y-8 md:mb-8 md:p-0">
      <WorkExperienceDescription sentences={sentences} variant={variant} />
      <WorkExperienceTasks tasks={tasks} variant={variant} />
      <WorkExperienceTools variant={variant} tools={tools} />
    </div>
  )
}

export default WorkExperience
