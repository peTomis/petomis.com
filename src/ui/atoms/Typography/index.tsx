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

export type TypographyFont = "roboto" | "bacasimeAntique"

enum TypographyFontEnum {
  "roboto" = "font-roboto",
  "bacasimeAntique" = "font-bacasimeAntique",
}

export type TextSize = "h1" | "h2" | "h3" | "h4" | "h5" | "base"

enum TypographySizeEnum {
  "h1" = "text-h1",
  "h2" = "text-h2",
  "h3" = "text-h3",
  "h4" = "text-h4",
  "h5" = "text-h5",
  "base" = "text-base",
}

interface Props {
  text: string
  color?: TypographyColor
  darkColor?: TypographyColor
  bold?: boolean
  extrabold?: boolean
  italic?: boolean
  light?: boolean
  underline?: boolean
  font?: TypographyFont
  size?: TextSize
  d?: TextSize
  clickable?: boolean
  onClick?: () => void
}

const Typography = ({
  text,
  color = "defaultTextColor",
  darkColor = "defaultTextColor-dark",
  font = "roboto",
  bold = false,
  extrabold = false,
  italic = false,
  light = false,
  underline = false,
  size = "base",
  d,
  clickable = false,
  onClick,
}: Props) => {
  const getFont = () => TypographyFontEnum[font]
  const getTextColor = () => TypographyColorEnum[color]
  const getDarkTextColor = () => "dark:" + TypographyColorEnum[darkColor]
  const getBold = () => (bold ? "font-bold" : "")
  const getExtrabold = () => (extrabold ? "font-extrabold" : "")
  const getItalic = () => (italic ? "italic" : "")
  const getLight = () => (light ? "font-light" : "")
  const getUnderline = () => (underline ? "underline" : "")
  const getClickable = () => (clickable ? "cursor-pointer" : "")
  const getSize = () => TypographySizeEnum[size]
  const getDSize = () => (d ? "d:" + TypographySizeEnum[d] : "")

  return (
    <span
      className={`${getSize()} ${getFont()} ${getTextColor()} ${getDarkTextColor()} ${getBold()} ${getExtrabold()} ${getLight()} ${getUnderline()} ${getItalic()} ${getDSize()} ${getClickable()}`}
      onClick={onClick}
    >
      {text}
    </span>
  )
}

export default Typography
