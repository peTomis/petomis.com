import CarouselElementImage from "@/ui/atoms/carousel-element-image"
import CarouselElementText, {
  CarouselElementColor,
} from "@/ui/atoms/carousel-element-text"
import CarouselElementNote from "@/ui/atoms/carousel-element-note"
import { useState } from "react"

interface Props {
  description: string
  image: React.ReactNode
  name: string
  title: React.ReactNode
  selected?: boolean
  color?: CarouselElementColor
  onClick?: () => void
}

const CarouselElement = ({
  description,
  image,
  title,
  name,
  color,
  selected,
  onClick,
}: Props) => {
  const [isChildHovered, setIsChildHovered] = useState(false)

  if (!selected) return <></>

  return (
    <div
      className="relative cursor-pointer text-white flex flex-col h-[320px] w-[320px]"
      onClick={onClick}
      onMouseEnter={() => setIsChildHovered(true)}
      onMouseLeave={() => setIsChildHovered(false)}
    >
      <CarouselElementImage hover={isChildHovered} image={image} />
      <CarouselElementText
        name={name}
        title={title}
        description={description}
        color={color}
      />
      <CarouselElementNote color={color} />
    </div>
  )
}

export default CarouselElement
