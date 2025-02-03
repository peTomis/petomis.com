import {
  ActivityColorText,
  ActivityColorTitleDots,
  ActivityColorTitleText,
  ActivityColorVariant,
} from "@/utils"
import Typography from "../../atoms/Typography"

interface Props {
  title: string
  description: string
  variant?: ActivityColorVariant
}

const WorkExperienceTask = ({
  title,
  description,
  variant = ActivityColorVariant.MOBILE,
}: Props) => {
  return (
    <div>
      <div className="flex flex-row items-center space-x-4">
        <div
          className={`flex-none w-[12px] h-[12px] rounded-full ${ActivityColorTitleDots[variant]}`}
        />
        <div>
          <Typography
            size="h6"
            xl="h5"
            color={ActivityColorTitleText[variant]}
            text={title}
            bold
          />
        </div>
      </div>
      <div className="mx-7">
        <Typography
          text={description}
          color={ActivityColorText[variant]}
          light
        />
      </div>
    </div>
  )
}

export default WorkExperienceTask
