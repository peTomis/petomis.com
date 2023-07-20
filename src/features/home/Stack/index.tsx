import Image from "next/image"
import style from "./style.module.css"
import React from "react"

interface ImageItemProps {
  src: string
  alt: string
  key: number
}

const ImageItem: React.FC<ImageItemProps> = ({ src, alt }) => (
  <div className={style.item}>
    <div className={style.imageContainer}>
      <Image src={src} alt={alt} layout="fill" className={style.img} />
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
    <div className={style.container}>
      <div className={style.carouselContainer}>
        <div className="flex items-center justify-center w-full animate-smallCarousel md:animate-carousel">
          {loopedItems}
        </div>
      </div>
    </div>
  )
}

export default Stack
