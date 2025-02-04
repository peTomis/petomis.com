import Image, { StaticImageData } from "next/image"

interface Props {
  src: StaticImageData
}

const CarouselElementImage = ({ src }: Props) => {
  return (
    <div className="absolute w-full h-full bg-black opacity-10 -z-10">
      <Image
        src={src}
        className="object-cover -z-10"
        alt=""
        width={1000}
        height={500}
      />
    </div>
  )
}

export default CarouselElementImage
