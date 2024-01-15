export type TypographyColor =
  | "defaultTextColor"
  | "defaultTextColor-dark"
  | "primary-100"
  | "primary-300"

enum TypographyColorEnum {
  "defaultTextColor" = "text-defaultTextColor",
  "defaultTextColor-dark" = "text-defaultTextColor-dark",
  "primary-100" = "text-primary-100",
  "primary-300" = "text-primary-300",
}

enum TypographyDarkColorEnum {
  "defaultTextColor" = "dark:text-defaultTextColor",
  "defaultTextColor-dark" = "dark:text-defaultTextColor-dark",
  "primary-100" = "dark:text-primary-100",
  "primary-300" = "dark:text-primary-300",
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
  "base" = "text-base",
  "myNameSmall" = "text-myNameSmall",
  "myNameMedium" = "text-myNameMedium",
  "myNameExtraLarge" = "text-myNameExtraLarge",
}

interface Props {
  text: string
  bold?: boolean
  clickable?: boolean
  color?: TypographyColor
  darkColor?: TypographyColor
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
  onClick?: () => void
}

const Typography = ({
  text,
  bold = false,
  color = "defaultTextColor",
  clickable = false,
  darkColor = "defaultTextColor-dark",
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
  onClick,
}: Props) => {
  const getFont = () => TypographyFontEnum[font]
  const getTextColor = () => TypographyColorEnum[color]
  const getDarkTextColor = () => TypographyDarkColorEnum[darkColor]
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

  return (
    <span
      className={` ${getSize()} ${getFont()} ${getTextColor()} ${getDarkTextColor()} ${getBold()} ${getExtrabold()} ${getLight()} ${getExtralight()} ${getUnderline()} ${getItalic()}  ${getThin()} ${getDSize()} ${getMDSize()} ${getXLSize()} ${getXXLSize()} ${getClickable()}`}
      onClick={onClick}
    >
      {text}
    </span>
  )
}

export default Typography
