// Hooks
import { useTranslations } from "@/hooks/useTranslations"

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
  const { t } = useTranslations("home")

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
      className={`absolute font-light font-montserrat space-x-2 flex flex-row items-center pl-2 justify-center w-full ${getTextColor()} bottom-4`}
    >
      <div>Collaborator:</div>

      <div className="flex flex-row">
        {collaborators.map((collaborator, index) => (
          <div
            key={index}
            onClick={() => {
              window.open(collaborator.url, "_blank")
            }}
            className="flex flex-row items-center"
          >
            <div className="w-6 h-6">
              <GitHub />
            </div>
            <div> {collaborator.name}</div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default CarouselElementNote
