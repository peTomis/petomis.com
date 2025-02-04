import { TypographyColor } from "@/ui/atoms/typography_"
import WorkExperienceTask from "@/ui/molecules/work-experience-task"
import { ActivityColorDetailAccent, ActivityColorVariant } from "@/utils"

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
    <div
      className={`flex items-center flex-1 w-full px-8 py-16 mx-auto ${ActivityColorDetailAccent[variant]} justify center xl:px-16`}
    >
      <div className="relative flex flex-col justify-end w-full max-w-[900px] mx-auto space-y-4">
        {tasks.map((task, index) => (
          <WorkExperienceTask
            key={index}
            title={task.title}
            description={task.description}
            variant={variant}
          />
        ))}
      </div>
    </div>
  )
}

export default WorkExperienceTasks
