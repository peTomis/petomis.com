import { CSSProperties } from "react"
import logo from "@public/images/credly.png"

// The PNG is used as a mask over `currentColor`, so the logo takes the
// surrounding text colour like the SVG icons do.
const maskedLogoStyle: CSSProperties = {
  backgroundColor: "currentColor",
  WebkitMaskImage: `url(${logo.src})`,
  maskImage: `url(${logo.src})`,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
}

const Credly = () => {
  return (
    <span
      aria-hidden="true"
      className="block w-full h-full"
      style={maskedLogoStyle}
    />
  )
}

export default Credly
