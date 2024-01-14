interface Props {
  title: string
  description: string
  color?: CarouselElementColor
  selected?: boolean
}

export enum CarouselElementColor {
  RED = "bg-red-800",
  BLACK = "bg-black",
  BLUE = "bg-primary-300",
  PURPLE = "bg-purple-800",
  YELLOW = "bg-yellow-800",
}

const CarouselElementText = ({
  title,
  description,
  selected,
  color = CarouselElementColor.BLUE,
}: Props) => {
  const verticalTitle = title.split("")
  return (
    <>
      {selected ? (
        <div
          className={`flex flex-col flex-1 justify-start items-center p-8 space-y-8 bg-background-dark dark:bg-background bg-opacity-50 dark:bg-opacity-50`}
        >
          <div className="text-h4">{title.toUpperCase()}</div>
          <div className="text-base font-light">{description}</div>
        </div>
      ) : (
        <div
          className={`flex flex-col items-center justify-start flex-1 py-8 space-y-2 ${color} px-auto backdrop-blur-sm bg-opacity-50`}
        >
          {verticalTitle.map((letter, key) => {
            return (
              <div key={key} className="flex">
                {letter.toUpperCase()}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default CarouselElementText
