import Image, { StaticImageData } from "next/image"

interface Props {
  image: React.ReactNode
  hover?: boolean
}

const CarouselElementImage = ({ hover, image }: Props) => {
  return (
    <div
      className={`absolute w-full h-full bg-white ${
        hover ? "lg:scale-110" : ""
      } opacity-10 -z-10 transition-transform duration-500 ease-in-out`}
    >
      {image}
    </div>
  )
}

export default CarouselElementImage
