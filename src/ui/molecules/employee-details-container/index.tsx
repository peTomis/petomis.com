import { CarouselElementColor } from "@/ui/atoms/carousel-element-text"
import EmployeeDetailsHint from "../employee-details-hint"

enum EmployeeDetailsContainerBg {
  "bg-anubidigital-dark" = `bg-anubidigital-dark  text-primary-50`,
  "bg-red-300" = `bg-white text-defaultTextColor`,
}

interface Props {
  color?: CarouselElementColor.ANUBIDIGITAL | CarouselElementColor.PIENISSIMO
  children: React.ReactNode
  onClose: () => void
}

const EmployeeDetailsContainer = ({
  children,
  onClose,
  color = CarouselElementColor.ANUBIDIGITAL,
}: Props) => {
  return (
    <div
      id="activity-card-expanded-container"
      className={`relative flex w-full m-2 xl:m-4 overflow-x-hidden overflow-y-auto transition  animate-scaleUp ${EmployeeDetailsContainerBg[color]}`}
      onClick={(e) => {
        e.stopPropagation()
      }}
      style={{
        height: "-webkit-fill-available",
      }}
    >
      <div
        id="activity-card-expanded-container"
        className={`flex w-full overflow-x-hidden overflow-y-auto transition`}
        onClick={(e) => {
          e.stopPropagation()
        }}
        style={{
          height: "-webkit-fill-available",
        }}
      >
        <div
          className="absolute top-0 right-0 z-30 cursor-pointer"
          onClick={onClose}
        >
          <EmployeeDetailsHint color={color} />
        </div>
        {children}
      </div>
    </div>
  )
}

export default EmployeeDetailsContainer
