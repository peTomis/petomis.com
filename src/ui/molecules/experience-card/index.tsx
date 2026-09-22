import Typography from "@/ui/atoms/typography"
import { CarouselElementColor } from "@/ui/atoms/carousel-element-text"

interface Props {
  name?: string
  icon: React.ReactNode
  url?: string
  color?: CarouselElementColor
}

const ExperienceCard = ({
  name,
  icon,
  url,
  color = CarouselElementColor.ANUBIDIGITAL,
}: Props) => {
  const id = `experience-card-${name}`
  const titleColor =
    color === CarouselElementColor.ANUBIDIGITAL ? "WHITE" : "BLACK"

  const black = color === CarouselElementColor.ANUBIDIGITAL ? false : true

  const className = `relative flex flex-col py-4 w-full ${
    name ? " shadow-md bg-black bg-opacity-5" : ""
  } select-none lg:h-[120px] lg:w-[120px]`

  const content = (
    <>
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
    </>
  )

  if (url) {
    return (
      <a
        id={id}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className={className}
      >
        {content}
      </a>
    )
  }

  return (
    <div id={id} className={className}>
      {content}
    </div>
  )
}

export default ExperienceCard
