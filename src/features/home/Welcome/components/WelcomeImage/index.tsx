import Image from "next/image"
import style from "./style.module.css"
import socialImage from "@public/images/social.png"
import wordCloudImage from "@public/images/word-cloud.png"
import institutionalImage from "@public/images/institutional.png"

const WelcomeImage = () => {
  return (
    <div className={style.container}>
      <div className={style.mainImage}>
        <Image
          src={wordCloudImage}
          alt="Main image"
          placeholder="blur"
          loading="eager"
          priority={true}
          width={400}
          height={400}
        />
      </div>
      <div className={style.firstImage}>
        <Image
          src={institutionalImage}
          alt="Institutional image of the author"
          placeholder="blur"
          priority={true}
          width={200}
          height={200}
        />
      </div>
      <div className={style.secondImage} />
      <div className={style.thirdImage} />
      <div className={style.forthImage}>
        <Image
          src={socialImage}
          alt="Social image of the author"
          placeholder="blur"
          priority={true}
          width={250}
          height={250}
        />
      </div>
    </div>
  )
}

export default WelcomeImage
