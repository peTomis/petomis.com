import { StaticImageData } from "next/image"
import SectionDescription from "../SectionDescription"
import SectionTitle from "../SectionTitle"
import SectionTopSplash from "../SectionTopSplash"
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
  titleFont?: TypographyFont
  descriptionColor?: TypographyColor
  splashImage?: StaticImageData
  style?: CSSProperties
}

const SectionContainer = ({
  children,
  description,
  id,
  title,
  bgColor = "bg-white",
  bgOpacity = "bg-opacity-100",
  titleColor = "black",
  titleFont = "roboto",
  descriptionColor = "black",
  splashImage,
  style,
}: SectionTopSplashProps) => {
  return (
    <div
      id={id}
      className={`relative flex flex-col items-center justify-center w-full pt-16 pb-32 mx-auto ${bgOpacity} ${bgColor} space-y-16`}
      style={style}
    >
      {splashImage && <SectionTopSplash src={splashImage} />}
      <SectionTitle
        id="work-title"
        label={title}
        color={titleColor}
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
