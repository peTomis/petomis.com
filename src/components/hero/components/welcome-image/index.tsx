// External libraries
import Image from "next/image"

// Image
import image from "@public/images/me.png"

const WelcomeImage = () => {
  return (
    <div
      className={
        "flex justify-center select-none max-w-[600px] items-center lg:w-[500px] lg:h-[500px] xxl:max-w-[760px] xxl:w-[760px] xxl:h-[760px] py-4"
      }
    >
      <Image
        src={image}
        alt="Main image"
        loading="eager"
        priority={true}
        width={760}
        height={760}
        sizes="(max-width: 1024px) 100vw, 760px"
      />
    </div>
  )
}

export default WelcomeImage
