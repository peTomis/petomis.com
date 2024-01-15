import Typography, { TypographyColor } from "../Typography"

enum ActivityCardVariant {
  darkAndBlue = "darkAndBlue",
  lightAndBlue = "lightAndBlue",
}

const variantClasses = {
  darkAndBlue: " fill-defaultTextColor-dark",
  lightAndBlue: " fill-defaultTextColor",
}

interface Props {
  variant?: keyof typeof ActivityCardVariant
  idSuffix: string
  icon: JSX.Element
  text: string
  visibility: string
  color?: TypographyColor
}

const ActivityCardHintContent = ({
  idSuffix,
  icon,
  text,
  visibility,
  variant = "darkAndBlue",
  color,
}: Props) => {
  return (
    <div
      id={`activity-card-hint-${idSuffix}`}
      className={`${visibility} absolute flex flex-row justify-center items-center space-x-2 top-0 right-0 z-10 py-2 w-[200px] bg-opacity-50 backdrop-blur-sm rounded-bl-3xl bg-primary-300 text-center ${variantClasses[variant]}`}
    >
      {icon}
      <Typography text={text} color={color} />
    </div>
  )
}

export default ActivityCardHintContent
