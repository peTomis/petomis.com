// Styles
import style from "./style.module.css"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Animations
import { useEffect, useMemo, useState } from "react"

const WelcomeText = () => {
  const { t } = useTranslations("home")

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 pt-8 select-none sm:pt-16 pg:pt-0 lg:items-start lg:justify-start lg:text-center">
      <div className="font-bold text-center lg:text-start font-orbitron text-name text-primary-100 d:text-nameExtraSmall sm:text-nameSmall md:text-nameMedium lg:text-nameLarge xl:text-nameExtraLarge xxl:text-nameXXL">
        {t("welcome.name")}
      </div>
      <div className="relative flex justify-center font-montserrat lg:w-full lg:justify-start text-job d:text-jobExtraSmall sm:text-jobSmall md:text-jobMedium lg:text-jobLarge xl:text-jobExtraLarge xxl:text-jobXXL">
        <div className={style.glitch} data-text={t("welcome.job")}>
          {t("welcome.job")}
        </div>
      </div>
    </div>
  )
}
export default WelcomeText
