import Image, { StaticImageData } from "next/image"

interface Props {
  image: React.ReactNode
}

const CarouselElementImage = ({ image }: Props) => {
  return (
    <div className="absolute w-full h-full bg-black opacity-10 -z-10">
      {image}
    </div>
  )
}

export default CarouselElementImage
