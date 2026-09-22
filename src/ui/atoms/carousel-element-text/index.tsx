import Typography, { TypographyColor } from "../typography"

interface Props {
  title: React.ReactNode
  description: string
  name: string
  color?: CarouselElementColor
}

export const CarouselElementColor = {
  ANUBIDIGITAL: "bg-anubidigital-dark",
  PIENISSIMO: "bg-red-300",
  RED: "bg-[#f10000]",
  BLACK: "bg-black",
  BLUE: "bg-primary-300",
  PURPLE: "bg-purple-800",
  YELLOW: "bg-yellow-800",
  GREEN: "bg-green-800",
  WHITE: "bg-white",
} as const

export type CarouselElementColor =
  (typeof CarouselElementColor)[keyof typeof CarouselElementColor]

/**
 * The subset of colours used for the "employee" (job) projects, which drive the
 * expanded detail view's theming.
 */
export type EmployeeColor =
  | typeof CarouselElementColor.ANUBIDIGITAL
  | typeof CarouselElementColor.PIENISSIMO

const CarouselElementText = ({
  title,
  name,
  description,
  color = CarouselElementColor.BLUE,
}: Props) => {
  const getTextColor = (): TypographyColor => {
    switch (color) {
      case CarouselElementColor.BLUE:
      case CarouselElementColor.ANUBIDIGITAL:
        return "BASE"
      default:
        return "BLACK"
    }
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-start w-full p-8">
      <h3 className="flex h-[80px] flex-none items-center justify-center">
        {title}
      </h3>
      <div className="flex flex-col items-center justify-start flex-1 w-full pt-8 space-y-4 text-center">
        <Typography text={description} light md="h6" color={getTextColor()} />
      </div>
    </div>
  )
}

export default CarouselElementText
