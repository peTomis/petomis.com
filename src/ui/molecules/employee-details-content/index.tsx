import {
  ProjectColor,
  type EmployeeColor,
} from "@/data/projectColors"
import EmployeeDetailsText from "../employee-details-text"
import EmployeeDetailsTasks from "@/ui/organisms/employee-details-tasks"
import EmployeeDetailsTools from "@/ui/organisms/employee-details-tools"
import { Project } from "@/hooks/useProjects"

interface Props {
  experience: Project
}

const employeeDetailsBgColor: Record<EmployeeColor, string> = {
  "bg-anubidigital-dark": "bg-black",
  "bg-red-300": "bg-red-500",
}

const EmployeeDetailsContent = ({ experience }: Props) => {
  const color = experience.employeeColor ?? ProjectColor.ANUBIDIGITAL
  return (
    <div className="relative grid w-full grid-cols-1 cursor-default xl:grid-cols-2">
      <div
        className={`flex flex-col ${employeeDetailsBgColor[color]} bg-opacity-20 pt-32 w-full xl:h-full justify-between xl:py-16 xl:space-y-16 `}
      >
        <div className="flex items-center justify-center flex-1 w-full h-full">
          <a
            href={experience.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={experience.name}
            className="scale-[1.6]"
          >
            {experience.title}
          </a>
        </div>
        <EmployeeDetailsText sentences={experience.sentences} color={color} />
      </div>

      <div className="relative flex flex-col items-start justify-between w-full h-full">
        <EmployeeDetailsTasks tasks={experience.tasks ?? []} color={color} />
        <EmployeeDetailsTools color={color} tools={experience.tools ?? []} />
      </div>
    </div>
  )
}

export default EmployeeDetailsContent
