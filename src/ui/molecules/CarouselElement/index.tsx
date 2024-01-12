import Image, { StaticImageData } from "next/image"
import CarouselElementImage from "@/ui/atoms/CarouselElementImage"
import CarouselElementText, {
  CarouselElementTextColor,
} from "@/ui/atoms/CarouselElementText"

interface Props {
  description: string
  src: StaticImageData
  title: string
  selected?: boolean
  color?: CarouselElementTextColor
}

const CarouselElement = ({
  description,
  src,
  title,
  selected,
  color,
}: Props) => {
  return (
    <div className="relative w-[90vw] flex flex-col h-[400px] sm:w-[300px] sm:h-[400px] lg:w-[600px] lg:h-[400px] xxl:w-[800px] xxl:h-[500px]">
      <CarouselElementImage src={src} />
      <CarouselElementText
        title={title}
        description={description}
        selected={selected}
        color={color}
      />
    </div>
  )
}

export default CarouselElement
