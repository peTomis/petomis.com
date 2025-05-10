import EmployeeDetailsTask from "@/ui/molecules/employee-details-task"
import { CarouselElementColor } from "@/ui/atoms/carousel-element-text"

export interface WorkExperienceTaskItem {
  title: string
  description: string
}

interface Props {
  tasks: any[]
  color?: CarouselElementColor
}

const EmployeeDetailsTasks = ({
  tasks,
  color = CarouselElementColor.ANUBIDIGITAL,
}: Props) => {
  return (
    <div className="relative flex flex-col justify-center flex-1 w-full max-w-[900px] p-8 mx-auto space-y-4">
      {tasks.map((task, index) => (
        <EmployeeDetailsTask
          key={index}
          title={task.title}
          description={task.description}
          color={color}
        />
      ))}
    </div>
  )
}

export default EmployeeDetailsTasks
