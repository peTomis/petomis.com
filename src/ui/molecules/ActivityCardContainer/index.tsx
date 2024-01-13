enum ActivityCardContainerVariant {
  darkAndBlue = `bg-black`,
  lightAndBlue = `bg-freelanceIcon`,
}

interface Props {
  variant?: "darkAndBlue" | "lightAndBlue"
  children: React.ReactNode
  onClick?: () => void
  visible?: boolean
  id?: string
  skipAnimation?: boolean
}

const ActivityCardContainer = ({
  variant,
  children,
  onClick,
  visible,
  id,
}: Props) => {
  return (
    <div
      id={id}
      className={`cursor-pointer relative mx-auto h-[500px] w-[300px] overflow-hidden select-none ${
        variant
          ? ActivityCardContainerVariant[variant]
          : ActivityCardContainerVariant.darkAndBlue
      }  ${
        visible != undefined
          ? `transform ${
              visible ? " translate-y-0" : "translate-y-full"
            } transition-transform duration-500 ease-in-out`
          : ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default ActivityCardContainer
