import Typography, { TypographyColor, TypographyFont } from "../Typography"

interface Props {
  label: string
  color?: TypographyColor
  darkColor?: TypographyColor
  font?: TypographyFont
  id?: string
}

const SectionTitle = ({ color, font, darkColor, id, label }: Props) => {
  return (
    <div id={id ?? ""} className={`w-full py-8 text-center`}>
      <Typography
        extrabold={true}
        size="h1"
        text={label}
        font={font}
        color={color}
        darkColor={darkColor}
      />
    </div>
  )
}

export default SectionTitle
