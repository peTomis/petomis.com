export enum SectionDescriptionFontSize {
  EXTRALIGHT = "font-extralight",
  LIGHT = "font-light",
}

interface Props {
  rows: string[]
  fontSize?: SectionDescriptionFontSize
}

const SectionDescription = ({ rows, fontSize }: Props) => {
  return (
    <div
      className={`w-full flex flex-col d:max-w-[500px] pt-8 pb-16 text-h5 xl:text-h4 text-center font-roboto text-textDefault  lg:max-w-[700px] ${
        fontSize ?? SectionDescriptionFontSize.LIGHT
      }`}
    >
      {rows.map((row, i) => (
        <div key={i}>{row}</div>
      ))}
    </div>
  )
}

export default SectionDescription
