import Typography from "@/ui/atoms/typography"
import { ProjectColor } from "@/data/projectColors"

interface Props {
  title: string
  description: string
  color?: ProjectColor
}

const EmployeeDetailsTask = ({
  title,
  description,
  color = ProjectColor.ANUBIDIGITAL,
}: Props) => {
  const dotColor =
    color === ProjectColor.ANUBIDIGITAL
      ? "bg-anubidigital"
      : "bg-pienissimo"
  const titleColor =
    color === ProjectColor.ANUBIDIGITAL ? "ANUBIDIGITAL" : "PIENISSIMO"
  const descriptionColor =
    color === ProjectColor.ANUBIDIGITAL ? "WHITE" : "BLACK"
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
