import { StaticImageData } from "next/image"
import CarouselElementImage from "@/ui/atoms/CarouselElementImage"
import CarouselElementText, {
  CarouselElementColor,
} from "@/ui/atoms/CarouselElementText"
import CarouselElementNote from "@/ui/atoms/CarouselElementNote"

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
      className="relative cursor-pointer text-defaultTextColor-dark w-[90vw] max-w-[400px] flex flex-col h-[400px] sm:w-full sm:max-w-[600px] xl:w-[800px] lg:max-w-[800px] lg:h-[500px]"
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
