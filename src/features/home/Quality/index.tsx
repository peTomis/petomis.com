import { useTranslations } from "@/modules/translations/use"
import ScaleEffect from "@/ui/animations/ScaleEffect"
import CompareSlider from "@/ui/organisms/CompareSlider"

const Quality = () => {
  const { t } = useTranslations("home")
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full px-8 py-12 space-y-4 lg:py-24 lg:mx-auto lg:space-y-8 lg:items-center lg:justify-start">
        <div className=" font-roboto text-h5 d:max-w-[500px] font-normal tracking-wide leading-8 lg:leading-10 lg:max-w-[1200px] opacity-70">
          {t("cleanCode1")}
          <span className={"text-primary-200"}>{t("cleanCode2")}</span>
          {t("cleanCode3")}
          <span className={"text-primary-200"}>{t("cleanCode4")}</span>
          {t("cleanCode5")}
          <span className={"text-primary-200"}>{t("cleanCode6")}</span>
          {t("cleanCode7")}
        </div>
      </div>
      <div className="hidden w-full max-w-[1200px] pb-12 lg:flex items-start  font-roboto font-normal space-x-2 opacity-70">
        <div className="pl-8 text-h2">{t("examples")}</div>
        <div className="text-base">(*)</div>
      </div>
      <div className="w-full bg-black">
        <ScaleEffect>
          <CompareSlider />
        </ScaleEffect>
      </div>
      <div className="hidden w-full py-2 text-base tracking-wide text-center bg-black lg:block font-agdasima">
        {t("note")}
      </div>
    </>
  )
}

export default Quality
