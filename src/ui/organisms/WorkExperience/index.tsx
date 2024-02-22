import { TypographyColor } from "@/ui/atoms/Typography"
import WorkExperienceDescription from "../WorkExperienceDescription"
import WorkExperienceTasks, {
  WorkExperienceTaskItem,
} from "../WorkExperienceTasks"
import WorkExperienceTools from "../WorkExperienceTools"

interface Props {
  title: React.ReactNode
  tasks: WorkExperienceTaskItem[]
  sentences: string[]
  tools: WorkExperienceTools[]
  color: TypographyColor
  mainColor?: TypographyColor
}

const WorkExperience = ({
  title,
  tasks,
  sentences,
  tools,
  color,
  mainColor,
}: Props) => {
  return (
    <div className="relative flex flex-col w-full cursor-default xl:items-center xl:justify-center xl:flex-row">
      <div
        className={`flex flex-col flex-1 bg-${mainColor} bg-opacity-20 items-start xl:w-full xl:h-full justify-between xl:py-16 xl:space-y-16 `}
      >
        <div className="flex items-center justify-center flex-1 w-full h-full">
          {title}
        </div>
        <WorkExperienceDescription sentences={sentences} color={color} />
      </div>

      <div className="relative flex flex-col items-start justify-between flex-1 w-full h-full pb-32 lg:pb-0">
        <WorkExperienceTasks tasks={tasks} color={color} />
        <WorkExperienceTools
          color={color}
          mainColor={mainColor}
          tools={tools}
        />
      </div>
    </div>
  )
}

export default WorkExperience
