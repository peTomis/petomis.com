import Typography from "@/ui/atoms/typography"
import { ActivityColorText, ActivityColorVariant } from "@/utils"

interface Props {
  sentences: string[]
  variant?: ActivityColorVariant
}

const WorkExperienceDescription = ({
  sentences,
  variant = ActivityColorVariant.MOBILE,
}: Props) => {
  return (
    <div className="flex flex-col space-y-4">
      {sentences.map((sentence, index) => (
        <Typography
          key={index}
          text={sentence}
          color={ActivityColorText[variant]}
          size="h6"
        />
      ))}
    </div>
  )
}

export default WorkExperienceDescription
