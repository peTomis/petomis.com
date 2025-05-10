import { useTranslations } from "@/hooks/useTranslations"
import { CarouselElementColor } from "@/ui/atoms/carousel-element-text"
import Typography from "@/ui/atoms/typography"
import CloseButton from "@/ui/icons/close-button"

export enum EmployeeDetailsFillColor {
  "bg-anubidigital-dark" = "fill-white",
  "bg-red-300" = "fill-black",
}

export enum EmployeeDetailsTextColor {
  "bg-anubidigital-dark" = "WHITE",
  "bg-red-300" = "BLACK",
}

enum EmployeeDetailsBgColor {
  "bg-anubidigital-dark" = "bg-anubidigital",
  "bg-red-300" = "bg-red-300",
}

interface Props {
  color?: CarouselElementColor.ANUBIDIGITAL | CarouselElementColor.PIENISSIMO
}

const EmployeeDetailsHint = ({
  color = CarouselElementColor.ANUBIDIGITAL,
}: Props) => {
  const { t } = useTranslations("home")

  return (
    <div
      className={`absolute flex flex-row justify-center items-center space-x-2 top-0 right-0 z-10 py-2  w-[120px] backdrop-blur-sm rounded-bl-xl  ${EmployeeDetailsBgColor[color]} text-center`}
    >
      <div className={`w-6 h-6 ${EmployeeDetailsFillColor[color]}`}>
        <CloseButton />
      </div>
      <Typography
        text={t("work.desktopClose")}
        color={EmployeeDetailsTextColor[color]}
        font={"montserrat"}
      />
    </div>
  )
}

export default EmployeeDetailsHint
