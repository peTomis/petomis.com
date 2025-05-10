import Typography from "@/ui/atoms/typography"
import { CarouselElementColor } from "@/ui/atoms/carousel-element-text"

interface Props {
  name?: string
  icon: React.ReactNode
  onClick?: () => void
  color?: CarouselElementColor
}

const ExperienceCard = ({
  name,
  icon,
  onClick,
  color = CarouselElementColor.ANUBIDIGITAL,
}: Props) => {
  const id = `experience-card-${name}`
  const titleColor =
    color === CarouselElementColor.ANUBIDIGITAL ? "WHITE" : "BLACK"

  const black = color === CarouselElementColor.ANUBIDIGITAL ? false : true

  return (
    <div
      id={id}
      className={`relative flex flex-col py-4 w-full ${
        name ? " shadow-md bg-black bg-opacity-5" : ""
      } ${
        onClick ? "cursor-pointer" : ""
      } select-none lg:h-[120px] lg:w-[120px]`}
      onClick={onClick}
    >
      {name && (
        <div className="flex items-center justify-center w-full">
          <Typography text={name} light color={titleColor} />
        </div>
      )}
      <div
        className={`flex items-center justify-center ${
          black ? "fill-black" : "fill-white"
        } w-full h-[80px] md:h-[90px] `}
      >
        <div>{icon}</div>
      </div>
    </div>
  )
}

export default ExperienceCard
