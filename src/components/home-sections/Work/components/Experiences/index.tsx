import Image from "next/image"
import AnubidigitalIcon from "@/ui/icons/Anubidigital"
import mobileDeveloperImage from "@public/images/work/md.png"

const experiences = [
  {
    imageBackgroundColor: "black",
    textBackgroundColor: "primary-300",
    onClick: () => window.open(process.env.ANUBI, "_blank"),
    textColor: "white",
    image: () => (
      <div className="h-[300px] items-center flex fill-white mx-auto w-full justify-center">
        <AnubidigitalIcon />
      </div>
    ),
    description: () => (
      <div className="flex flex-col space-y-2 text-defaultTextColor-dark font-roboto">
        <div className="text-h4">Fullstack Developer</div>
        <div className="font-light text-h5">2022- today</div>
        <div>
          <div>Programming Languages</div>
          <div className="font-extralight">Swift, Kotlin, Flutter</div>
        </div>

        <div>
          <div>Tools</div>
          <div className="font-extralight">XCode, Android Studio, IntelliJ</div>
        </div>
      </div>
    ),
  },
  {
    imageBackgroundColor: "[#d8f3ff]",
    textBackgroundColor: "primary-400",
    textColor: "white",
    image: () => (
      <Image
        src={mobileDeveloperImage}
        alt="Main image"
        placeholder="blur"
        loading="eager"
        priority={true}
        width={500}
        height={500}
      />
    ),
    description: () => (
      <div className="flex flex-col space-y-2 text-defaultTextColor-dark font-roboto">
        <div className="text-h4">Mobile Developer</div>
        <div className="font-light text-h5">2020-2022</div>
        <div>
          <div>Programming Languages</div>
          <div className="font-extralight">Swift, Kotlin, Flutter</div>
        </div>

        <div>
          <div>Tools</div>
          <div className="font-extralight">XCode, Android Studio, IntelliJ</div>
        </div>
      </div>
    ),
  },
]

export default experiences
