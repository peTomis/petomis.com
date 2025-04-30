import { useTranslations } from "@/hooks/useTranslations"
import { useState } from "react"

export enum CarouselElementEmployeeTag {
  RED = "red",
  WHITE = "white",
}

interface Props {
  children: JSX.Element
  onMouseEnter: () => void
  color: string
  swipingDirection?: "left" | "right" | undefined
  employeeTag?: CarouselElementEmployeeTag
}

const CarouselElementSkewed = ({
  employeeTag,
  children,
  onMouseEnter,
  color,
  swipingDirection,
}: Props) => {
  const [isChildHovered, setIsChildHovered] = useState(false)

  return (
    <div className={`flex relative`} onMouseEnter={onMouseEnter}>
      <div className={`flex overflow-visible z-10`} onMouseEnter={onMouseEnter}>
        <div
          className={`absolute w-full h-full ${
            color ?? "bg-primary"
          } -z-20 rotate-[4deg] ${
            isChildHovered ? "lg:scale-110" : ""
          } transform ${swipingDirection === undefined && " translate-x-0"}  ${
            swipingDirection === "left" && " translate-x-full"
          } ${
            swipingDirection === "right" && "-translate-x-full"
          } transition-transform duration-500 ease-in-out`}
        >
          {employeeTag && <EmployeeTag type={employeeTag} />}
        </div>
        <div
          onMouseEnter={() => setIsChildHovered(true)}
          onMouseLeave={() => setIsChildHovered(false)}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

const EmployeeTag = ({ type }: { type: CarouselElementEmployeeTag }) => {
  const { t } = useTranslations("jobs")

  const bg =
    type === CarouselElementEmployeeTag.RED ? "bg-pienissimo" : "bg-white"
  const text =
    type === CarouselElementEmployeeTag.RED ? "text-black" : "text-anubidigital"
  const border =
    type === CarouselElementEmployeeTag.RED
      ? "border-t-pienissimo"
      : "border-t-white"
  return (
    <div className="absolute z-20 flex flex-col -top-2 right-2 text-small">
      <div className={`relative px-1 pt-12 pb-4  ${text} ${bg}`}>
        <div
          className={`absolute -bottom-[0.3px] left-[1px] h-[2px] w-[62px] ${bg}`}
        ></div>
        {t("projects.employeeTag")}
      </div>
      <div
        className={`w-0 h-0 border-l-[32px] border-r-[32px] border-t-[12px] border-l-transparent border-r-transparent ${border}`}
      />
    </div>
  )
}

export default CarouselElementSkewed
