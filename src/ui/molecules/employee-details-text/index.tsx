import { CarouselElementColor } from "@/ui/atoms/carousel-element-text"
import Typography from "@/ui/atoms/typography"

interface Props {
  sentences: string[]
  color?: CarouselElementColor.ANUBIDIGITAL | CarouselElementColor.PIENISSIMO
}

const EmployeeDetailsText = ({
  sentences,
  color = CarouselElementColor.ANUBIDIGITAL,
}: Props) => {
  const textColor =
    color === CarouselElementColor.ANUBIDIGITAL ? "WHITE" : "BLACK"
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-8 py-16 w-full space-y-8 xl:py-0  xl:px-16 max-w-[900px]  mx-auto">
      {sentences.map((sentence, index) => (
        <Typography
          key={index}
          text={sentence}
          color={textColor}
          size="base"
          md="h6"
        />
      ))}
    </div>
  )
}

export default EmployeeDetailsText
