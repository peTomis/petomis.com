interface Props {
  bg?: string
  hovered: boolean
  onMouseEnter: () => void
}

const CarouselButton = ({ bg, hovered, onMouseEnter }: Props) => {
  return (
    <div
      className={`flex z-10 w-6 md:w-4 h-6 md:h-4 rounded-full cursor-pointer ${
        hovered ? `${bg ?? "bg-white"}` : "bg-white bg-opacity-20"
      }`}
      onMouseEnter={onMouseEnter}
    />
  )
}

export default CarouselButton
