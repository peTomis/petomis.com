// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Icons
import PointerClick from "@/ui/icons/pointer-click"
import Touch from "@/ui/icons/touch_"

const CarouselElementNote = () => {
  const { t } = useTranslations("home")
  return (
    <div className="absolute flex flex-col items-center justify-center w-full text-black bottom-2">
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
