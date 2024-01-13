export enum SectionTitleColor {
  DEFAULT = "text-defaultTextColor dark:text-defaultTextColor-dark",
  PRIMARY100 = "text-primary-100",
  PRIMARY300 = "text-primary-300",
  PRIMARY400 = "text-primary-400",
  PRIMARY500 = "text-primary-500",
}

export enum SectionTitleFont {
  BACASIME_ANTIQUE = "font-bacasimeAntique",
  ROBOTO = "font-roboto",
}

interface Props {
  label: string
  color?: SectionTitleColor
  font?: SectionTitleFont
  id?: string
}

const SectionTitle = ({ color, font, id, label }: Props) => {
  return (
    <div
      id={id ?? ""}
      className={`w-full py-8 font-extrabold text-center text-h1 ${
        color ?? SectionTitleColor.DEFAULT
      }  ${font ?? SectionTitleFont.ROBOTO}`}
    >
      {label}
    </div>
  )
}

export default SectionTitle
