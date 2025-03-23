interface Props {
  children: JSX.Element
  hovered: boolean
  onMouseEnter: () => void
  color: string
  swipingDirection?: "left" | "right" | undefined
}

const CarouselElementSkewed = ({
  children,
  hovered,
  onMouseEnter,
  color,
  swipingDirection,
}: Props) => {
  return (
    <div className={`flex relative`} onMouseEnter={onMouseEnter}>
      <div
        className={`flex overflow-visible z-10 ${
          hovered
            ? ""
            : "w-[40px] sm:w-[60px] sm:max-w-[100px] lg:w-[100px]  skew-y-6 opacity-60"
        }`}
        onMouseEnter={onMouseEnter}
      >
        {hovered && (
          <div
            className={`absolute w-full h-full ${
              color ?? "bg-primary"
            } -z-20 rotate-[4deg] transform ${
              swipingDirection === undefined && " translate-x-0"
            }  ${swipingDirection === "left" && " translate-x-full"} ${
              swipingDirection === "right" && "-translate-x-full"
            } transition-transform duration-500 ease-in-out`}
          ></div>
        )}
        {children}
      </div>
    </div>
  )
}

export default CarouselElementSkewed
