import Image from "next/image"
import style from "./style.module.css"

const Stack = () => {
  const items = [
    <Image
      key={0}
      src="/images/carousel/nextjs.png"
      width="250"
      height="100"
      alt="Nextjs logo image"
    />,
    <Image
      key={1}
      src="/images/carousel/nestjs.png"
      width="250"
      height="100"
      alt="Nestjs logo image"
    />,
    <Image
      key={2}
      src="/images/carousel/postgre.png"
      width="250"
      height="100"
      alt="Postgre logo image"
    />,
    <Image
      key={3}
      src="/images/carousel/docker.png"
      width="250"
      height="100"
      alt="Docker logo image"
    />,
    <Image
      key={4}
      src="/images/carousel/kubernetes.png"
      width="250"
      height="100"
      alt="Kubernetes logo image"
    />,
    <Image
      key={5}
      src="/images/carousel/aws.png"
      width="250"
      height="100"
      alt="AWS logo image"
    />,
    <Image
      key={6}
      src="/images/carousel/github.png"
      width="250"
      height="100"
      alt="Github logo image"
    />,
    <Image
      key={7}
      src="/images/carousel/jira.png"
      width="250"
      height="100"
      alt="Jira logo image"
    />,
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
