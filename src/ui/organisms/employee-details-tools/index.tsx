import { CarouselElementColor } from "@/ui/atoms/carousel-element-text"
import ExperienceCardContainer from "@/ui/atoms/experience-card-container"
import ExperienceCard from "@/ui/molecules/experience-card"

interface Props {
  tools: {
    name: string
    icon: React.ReactNode
    url: string
  }[]
  color?: CarouselElementColor
}

const WorkExperienceTools = ({
  tools,
  color = CarouselElementColor.ANUBIDIGITAL,
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
              onClick={() => window.open(tool.url)}
              color={color}
            />
          ))}
        </ExperienceCardContainer>
      </div>
    </div>
  )
}

export default WorkExperienceTools
