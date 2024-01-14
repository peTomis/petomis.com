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

interface Props {
  text: string
  color?: TypographyColor
  darkColor?: TypographyColor
  bold?: boolean
}

const Typography = ({
  text,
  color = "defaultTextColor",
  darkColor = "defaultTextColor-dark",
  bold = false,
}: Props) => {
  const getTextColor = () => TypographyColorEnum[color]
  const getDarkTextColor = () => "dark:" + TypographyColorEnum[darkColor]
  const getBold = () => (bold ? "font-bold" : "")

  return (
    <span className={`${getTextColor()} ${getDarkTextColor()} ${getBold()}`}>
      {text}
    </span>
  )
}

export default Typography
