import { useTranslations } from "@/hooks/useTranslations"
import {
  ProjectColor,
  type EmployeeColor,
} from "@/data/projectColors"
import Typography, { type TypographyColor } from "@/ui/atoms/typography"
import CloseButton from "@/ui/icons/close-button"

const employeeDetailsFillColor: Record<EmployeeColor, string> = {
  "bg-anubidigital-dark": "fill-white",
  "bg-red-300": "fill-black",
}

const employeeDetailsTextColor: Record<EmployeeColor, TypographyColor> = {
  "bg-anubidigital-dark": "WHITE",
  "bg-red-300": "BLACK",
}

const employeeDetailsBgColor: Record<EmployeeColor, string> = {
  "bg-anubidigital-dark": "bg-anubidigital",
  "bg-red-300": "bg-red-300",
}

interface Props {
  color?: EmployeeColor
}

const EmployeeDetailsHint = ({
  color = ProjectColor.ANUBIDIGITAL,
}: Props) => {
  const { t } = useTranslations("home")

  return (
    <div
      className={`absolute flex flex-row justify-center items-center space-x-2 top-0 right-0 z-10 py-2  w-[120px] backdrop-blur-sm rounded-bl-xl  ${employeeDetailsBgColor[color]} text-center`}
    >
      <div className={`w-6 h-6 ${employeeDetailsFillColor[color]}`}>
        <CloseButton />
      </div>
      <Typography
        text={t("work.desktopClose")}
        color={employeeDetailsTextColor[color]}
        font={"montserrat"}
      />
    </div>
  )
}

export default EmployeeDetailsHint
