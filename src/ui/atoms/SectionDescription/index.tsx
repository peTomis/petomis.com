import Typography, { TypographyColor } from "../Typography"

interface Props {
  rows: string[]
  color?: TypographyColor
  bold?: boolean
  extrabold?: boolean
  extralight?: boolean
  light?: boolean
}

const SectionDescription = ({
  rows,
  color,
  light,
  extrabold,
  extralight,
  bold,
}: Props) => {
  return (
    <div
      className={`w-full flex flex-col d:max-w-[500px] pt-8 pb-16 text-center  lg:max-w-[700px]`}
    >
      {rows.map((row, i) => (
        // <div key={i}>{row}</div>
        <Typography
          key={i}
          text={row}
          size="h5"
          xl="h4"
          color={color}
          light={light}
          extrabold={extrabold}
          extralight={extralight}
          bold={bold}
        />
      ))}
    </div>
  )
}

export default SectionDescription
