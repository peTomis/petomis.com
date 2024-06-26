import Typography, { TypographyColor } from "../../atoms/Typography"

interface Props {
  title: string
  description: string
  titleColor?: TypographyColor
  textColor?: TypographyColor
}

enum bgClass {
  black = "bg-black",
  white = "bg-white",
  defaultTextColor = "bg-default-text-color",
  "defaultTextColor-dark" = "bg-default-text-color-dark",
  "primary-50" = "bg-primary-50",
  "primary-100" = "bg-primary-100",
  "primary-300" = "bg-primary-300",
  "primary-400" = "bg-primary-400",
  "primary-500" = "bg-primary-500",
  anubidigital = "bg-anubidigital",
}

const WorkExperienceTask = ({
  title,
  description,
  titleColor = "primary-100",
  textColor = "white",
}: Props) => {
  return (
    <div>
      <div className="flex flex-row items-center space-x-4">
        <div
          className={`flex-none w-[12px] h-[12px] rounded-full ${bgClass[titleColor]}`}
        />
        <div>
          <Typography
            size="h6"
            xl="h5"
            color={titleColor}
            darkColor={titleColor}
            text={title}
            bold
          />
        </div>
      </div>
      <div className="mx-7">
        <Typography
          text={description}
          color={textColor}
          darkColor={textColor}
          light
        />
      </div>
    </div>
  )
}

export default WorkExperienceTask
