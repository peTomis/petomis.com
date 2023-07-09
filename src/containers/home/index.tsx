import CompareSlider from "@/ui/molecules/CompareSlider"
import { useTranslations } from "@modules/translations/use"

const HomeContainer = () => {
  const { t } = useTranslations("common")
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <CompareSlider />
    </div>
  )
}

export default HomeContainer
