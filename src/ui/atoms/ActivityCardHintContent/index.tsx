import Typography, { TypographyColor } from "../Typography"

enum ActivityCardVariant {
  darkAndBlue = "darkAndBlue",
  lightAndBlue = "lightAndBlue",
  anubidigital = "anubidigital",
}

const variantClasses = {
  darkAndBlue: " fill-defaultTextColor-dark",
  lightAndBlue: " fill-defaultTextColor",
  anubidigital: " fill-defaultTextColor-dark",
}

const variantBackgroundClasses = {
  darkAndBlue: "bg-primary-300",
  lightAndBlue: "bg-primary-300",
  anubidigital: "bg-anubidigital",
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
      className={`${visibility} absolute flex flex-row justify-center items-center space-x-2 top-0 right-0 z-10 py-2 w-[200px] bg-opacity-50 backdrop-blur-sm rounded-bl-3xl  ${variantBackgroundClasses[variant]} text-center ${variantClasses[variant]}`}
    >
      {icon}
      <Typography text={text} color={color} darkColor={color} />
    </div>
  )
}

export default ActivityCardHintContent
