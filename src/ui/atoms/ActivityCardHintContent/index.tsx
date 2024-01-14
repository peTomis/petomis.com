enum ActivityCardVariant {
  darkAndBlue = "darkAndBlue",
  lightAndBlue = "lightAndBlue",
}

const variantClasses = {
  darkAndBlue: "text-defaultTextColor-dark fill-defaultTextColor-dark",
  lightAndBlue: "text-defaultTextColor fill-defaultTextColor",
}

interface Props {
  variant?: keyof typeof ActivityCardVariant
  idSuffix: string
  icon: JSX.Element
  text: string
  visibility: string
}

const ActivityCardHintContent = ({
  idSuffix,
  icon,
  text,
  visibility,
  variant = "darkAndBlue",
}: Props) => {
  return (
    <div
      id={`activity-card-hint-${idSuffix}`}
      className={`${visibility} absolute flex flex-row justify-center items-center space-x-2 top-0 right-0 z-10 py-2 w-[200px] bg-opacity-50 backdrop-blur-sm rounded-bl-3xl bg-primary-300 text-center ${variantClasses[variant]}`}
    >
      {icon}
      <div>{text}</div>
    </div>
  )
}

export default ActivityCardHintContent
