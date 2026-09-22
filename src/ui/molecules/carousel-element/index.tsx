import CarouselElementImage from "@/ui/atoms/carousel-element-image"
import CarouselElementText, {
  CarouselElementColor,
} from "@/ui/atoms/carousel-element-text"
import CarouselElementNote from "@/ui/atoms/carousel-element-note"
import { useState } from "react"
import { CarouselElementEmployeeTag } from "../carousel-element-skewed"

interface Props {
  description: string
  image: React.ReactNode
  name: string
  title: React.ReactNode
  selected?: boolean
  color?: CarouselElementColor
  website: string
  onOpenDetails?: () => void
  employeeTag?: CarouselElementEmployeeTag
  collaborators: { name: string; url: string }[]
}

const CarouselElement = ({
  description,
  image,
  title,
  name,
  color,
  selected,
  website,
  onOpenDetails,
  employeeTag,
  collaborators,
}: Props) => {
  const [isChildHovered, setIsChildHovered] = useState(false)

  if (!selected) return <></>

  return (
    <div
      className="relative text-white flex flex-col h-[320px] w-[320px]"
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
      {employeeTag ? (
        <button
          type="button"
          onClick={onOpenDetails}
          aria-label={name}
          className="absolute inset-0"
        />
      ) : (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="absolute inset-0"
        />
      )}
      <CarouselElementNote color={color} collaborators={collaborators} />
    </div>
  )
}

export default CarouselElement
