interface Props {
  bg?: string
  hovered: boolean
  onMouseEnter: () => void
}

const CarouselButton = ({ bg, hovered, onMouseEnter }: Props) => {
  return (
    <div
      className={`flex w-6 md:w-4 h-6 md:h-4 rounded-full cursor-pointer ${
        hovered
          ? `${bg ?? "bg-white"}`
          : "bg-defaultTextColor bg-opacity-20 dark:bg-opacity-20 dark:bg-defaultTextColor-dark "
      }`}
      onMouseEnter={onMouseEnter}
    />
  )
}

export default CarouselButton
