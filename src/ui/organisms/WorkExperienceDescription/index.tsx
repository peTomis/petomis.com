import Typography, { TypographyColor } from "@/ui/atoms/Typography"

interface Props {
  sentences: string[]
  color?: TypographyColor
}

const WorkExperienceDescription = ({ sentences, color = "white" }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-8 py-16 w-full space-y-8 xl:py-0  xl:px-16 max-w-[900px]  mx-auto">
      {sentences.map((sentence, index) => (
        <Typography
          key={index}
          text={sentence}
          color={color}
          darkColor={color}
          size="h6"
        />
      ))}
    </div>
  )
}

export default WorkExperienceDescription
