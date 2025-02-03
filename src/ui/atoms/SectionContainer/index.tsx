import SectionDescription from "../SectionDescription"
import SectionTitle from "../SectionTitle"
import { TypographyColor, TypographyFont } from "../Typography"
import { CSSProperties } from "react"

interface SectionTopSplashProps {
  children: React.ReactNode
  description: string[]
  id: string
  title: string
  bgColor?: string
  bgOpacity?: string
  titleColor?: TypographyColor
  titleDarkColor?: TypographyColor
  titleFont?: TypographyFont
  descriptionColor?: TypographyColor
  style?: CSSProperties
}

const SectionContainer = ({
  children,
  description,
  id,
  title,
  bgColor = "bg-background dark:bg-background-dark",
  bgOpacity = "bg-opacity-100",
  titleColor = "black",
  titleDarkColor = "white",
  titleFont = "roboto",
  descriptionColor = "black",
  style,
}: SectionTopSplashProps) => {
  return (
    <div
      id={id}
      className={`relative flex flex-col items-center justify-center w-full pt-8 pb-32 mx-auto ${bgOpacity} ${bgColor} space-y-8`}
      style={style}
    >
      <SectionTitle
        id="work-title"
        label={title}
        color={titleColor}
        darkColor={titleDarkColor}
        font={titleFont}
      />
      {description.length > 0 && (
        <SectionDescription rows={description} color={descriptionColor} />
      )}
      {children}
    </div>
  )
}

export default SectionContainer
