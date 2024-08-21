// Welcome components
import PageRedirects from "./components/PageRedirects"
import WelcomeImage from "./components/WelcomeImage"
import WelcomeText from "./components/WelcomeText"
import Image from "next/image"
import heroBg from "@public/images/hero-bg.png"

// Utils
import { WebsiteSection } from "@/utils/websiteSections"

interface Props {
  onRedirect: (section: WebsiteSection) => void
}

const Hero = ({ onRedirect }: Props) => {
  return (
    <div
      id="welcome-container"
      className="flex items-center justify-center pb-8 bg-background dark:bg-background-dark lg:h-screen md:pb-12 lg:pb-0"
    >
      <div className="absolute top-0 left-0 invisible xl:visible">
        <Image
          src={heroBg}
          className="object-cover"
          alt=""
          width={1600}
          height={500}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-screen pt-12 lg:flex-row-reverse lg:space-x-reverse lg:space-x-4 lg:h-screen">
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
        <div className="w-[80vw]  max-w-[600px] pb-8 lg:hidden">
          <PageRedirects onRedirect={onRedirect} />
        </div>
      </div>
    </div>
  )
}
export default Hero
