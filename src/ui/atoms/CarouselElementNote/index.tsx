import { useTranslations } from "@/hooks/useTranslations"
import Image, { StaticImageData } from "next/image"

const CarouselElementNote = () => {
  const { t } = useTranslations("home")
  return (
    <div className="absolute flex items-center justify-center w-full bottom-5">
      <div>{t("projects.elementNote")}</div>
    </div>
  )
}

export default CarouselElementNote
