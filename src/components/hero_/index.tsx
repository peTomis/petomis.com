// Welcome components
import PageRedirects from "./components/page-redirects"
import WelcomeImage from "./components/welcome-image"
import WelcomeText from "./components/welcome-text"
import Image from "next/image"

// Utils
import { WebsiteSection } from "@/utils"

interface Props {
  onRedirect: (section: WebsiteSection) => void
}

const Hero = ({ onRedirect }: Props) => {
  return (
    <div
      id="welcome-container"
      className="relative flex items-center justify-center pb-8 bg-gradient-to-br from-black via-black to-[#1f3343]"
    >
      <div className="z-10 flex flex-col items-center justify-center w-screen pt-12 lg:flex-row-reverse lg:space-x-reverse lg:space-x-4 lg:h-screen">
        <div
          className={
            "flex flex-col justify-between h-full  lg:w-[500px] lg:h-[500px] xxl:w-[760px] xxl:h-[760px] "
          }
        >
          <WelcomeText />
          <div className="hidden lg:flex lg:flex-1">
            <PageRedirects onRedirect={onRedirect} />
          </div>
        </div>
        <WelcomeImage />
        <div className="w-full px-4 pb-8 lg:hidden">
          <PageRedirects onRedirect={onRedirect} />
        </div>
      </div>
    </div>
  )
}
export default Hero
