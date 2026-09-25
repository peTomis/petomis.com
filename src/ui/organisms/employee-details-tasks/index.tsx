import EmployeeDetailsTask from "@/ui/molecules/employee-details-task"
import { ProjectColor } from "@/data/projectColors"
import type { ProjectTask } from "@/hooks/useProjects"

interface Props {
  tasks: ProjectTask[]
  color?: ProjectColor
}

const EmployeeDetailsTasks = ({
  tasks,
  color = ProjectColor.ANUBIDIGITAL,
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
