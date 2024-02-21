// Welcome components
import PageRedirects from "./components/PageRedirects"
import WelcomeImage from "./components/WelcomeImage"
import WelcomeText from "./components/WelcomeText"

// Utils
import { WebsiteSection } from "@/utils/websiteSections"

// Atoms
import HomeWallpaperPattern from "@/ui/atoms/HomeWallpaperPattern"

interface Props {
  onRedirect: (section: WebsiteSection) => void
}

const Welcome = ({ onRedirect }: Props) => {
  return (
    <div
      id="welcome-container"
      className="flex items-center justify-center mb-8 lg:h-screen md:mb-12 lg:mb-0"
    >
      <HomeWallpaperPattern>
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
      </HomeWallpaperPattern>
    </div>
  )
}
export default Welcome
