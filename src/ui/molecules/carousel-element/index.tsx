import CarouselElementImage from "@/ui/atoms/carousel-element-image"
import CarouselElementText, {
  CarouselElementColor,
} from "@/ui/atoms/carousel-element-text"
import CarouselElementNote from "@/ui/atoms/carousel-element-note"

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
  if (!selected) return <></>

  return (
    <div
      className="relative cursor-pointer text-white flex flex-col h-[320px] w-[320px]"
      onClick={onClick}
    >
      <CarouselElementImage image={image} />
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
