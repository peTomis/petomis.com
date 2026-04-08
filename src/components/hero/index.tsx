// Components
import PageRedirects from "./components/page-redirects"
import WelcomeImage from "./components/welcome-image"
import WelcomeText from "./components/welcome-text"

// Utils
import { WebsiteSection } from "@/utils"

interface Props {
  onRedirect: (_section: WebsiteSection) => void
}

const Hero = ({ onRedirect }: Props) => {
  return (
    <div
      id="welcome-container"
      className="relative flex items-center justify-center pb-8"
    >
      <div className="z-10 flex flex-col  space-y-8 items-center min-h-[100vh] justify-start md:justify-center w-screen md:pt-12 lg:flex-row-reverse lg:space-x-reverse lg:space-x-4 lg:[height:min(100vh,100vw)]">
        <div className="h-[40px]"></div>
        <div
          className={
            "flex flex-col justify-between  h-full  lg:w-[500px] lg:h-[500px] xxl:w-[760px] xxl:h-[760px] "
          }
        >
          <WelcomeText />
          <div className="hidden lg:flex lg:flex-1">
            <PageRedirects onRedirect={onRedirect} />
          </div>
        </div>
        <WelcomeImage />
        <div className="w-full px-4 pt-4 lg:hidden">
          <PageRedirects onRedirect={onRedirect} />
        </div>
      </div>
    </div>
  )
}
export default Hero
