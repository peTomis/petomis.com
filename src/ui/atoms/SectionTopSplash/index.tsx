import Image, { StaticImageData } from "next/image"

interface SectionTopSplashProps {
  src: StaticImageData
  darkSrc: StaticImageData
  align?: "left" | "right"
}

const SectionTopSplash = ({
  src,
  darkSrc,
  align = "right",
}: SectionTopSplashProps) => {
  const alignClass = align === "left" ? "left-0" : "right-0"
  return (
    <>
      <div className="absolute w-full overflow-visible -top-[140px] d:-top-30 select-none">
        <div className="relative w-full overflow-visible">
          <div
            className={`absolute visible dark:invisible top-0 ${alignClass} overflow-visible fixed-size`}
          >
            <Image src={src} alt={"alt"} width={1200} height={1200} />
          </div>
          <div
            className={`absolute invisible dark:visible top-0 ${alignClass} overflow-visible fixed-size`}
          >
            <Image src={darkSrc} alt={"alt"} width={1200} height={1200} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .fixed-size {
            width: 1200px !important;
            height: 1200px !important;
          }
        `}
      </style>
    </>
  )
}

export default SectionTopSplash
