import { useTranslations } from "@/modules/translations/use"
import Image, { StaticImageData } from "next/image"

const CarouselElementNote = () => {
  const { t } = useTranslations("home")
  return (
    <div className="absolute flex items-center justify-center w-full bottom-5">
      <div>click for details</div>
    </div>
  )
}

export default CarouselElementNote
