import Image from "next/image"
import style from "./style.module.css"

const Stack = () => {
  const imageItem = (src: string, alt: string, key: number) => (
    <Image
      key={key}
      src={src}
      width="250"
      height="100"
      alt={alt}
      loading={"eager"}
    />
  )

  const items = [
    imageItem("/images/carousel/nestjs.png", "Nestjs logo image", 0),
    imageItem("/images/carousel/nextjs.png", "Nextjs logo image", 1),
    imageItem("/images/carousel/postgre.png", "Postgre logo image", 2),
    imageItem("/images/carousel/docker.png", "Docker logo image", 3),
    imageItem("/images/carousel/kubernetes.png", "Kubernetes logo image", 4),
    imageItem("/images/carousel/aws.png", "AWS logo image", 5),
    imageItem("/images/carousel/github.png", "Github logo image", 6),
    imageItem("/images/carousel/jira.png", "Jira logo image", 7),
  ]

  const loopedItems = [...items, ...items, ...items]
  return (
    <div className={style.container}>
      <div className={style.carouselContainer}>
        <div className="flex items-center justify-center w-full animate-smallCarousel md:animate-carousel">
          {loopedItems.map((item, index) => (
            <div key={index} className={style.item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stack
