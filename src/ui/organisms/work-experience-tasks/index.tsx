import WorkExperienceTask from "@/ui/molecules/work-experience-task"
import { ActivityColorVariant } from "@/utils"

export interface WorkExperienceTaskItem {
  title: string
  description: string
}

interface Props {
  variant?: ActivityColorVariant
  tasks: WorkExperienceTaskItem[]
}

const WorkExperienceTasks = ({
  tasks,
  variant = ActivityColorVariant.MOBILE,
}: Props) => {
  return (
    <div className="relative flex flex-col justify-end w-full p-8 mx-auto space-y-4 md:p-0">
      {tasks.map((task, index) => (
        <WorkExperienceTask
          key={index}
          title={task.title}
          description={task.description}
          variant={variant}
        />
      ))}
    </div>
  )
}

export default WorkExperienceTasks
