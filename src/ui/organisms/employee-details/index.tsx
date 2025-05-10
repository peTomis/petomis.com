// Utils
import { Project } from "@/hooks/useProjects"
import EmployeeDetailsContainer from "@/ui/molecules/employee-details-container"
import EmployeeDetailsContent from "@/ui/molecules/employee-details-content"
import useLockScroll from "@/utils/lockScroll"

// Molecules

interface Props {
  experience: Project
  onClose: () => void
}

const EmployeeDetails = ({ onClose, experience }: Props) => {
  useLockScroll()

  return (
    <div
      id="activity-card-expanded-background"
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-center w-screen h-[94vh] px-4 bg-black bg-opacity-0 cursor-pointer"
      onClick={onClose}
    >
      <EmployeeDetailsContainer
        onClose={onClose}
        color={experience.employeeColor}
      >
        <EmployeeDetailsContent experience={experience} />
      </EmployeeDetailsContainer>
    </div>
  )
}

export default EmployeeDetails
