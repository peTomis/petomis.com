import Typography, { TypographyColor } from "../typography"

interface Props {
  title: React.ReactNode
  description: string
  name: string
  color?: CarouselElementColor
  selected?: boolean
}

export enum CarouselElementColor {
  RED = "bg-[#f10000]",
  BLACK = "bg-black",
  BLUE = "bg-primary-300",
  PURPLE = "bg-purple-800",
  YELLOW = "bg-yellow-800",
  GREEN = "bg-green-800",
}

const CarouselElementText = ({
  title,
  name,
  description,
  selected,
  color = CarouselElementColor.BLUE,
}: Props) => {
  const verticalTitle = name.split("")

  const getTextColor = (): TypographyColor => {
    switch (color) {
      case CarouselElementColor.BLUE:
        return "BASE"
      default:
        return "BLACK"
    }
  }
  return (
    <>
      {selected ? (
        <div
          className={`flex flex-col flex-1 justify-start w-full items-center p-8`}
        >
          <div className="flex flex-none">{title}</div>
          <div className="flex flex-col items-center justify-start flex-1 w-full pt-8 space-y-4 text-center">
            <Typography
              text={description}
              light
              md="h6"
              color={getTextColor()}
            />
          </div>
        </div>
      ) : (
        <div
          className={`flex flex-col items-center justify-start flex-1 py-8 space-y-2 ${color} px-auto backdrop-blur-sm bg-opacity-50`}
        >
          {verticalTitle.map((letter, key) => {
            return (
              <div key={key} className="flex text-black">
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
