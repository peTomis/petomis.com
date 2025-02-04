import { StaticImageData } from "next/image"
import CarouselElementImage from "@/ui/atoms/carousel-element-image"
import CarouselElementText, {
  CarouselElementColor,
} from "@/ui/atoms/carousel-element-text"
import CarouselElementNote from "@/ui/atoms/carousel-element-note"

interface Props {
  description: string
  src: StaticImageData
  name: string
  title: React.ReactNode
  selected?: boolean
  color?: CarouselElementColor
  onClick?: () => void
}

const CarouselElement = ({
  description,
  src,
  title,
  name,
  selected,
  color,
  onClick,
}: Props) => {
  return (
    <div
      className="relative cursor-pointer text-white flex flex-col h-[320px] w-[320px] md:h-[400px] md:w-[400px] lg:w-[500px] lg:h-[500px]"
      onClick={selected ? onClick : undefined}
    >
      {selected && <CarouselElementImage src={src} />}
      <CarouselElementText
        name={name}
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
