import { useTranslations } from "@/modules/translations/use"

interface Props {
  imageBackgroundColor: string
  textBackgroundColor: string
  image: React.ReactNode
  description: React.ReactNode
  onClick?: () => void
  days?: string
  daysTextColor?: string
}

const ActivityCard = ({
  imageBackgroundColor,
  textBackgroundColor,
  description,
  image,
  onClick,
  days,
  daysTextColor,
}: Props) => {
  const { t } = useTranslations("home")
  return (
    <div
      className={`cursor-pointer relative mx-auto h-[500px] w-[300px] bg-${imageBackgroundColor} rounded-lg overflow-hidden select-none`}
      onClick={onClick}
    >
      {days && (
        <div
          className={`absolute top-0 right-0 z-10 py-2 w-[100px]  bg-opacity-50 backdrop-blur-sm  rounded-bl-3xl bg-${textBackgroundColor} text-center text-${daysTextColor}`}
        >
          {days} days
        </div>
      )}
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
