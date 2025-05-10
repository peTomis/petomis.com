import Typography from "@/ui/atoms/typography"
import { CarouselElementColor } from "@/ui/atoms/carousel-element-text"

interface Props {
  title: string
  description: string
  color?: CarouselElementColor
}

const EmployeeDetailsTask = ({
  title,
  description,
  color = CarouselElementColor.ANUBIDIGITAL,
}: Props) => {
  const dotColor =
    color === CarouselElementColor.ANUBIDIGITAL
      ? "bg-anubidigital"
      : "bg-pienissimo"
  const titleColor =
    color === CarouselElementColor.ANUBIDIGITAL ? "ANUBIDIGITAL" : "PIENISSIMO"
  const descriptionColor =
    color === CarouselElementColor.ANUBIDIGITAL ? "WHITE" : "BLACK"
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row items-center space-x-4">
        <div
          className={`flex-none w-[12px] h-[12px] rounded-full ${dotColor}`}
        />
        <div>
          <Typography
            size="base"
            xl="h5"
            color={titleColor}
            text={title}
            bold
          />
        </div>
      </div>
      <div className="mx-7">
        <Typography text={description} color={descriptionColor} light />
      </div>
    </div>
  )
}

export default EmployeeDetailsTask
