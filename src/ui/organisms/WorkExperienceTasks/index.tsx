import { TypographyColor } from "@/ui/atoms/Typography"
import WorkExperienceTask from "@/ui/molecules/WorkExperienceTask"

export interface WorkExperienceTaskItem {
  title: string
  description: string
  titleColor: TypographyColor
  textColor: TypographyColor
}

interface Props {
  color: TypographyColor
  tasks: WorkExperienceTaskItem[]
}

const WorkExperienceTasks = ({ tasks, color }: Props) => {
  return (
    <div className="flex items-center flex-1 w-full px-8 py-16 mx-auto justify center xl:px-16">
      <div className="relative flex flex-col justify-end w-full max-w-[900px] mx-auto space-y-4">
        {tasks.map((task, index) => (
          <WorkExperienceTask
            key={index}
            title={task.title}
            description={task.description}
            titleColor={task.titleColor}
            textColor={task.textColor}
          />
        ))}
      </div>
    </div>
  )
}

export default WorkExperienceTasks
