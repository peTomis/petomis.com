// External libraries
import Image from "next/image"

// Image
import image from "@public/images/me.png"

const WelcomeImage = () => {
  return (
    <div
      className={
        "flex justify-center select-none max-w-[600px] items-center lg:w-[500px] lg:h-[500px] xxl:max-w-[760px] xxl:w-[760px] xxl:h-[760px]"
      }
    >
      <Image
        src={image}
        alt="Main image"
        placeholder="blur"
        loading="eager"
        priority={true}
        width={1000}
        height={1000}
      />
    </div>
  )
}

export default WelcomeImage
