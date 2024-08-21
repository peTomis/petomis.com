import { customTransitionAnimation } from "@/ui/animations/CustomTransitionAnimation"

enum ActivityCardContainerVariant {
  darkAndBlue = `bg-black`,
  lightAndBlue = `bg-primary-50`,
  anubidigital = `bg-black`,
  pienissimo = `bg-white`,
}

interface Props {
  variant?: "darkAndBlue" | "lightAndBlue" | "anubidigital" | "pienissimo"
  children: React.ReactNode
  onClick?: () => void
  visible?: boolean
  id?: string
  skipAnimation?: boolean
}

const ActivityCardContainer = ({
  variant = "darkAndBlue",
  children,
  onClick,
  visible,
  id,
}: Props) => {
  return (
    <div
      id={id}
      className={`cursor-pointer relative mx-auto h-[500px] w-[300px] overflow-hidden rounded-lg drop-shadow-2xl select-none ${
        ActivityCardContainerVariant[variant]
      }  ${customTransitionAnimation(visible)}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default ActivityCardContainer
