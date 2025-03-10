// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Icons
import PointerClick from "@/ui/icons/pointer-click"
import Touch from "@/ui/icons/touch_"
import { TypographyColor } from "../typography"
import { CarouselElementColor } from "../carousel-element-text"

interface Props {
  color?: CarouselElementColor
}

const CarouselElementNote = ({ color = CarouselElementColor.BLUE }: Props) => {
  const { t } = useTranslations("home")

  const getTextColor = (): string => {
    switch (color) {
      case CarouselElementColor.BLUE:
        return "text-white fill-white"
      default:
        return "text-black"
    }
  }

  return (
    <div
      className={`absolute flex flex-row items-center justify-center w-full ${getTextColor()} bottom-2`}
    >
      <div className="w-8 h-8 md:hidden">
        <Touch />
      </div>
      <div className="hidden w-8 h-8 md:inline">
        <PointerClick />
      </div>
      <div>{t("projects.elementNote")}</div>
    </div>
  )
}

export default CarouselElementNote
