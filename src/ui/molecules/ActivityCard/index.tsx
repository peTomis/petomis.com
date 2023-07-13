import ExperienceDecor from "@/ui/atoms/ExperienceDecor"

interface Props {
  children: React.ReactNode
  bgColor?: string
}

const ActivityCard = ({ bgColor, children }: Props) => {
  return (
    <div
      className={`relative flex py-4 px-6 md:px-16 space-x-4 lg:space-x-8 flex-row w-[300px] d:w-[350px] h-[200px] sm:w-[350px] md:w-[500px] md:h-[300px] lg:h-[300px] rounded-lg overflow-hidden ${
        !!bgColor ? bgColor : "bg-primary-200"
      }`}
    >
      <div className="flex flex-none">
        <ExperienceDecor />
      </div>
      <div className="flex flex-1">{children}</div>
    </div>
  )
}

export default ActivityCard
