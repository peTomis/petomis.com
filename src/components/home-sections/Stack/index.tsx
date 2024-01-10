import Image from "next/image"
import React from "react"

interface ImageItemProps {
  src: string
  alt: string
  key: number
}

const ImageItem: React.FC<ImageItemProps> = ({ src, alt }) => (
  <div className="flex items-center justify-center">
    <div className="relative overflow-hidden w-[175px]  h-[70px] md:w-[250px] md:h-[100px]">
      <Image
        src={src}
        alt={alt}
        width={200}
        height={80}
        className="flex items-center justify-center"
      />
    </div>
  </div>
)

ImageItem.displayName = "ImageItem"

const Stack = () => {
  const items = [
    <ImageItem
      key={0}
      src="/images/carousel/nestjs.png"
      alt="Nestjs logo image"
    />,
    <ImageItem
      key={1}
      src="/images/carousel/nextjs.png"
      alt="Nextjs logo image"
    />,
    <ImageItem
      key={2}
      src="/images/carousel/postgre.png"
      alt="Postgre logo image"
    />,
    <ImageItem
      key={3}
      src="/images/carousel/docker.png"
      alt="Docker logo image"
    />,
    <ImageItem
      key={4}
      src="/images/carousel/kubernetes.png"
      alt="Kubernetes logo image"
    />,
    <ImageItem key={5} src="/images/carousel/aws.png" alt="AWS logo image" />,
    <ImageItem
      key={6}
      src="/images/carousel/github.png"
      alt="Github logo image"
    />,
    <ImageItem key={7} src="/images/carousel/jira.png" alt="Jira logo image" />,
  ]

  const loopedItems = [...items, ...items, ...items]
  return (
    <div
      id="stack-container"
      className="flex items-center justify-center w-full bg-opacity-5 bg-primary-300"
    >
      <div id="carousel-container" className="w-full overflow-hidden shadow-lg">
        <div className="flex items-center justify-center w-full animate-smallCarousel md:animate-carousel">
          {loopedItems}
        </div>
      </div>
    </div>
  )
}

export default Stack
