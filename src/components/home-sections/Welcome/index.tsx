import PageRedirects from "./components/PageRedirects"
import WelcomeImage from "./components/WelcomeImage"
import WelcomeText from "./components/WelcomeText"
import { WebsiteSection } from "@/utils/websiteSections"

interface Props {
  onRedirect: (section: WebsiteSection) => void
}

const Welcome = ({ onRedirect }: Props) => {
  return (
    <div className="flex items-center justify-center lg:h-screen">
      <div className="flex flex-col items-center justify-center w-screen pt-12 lg:flex-row-reverse lg:space-x-reverse lg:space-x-4 lg:h-screen">
        <div
          className={
            "flex flex-col justify-between h-full  lg:w-[500px] lg:h-[500px] xxl:w-[760px] xxl:h-[760px] "
          }
        >
          <WelcomeText />
          <div className="hidden lg:flex lg:flex-1">
            <PageRedirects onRedirect={onRedirect} desktop={true} />
          </div>
        </div>
        <WelcomeImage />
        <div className="w-[80vw]  max-w-[600px]  lg:hidden">
          <PageRedirects onRedirect={onRedirect} desktop={false} />
        </div>
      </div>
    </div>
  )
}
export default Welcome
