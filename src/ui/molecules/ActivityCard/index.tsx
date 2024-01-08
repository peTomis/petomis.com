import { useTranslations } from "@/modules/translations/use"
import FingerTapIcon from "@/ui/icons/FingerTap"
import PointerClickIcon from "@/ui/icons/PointerClick"

interface Props {
  imageBackgroundColor: string
  textBackgroundColor: string
  textColor: string
  image: React.ReactNode
  description: React.ReactNode
  onClick?: () => void
}

const ActivityCard = ({
  imageBackgroundColor,
  textBackgroundColor,
  textColor,
  description,
  image,
  onClick,
}: Props) => {
  const { t } = useTranslations("home")
  return (
    <div
      className={`cursor-pointer relative mx-auto h-[500px] w-[300px] bg-${imageBackgroundColor} rounded-lg overflow-hidden select-none`}
      onClick={onClick}
    >
      <div
        className={`lg:hidden absolute flex flex-row justify-center items-center space-x-2 top-0 right-0 z-10 py-2 w-[200px]  bg-opacity-50 backdrop-blur-sm  rounded-bl-3xl bg-${textBackgroundColor} text-center text-${textColor}`}
      >
        <FingerTapIcon />
        <div>{t("work.mobileClick")}</div>
      </div>
      <div
        className={`hidden lg:flex absolute lg:flex-row justify-center items-center space-x-2 top-0 right-0 z-10 py-2 w-[200px]  bg-opacity-50 backdrop-blur-sm  rounded-bl-3xl bg-${textBackgroundColor} text-center text-${textColor}`}
      >
        <PointerClickIcon />

        <div>{t("work.desktopClick")}</div>
      </div>
      <div className="absolute top-0 left-0 w-full">{image}</div>
      <div
        className={`absolute p-4 bottom-0 w-full bg-opacity-50 backdrop-blur-sm bg-${textBackgroundColor}`}
      >
        {description}
      </div>
    </div>
  )
}

export default ActivityCard
