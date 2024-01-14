import { StaticImageData } from "next/image"
import CarouselElementImage from "@/ui/atoms/CarouselElementImage"
import CarouselElementText, {
  CarouselElementColor,
} from "@/ui/atoms/CarouselElementText"
import CarouselElementNote from "@/ui/atoms/CarouselElementNote"

interface Props {
  description: string
  src: StaticImageData
  title: string
  selected?: boolean
  color?: CarouselElementColor
  onClick?: () => void
}

const CarouselElement = ({
  description,
  src,
  title,
  selected,
  color,
  onClick,
}: Props) => {
  return (
    <div
      className="relative cursor-pointer text-defaultTextColor-dark w-[90vw] flex flex-col h-[400px] sm:w-[300px] sm:h-[400px] lg:w-[600px] lg:h-[400px] xxl:w-[800px] xxl:h-[500px]"
      onClick={onClick}
    >
      <CarouselElementImage src={src} />
      <CarouselElementText
        title={title}
        description={description}
        selected={selected}
        color={color}
      />
      {selected && <CarouselElementNote />}
    </div>
  )
}

export default CarouselElement
