interface ScrollIndicatorProps {
  count: number
  selectedId: number
  activeColor: string
  onClick?: (index: number) => void
}

const ScrollIndicator = ({
  count,
  selectedId,
  activeColor,
  onClick,
}: ScrollIndicatorProps) => {
  return (
    <div className="z-10 flex items-center justify-center space-x-2">
      {Array.from({ length: count }, (_, index) => {
        const isActive = index === selectedId

        const dotStyle = isActive ? `${activeColor} w-16` : "bg-[#444] w-5"

        return (
          <div
            key={index}
            onClick={() => onClick && onClick(index)}
            className={`${dotStyle} h-5 rounded-full transition-all duration-300`}
          ></div>
        )
      })}
    </div>
  )
}

export default ScrollIndicator
