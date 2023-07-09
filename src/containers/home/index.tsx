import Welcome from "@/features/home/Welcome"
import ScaleEffect from "@/ui/animations/ScaleEffect"
import ButtonContact from "@/ui/molecules/ButtonContact"
import CompareSlider from "@/ui/organisms/CompareSlider"
import { useTranslations } from "@modules/translations/use"
import style from "./style.module.css"

const HomeContainer = () => {
  const { t } = useTranslations("common")
  return (
    <div className={style.container}>
      <Welcome />
      <div className="w-full bg-black">
        <ScaleEffect>
          <CompareSlider />
        </ScaleEffect>
      </div>
      <div className={`h-[2000px]`} />
      <ButtonContact onClick={() => {}} />
    </div>
  )
}

export default HomeContainer
