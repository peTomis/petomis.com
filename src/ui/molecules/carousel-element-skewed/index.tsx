import { useState } from "react"

interface Props {
  children: JSX.Element
  onMouseEnter: () => void
  color: string
  swipingDirection?: "left" | "right" | undefined
}

const CarouselElementSkewed = ({
  children,
  onMouseEnter,
  color,
  swipingDirection,
}: Props) => {
  const [isChildHovered, setIsChildHovered] = useState(false)

  return (
    <div className={`flex relative`} onMouseEnter={onMouseEnter}>
      <div className={`flex overflow-visible z-10`} onMouseEnter={onMouseEnter}>
        <div
          className={`absolute w-full h-full ${
            color ?? "bg-primary"
          } -z-20 rotate-[4deg] ${
            isChildHovered ? "lg:scale-110" : ""
          } transform ${swipingDirection === undefined && " translate-x-0"}  ${
            swipingDirection === "left" && " translate-x-full"
          } ${
            swipingDirection === "right" && "-translate-x-full"
          } transition-transform duration-500 ease-in-out`}
        ></div>
        <div
          onMouseEnter={() => setIsChildHovered(true)}
          onMouseLeave={() => setIsChildHovered(false)}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default CarouselElementSkewed
