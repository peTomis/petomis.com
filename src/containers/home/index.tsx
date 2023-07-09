import ScaleEffect from "@/ui/animations/ScaleEffect"
import CompareSlider from "@/ui/organisms/CompareSlider"
import { useTranslations } from "@modules/translations/use"

const HomeContainer = () => {
  const { t } = useTranslations("common")
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <div className={`h-[2000px] bg-red-400 w-full`} />
      <ScaleEffect>
        <CompareSlider />
      </ScaleEffect>
      <div className={`h-[2000px] bg-red-400 w-full`} />
    </div>
  )
}

export default HomeContainer
