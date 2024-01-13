import style from "./style.module.css"
import { useTranslations } from "@/modules/translations/use"
import { useTypewriterEffect } from "@/ui/animations/TypewriterEffect"

const Name = () => {
  const { t } = useTranslations("home")
  return (
    <div className="font-bold text-center lg:text-start font-agdasima text-myNameSmall text-primary-100 d:text-myNameMedium lg:text-myNameMedium xxl:text-myNameExtraLarge">
      {t("welcome.name")}
    </div>
  )
}

const WelcomeText = () => {
  const { t } = useTranslations("home")
  const words = [t("welcome.firstRole"), t("welcome.secondRole")]

  const { currentWord } = useTypewriterEffect(words)

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 select-none lg:items-start lg:justify-start lg:text-start">
      <Name />

      <div className="flex pb-8 justify-start w-[80vw]  lg:ml-8 max-w-[600px] text-jobSmall font-bacasimeAntique text-defaultTextColor dark:text-defaultTextColor-dark sm:text-jobMedium xxl:text-jobExtraLarge">
        <h1 className="relative text-center">
          <span className="relative line-clamp-1 ">{currentWord}</span>
          <div
            className={"bg-defaultTextColor dark:bg-defaultTextColor-dark ".concat(
              style.cursor
            )}
          />
        </h1>
      </div>
    </div>
  )
}
export default WelcomeText
