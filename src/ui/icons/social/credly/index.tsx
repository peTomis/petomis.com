import Image from "next/image"
import { CSSProperties } from "react"
import logo from "@public/images/credly.png"

const Credly = ({ black = false }: { black?: boolean }) => {
  const maskedLogoStyle: CSSProperties = {
    width: 26,
    height: 26,
    backgroundColor: "#000",
    WebkitMaskImage: `url(${logo.src})`,
    maskImage: `url(${logo.src})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      {black ? (
        <span role="img" aria-label="Credly logo" style={maskedLogoStyle} />
      ) : (
        <Image
          src={logo}
          alt="Credly logo"
          loading="eager"
          priority={true}
          width={26}
          height={26}
        />
      )}
    </div>
  )
}

export default Credly
