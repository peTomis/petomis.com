import { useTranslations } from "@/hooks/useTranslations"
import PointerClickIcon from "@/ui/icons/PointerClick"
import Touch from "@/ui/icons/Touch"
import Image, { StaticImageData } from "next/image"

const CarouselElementNote = () => {
  const { t } = useTranslations("home")
  return (
    <div className="absolute flex flex-col items-center justify-center w-full text-black bottom-5">
      <div className="w-8 h-8 md:hidden">
        <Touch />
      </div>
      <div className="hidden w-8 h-8 md:inline">
        <PointerClickIcon />
      </div>
      <div>{t("projects.elementNote")}</div>
    </div>
  )
}

export default CarouselElementNote
