import {
  ActivityColorBg,
  ActivityColorFill,
  ActivityColorText,
  ActivityColorVariant,
} from "@/utils"
import Typography from "../Typography"

interface Props {
  variant?: ActivityColorVariant
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
  variant = ActivityColorVariant.MOBILE,
}: Props) => {
  return (
    <div
      id={`activity-card-hint-${idSuffix}`}
      className={`${visibility} absolute flex flex-row justify-center items-center space-x-2 top-0 right-0 z-10 py-2 w-[200px] bg-opacity-50 backdrop-blur-sm rounded-bl-3xl  ${ActivityColorBg[variant]} text-center ${ActivityColorFill[variant]}`}
    >
      {icon}
      <Typography text={text} color={ActivityColorText[variant]} />
    </div>
  )
}

export default ActivityCardHintContent
