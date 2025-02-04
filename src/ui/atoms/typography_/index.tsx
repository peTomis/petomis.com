export type TypographyColor =
  | "BASE"
  | "BLACK"
  | "PRIMARY50"
  | "PRIMARY100"
  | "PRIMARY300"
  | "PRIMARY400"
  | "ANUBIDIGITAL"
  | "ANUBIDIGITAL-DARK"

export enum TypographyColorEnum {
  BLACK = "text-black",
  BASE = "",
  PRIMARY50 = "text-primary-50",
  PRIMARY100 = "text-primary-100",
  PRIMARY300 = "text-primary-300",
  PRIMARY400 = "text-primary-400",
  ANUBIDIGITAL = "text-anubidigital",
  "ANUBIDIGITAL-DARK" = "text-anubidigital-dark",
}

export type TypographyFont = "roboto" | "bacasimeAntique" | "agdasima"

enum TypographyFontEnum {
  "agdasima" = "font-agdasima",
  "roboto" = "font-roboto",
  "bacasimeAntique" = "font-bacasimeAntique",
}

export type TextSize =
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
  const getFont = () => TypographyFontEnum[font]
  const getTextColor = () => TypographyColorEnum[color]
  const getBold = () => (bold ? "font-bold" : "")
  const getExtrabold = () => (extrabold ? "font-extrabold" : "")
  const getItalic = () => (italic ? "italic" : "")
  const getLight = () => (light ? "font-light" : "")
  const getExtralight = () => (extralight ? "font-extralight" : "")
  const getThin = () => (thin ? "font-thin" : "")
  const getUnderline = () => (underline ? "underline" : "")
  const getClickable = () => (clickable ? "cursor-pointer" : "")
  const getSize = () => TypographySizeEnum[size]
  const getDSize = () => (d ? "d:" + TypographySizeEnum[d] : "")
  const getMDSize = () => (md ? "md:" + TypographySizeEnum[md] : "")
  const getXLSize = () => (xl ? "xl:" + TypographySizeEnum[xl] : "")
  const getXXLSize = () => (xxl ? "xxl:" + TypographySizeEnum[xxl] : "")
  const getOpacity = () => (opacity ? `opacity-${opacity}` : "")

  return (
    <span
      className={` ${getSize()} ${getFont()} ${getTextColor()} ${getBold()} ${getExtrabold()} ${getLight()} ${getExtralight()} ${getUnderline()} ${getItalic()}  ${getThin()} ${getDSize()} ${getMDSize()} ${getXLSize()} ${getXXLSize()} ${getClickable()} ${getOpacity()}`}
      onClick={onClick}
    >
      {text}
    </span>
  )
}

export default Typography
