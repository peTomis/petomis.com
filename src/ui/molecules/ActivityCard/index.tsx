import ExperienceDecor from "@/ui/atoms/ExperienceDecor"
import style from "./style.module.css"

interface Props {
  children: React.ReactNode
  bgColor?: "bg-white" | "bg-primary-400"
}

const ActivityCard = ({ bgColor, children }: Props) => {
  return (
    <div className={`${style.base} ${!!bgColor ? bgColor : "bg-primary-200"}`}>
      <div className="flex flex-none">
        <ExperienceDecor />
      </div>
      <div className="flex flex-1">{children}</div>
    </div>
  )
}

export default ActivityCard
