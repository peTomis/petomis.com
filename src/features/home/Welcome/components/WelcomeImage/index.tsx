import Image from "next/image"
import darkImage from "@public/images/me-dark.png"
import lightImage from "@public/images/me-light.png"

const WelcomeImage = () => {
  return (
    <div
      className={
        "flex justify-center max-w-[600px] items-center lg:w-[500px] lg:h-[500px] xxl:max-w-[760px] xxl:w-[760px] xxl:h-[760px]"
      }
    >
      <div className="block dark:hidden">
        <Image
          src={lightImage}
          alt="Main image"
          placeholder="blur"
          loading="eager"
          priority={true}
          width={1000}
          height={1000}
        />
      </div>
      <div className="hidden dark:block">
        <Image
          src={darkImage}
          alt="Main image"
          placeholder="blur"
          loading="eager"
          priority={true}
          width={1200}
          height={1200}
        />
      </div>
    </div>
  )
}

export default WelcomeImage
