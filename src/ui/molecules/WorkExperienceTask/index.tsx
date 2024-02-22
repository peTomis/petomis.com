import Typography, { TypographyColor } from "../../atoms/Typography"

interface Props {
  title: string
  description: string
  titleColor?: TypographyColor
  textColor?: TypographyColor
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
          className={`flex-none w-[12px] h-[12px] rounded-full bg-primary-100`}
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
