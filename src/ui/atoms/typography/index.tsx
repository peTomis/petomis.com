export type TypographyColor =
  | "BASE"
  | "BLACK"
  | "PRIMARY50"
  | "PRIMARY100"
  | "PRIMARY200"
  | "PRIMARY300"
  | "PRIMARY400"
  | "PRIMARY500"
  | "ANUBIDIGITAL"
  | "ANUBIDIGITAL-DARK"
  | "PIENISSIMO"
  | "WHITE"

enum TypographyColorEnum {
  BLACK = "text-black",
  BASE = "",
  PRIMARY50 = "text-primary-50",
  PRIMARY100 = "text-primary-100",
  PRIMARY200 = "text-primary-200",
  PRIMARY300 = "text-primary-300",
  PRIMARY400 = "text-primary-400",
  PRIMARY500 = "text-primary-500",
  ANUBIDIGITAL = "text-anubidigital",
  "ANUBIDIGITAL-DARK" = "text-anubidigital-dark",
  PIENISSIMO = "text-red-600",
  WHITE = "text-white",
}

type TypographyFont = "roboto" | "montserrat" | "orbitron"

enum TypographyFontEnum {
  "orbitron" = "font-orbitron",
  "roboto" = "font-roboto",
  "montserrat" = "font-montserrat",
}

type TextSize =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "base"
  | "small"
  | "myNameSmall"
  | "myNameMedium"
  | "myNameExtraLarge"

enum TypographySizeEnum {
  "h1" = "text-h1",
  "h2" = "text-h2",
  "h3" = "text-h3",
  "h4" = "text-h4",
  "h5" = "text-h5",
  "h6" = "text-h6",
  "base" = "",
  "small" = "text-small",
  "myNameSmall" = "text-myNameSmall",
  "myNameMedium" = "text-myNameMedium",
  "myNameExtraLarge" = "text-myNameExtraLarge",
}

interface Props {
  text: string
  bold?: boolean
  clickable?: boolean
  color?: TypographyColor
  extrabold?: boolean
  extralight?: boolean
  font?: TypographyFont
  italic?: boolean
  light?: boolean
  size?: TextSize
  thin?: boolean
  underline?: boolean
  d?: TextSize
  md?: TextSize
  xl?: TextSize
  xxl?: TextSize
  opacity?: number
  onClick?: () => void
}

const Typography = ({
  text,
  bold = false,
  color = "BASE",
  clickable = false,
  font = "roboto",
  extrabold = false,
  extralight = false,
  italic = false,
  light = false,
  size = "base",
  thin = false,
  underline = false,
  d,
  md,
  xl,
  xxl,
  opacity,
  onClick,
}: Props) => {
  const getOpacity = () => (opacity !== undefined ? `opacity-${opacity}` : "")

  return (
    <span
      className={` ${TypographySizeEnum[size]} ${TypographyFontEnum[font]} ${TypographyColorEnum[color]} ${bold ? "font-bold" : ""} ${extrabold ? "font-extrabold" : ""} ${light ? "font-light" : ""} ${extralight ? "font-extralight" : ""} ${underline ? "underline" : ""} ${italic ? "italic" : ""}  ${thin ? "font-thin" : ""} ${d ? "d:" + TypographySizeEnum[d] : ""} ${md ? "md:" + TypographySizeEnum[md] : ""} ${xl ? "xl:" + TypographySizeEnum[xl] : ""} ${xxl ? "xxl:" + TypographySizeEnum[xxl] : ""} ${clickable ? "cursor-pointer" : ""} ${getOpacity()}`}
      onClick={onClick}
    >
      {text}
    </span>
  )
}

export default Typography
