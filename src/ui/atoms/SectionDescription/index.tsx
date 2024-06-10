import Typography, { TypographyColor } from "../Typography"

interface Props {
  rows: string[]
  color?: TypographyColor
}

const SectionDescription = ({ rows, color }: Props) => {
  return (
    <div
      className={`w-full flex flex-col d:max-w-[500px] text-center  lg:max-w-[700px]`}
    >
      {rows.map((row, i) => (
        <Typography key={i} text={row} size="h5" xl="h4" color={color} light />
      ))}
    </div>
  )
}

export default SectionDescription
