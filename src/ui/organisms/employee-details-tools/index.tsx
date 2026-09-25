import { ProjectColor } from "@/data/projectColors"
import ExperienceCardContainer from "@/ui/atoms/experience-card-container"
import ExperienceCard from "@/ui/molecules/experience-card"
import type { ProjectTool } from "@/hooks/useProjects"

interface Props {
  tools: ProjectTool[]
  color?: ProjectColor
}

const WorkExperienceTools = ({
  tools,
  color = ProjectColor.ANUBIDIGITAL,
}: Props) => {
  return (
    <div className="flex items-center justify-center flex-1 w-full p-8 space-y-4 bg-black bg-opacity-5">
      <div>
        <ExperienceCardContainer>
          {tools.map((tool, key) => (
            <ExperienceCard
              key={key}
              name={tool.name}
              icon={tool.icon}
              url={tool.url}
              color={color}
            />
          ))}
        </ExperienceCardContainer>
      </div>
    </div>
  )
}

export default WorkExperienceTools
