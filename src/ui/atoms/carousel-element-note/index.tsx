// Hooks
// Icons
import { CarouselElementColor } from "../carousel-element-text"
import GitHub from "@/ui/icons/social/github"

interface Props {
  color?: CarouselElementColor
  collaborators: { name: string; url: string }[]
}

const CarouselElementNote = ({
  color = CarouselElementColor.BLUE,
  collaborators,
}: Props) => {
  const getTextColor = (): string => {
    switch (color) {
      case CarouselElementColor.BLUE:
      case CarouselElementColor.ANUBIDIGITAL:
        return "text-white fill-white"
      default:
        return "text-black"
    }
  }

  return collaborators.length > 0 ? (
    <div
      className={`absolute z-10 font-light font-montserrat space-x-2 flex flex-row items-center pl-2 justify-center w-full ${getTextColor()} bottom-4`}
    >
      <div>Collaborator:</div>

      <div className="flex flex-row">
        {collaborators.map((collaborator, index) => (
          <a
            key={index}
            href={collaborator.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center"
          >
            <div className="w-6 h-6">
              <GitHub />
            </div>
            <div> {collaborator.name}</div>
          </a>
        ))}
      </div>
    </div>
  ) : null
}

export default CarouselElementNote
