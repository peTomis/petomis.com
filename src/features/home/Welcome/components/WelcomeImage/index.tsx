import Image from "next/image"
import style from "./style.module.css"

interface Props {
  halfWidth: number
}

const WelcomeImage = ({ halfWidth }: Props) => {
  return (
    <div className={style.container}>
      <div className={style.mainImage}>
        <Image
          src={"/images/Colorful.png"}
          alt="Main"
          width={400}
          height={400}
        />
      </div>
      <div className={style.firstImage}>
        <Image
          src={"/images/Institutional.jpeg"}
          alt="Social"
          width={200}
          height={200}
        />
      </div>
      <div className={style.secondImage} />
      <div className={style.thirdImage} />
      <div className={style.forthImage}>
        <Image
          src={"/images/Social.jpg"}
          alt="Institutional"
          width={250}
          height={250}
        />
      </div>
    </div>
  )
}

export default WelcomeImage
