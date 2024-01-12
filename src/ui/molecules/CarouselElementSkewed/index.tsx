interface Props {
  children: JSX.Element
  hovered: boolean
  onMouseEnter: () => void
  color: string
}

const CarouselElementSkewed = ({
  children,
  hovered,
  onMouseEnter,
  color,
}: Props) => {
  return (
    <div className={`flex relative`} onMouseEnter={onMouseEnter}>
      <div
        className={`flex overflow-hidden ${
          hovered
            ? ""
            : "w-[40px] sm:w-[60px] xxl:w-[100px]  skew-y-6 opacity-60"
        }`}
        onMouseEnter={onMouseEnter}
      >
        {hovered && (
          <div
            className={`absolute w-full h-full ${
              color ?? "bg-primary"
            } -z-20 rotate-2`}
          ></div>
        )}
        {children}
      </div>
    </div>
  )
}

export default CarouselElementSkewed
