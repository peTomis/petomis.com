import Typography from "@/ui/atoms/typograph"
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
    <div className="flex flex-col items-center justify-center flex-1 px-8 py-16 w-full space-y-8 xl:py-0  xl:px-16 max-w-[900px]  mx-auto">
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
