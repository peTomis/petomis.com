import Image from "next/image"
import style from "./style.module.css"

interface Props {
  halfWidth: number
}

const MAIN_IMAGE_RATIO = (0.95 * 2) / 3
const MAIN_IMAGE_OFFSET = 0.95 / 6
const FIRST_IMAGE_RATIO = 0.95 / 4
const SECOND_IMAGE_RATIO = (0.95 * 5) / 12
const SECOND_IMAGE_OFFSET = 0.95 / 48
const THIRD_IMAGE_RATIO = 0.95 / 3
const THIRD_IMAGE_OFFSET = 0.95 / 24
const FOURTH_IMAGE_RATIO = 0.95 / 3

const WelcomeImage = ({ halfWidth }: Props) => {
  const isXl = 2 * halfWidth > 1280
  const isLg = 2 * halfWidth > 1024
  const isMobile = 2 * halfWidth < 500

  const width = !isMobile ? halfWidth : 1.5 * halfWidth

  const containerStyle = {
    width: `${
      isXl ? 640 * 0.95 : isLg || isMobile ? width * 0.95 : 488 * 0.95
    }px`,
    height: `${
      isXl ? 640 * 0.95 : isLg || isMobile ? width * 0.95 : 488 * 0.95
    }px`,
  }

  const mainImageStyle = {
    width: `${
      isXl
        ? 640 * MAIN_IMAGE_RATIO
        : isLg || isMobile
        ? width * MAIN_IMAGE_RATIO
        : 488 * MAIN_IMAGE_RATIO
    }px`,
    height: `${
      isXl
        ? 640 * MAIN_IMAGE_RATIO
        : isLg || isMobile
        ? width * MAIN_IMAGE_RATIO
        : 488 * MAIN_IMAGE_RATIO
    }px`,
    top: `${
      isXl
        ? 640 * MAIN_IMAGE_OFFSET
        : isLg || isMobile
        ? width * MAIN_IMAGE_OFFSET
        : 488 * MAIN_IMAGE_OFFSET
    }px`,
    left: `${
      isXl
        ? (640 * MAIN_IMAGE_OFFSET * 2) / 3
        : isLg || isMobile
        ? (width * MAIN_IMAGE_OFFSET * 2) / 3
        : (488 * MAIN_IMAGE_OFFSET * 2) / 3
    }px`,
  }

  const firstImageStyle = {
    width: `${
      isXl
        ? 640 * FIRST_IMAGE_RATIO
        : isLg || isMobile
        ? width * FIRST_IMAGE_RATIO
        : 488 * FIRST_IMAGE_RATIO
    }px`,
    height: `${
      isXl
        ? 640 * FIRST_IMAGE_RATIO
        : isLg || isMobile
        ? width * FIRST_IMAGE_RATIO
        : 488 * FIRST_IMAGE_RATIO
    }px`,
    top: `0px`,
    left: `0px`,
  }

  const secondImageStyle = {
    width: `${
      isXl
        ? 640 * SECOND_IMAGE_RATIO
        : isLg || isMobile
        ? width * SECOND_IMAGE_RATIO
        : 488 * SECOND_IMAGE_RATIO
    }px`,
    height: `${
      isXl
        ? 640 * SECOND_IMAGE_RATIO
        : isLg || isMobile
        ? width * SECOND_IMAGE_RATIO
        : 488 * SECOND_IMAGE_RATIO
    }px`,
    top: `${
      isXl
        ? 640 * SECOND_IMAGE_OFFSET
        : isLg || isMobile
        ? width * SECOND_IMAGE_OFFSET
        : 488 * SECOND_IMAGE_OFFSET
    }px`,
    right: `${
      isXl
        ? 640 * SECOND_IMAGE_OFFSET
        : isLg || isMobile
        ? width * SECOND_IMAGE_OFFSET
        : 488 * SECOND_IMAGE_OFFSET
    }px`,
  }

  const thirdImageStyle = {
    width: `${
      isXl
        ? 640 * THIRD_IMAGE_RATIO
        : isLg || isMobile
        ? width * THIRD_IMAGE_RATIO
        : 488 * THIRD_IMAGE_RATIO
    }px`,
    height: `${
      isXl
        ? 640 * THIRD_IMAGE_RATIO
        : isLg || isMobile
        ? width * THIRD_IMAGE_RATIO
        : 488 * THIRD_IMAGE_RATIO
    }px`,
    left: `${
      isXl
        ? 640 * THIRD_IMAGE_OFFSET
        : isLg || isMobile
        ? width * THIRD_IMAGE_OFFSET
        : 488 * THIRD_IMAGE_OFFSET
    }px`,
    bottom: `${
      isXl
        ? 640 * THIRD_IMAGE_OFFSET
        : isLg || isMobile
        ? width * THIRD_IMAGE_OFFSET
        : 488 * THIRD_IMAGE_OFFSET
    }px`,
  }

  const forthImageStyle = {
    width: `${
      isXl
        ? 640 * FOURTH_IMAGE_RATIO
        : isLg || isMobile
        ? width * FOURTH_IMAGE_RATIO
        : 488 * FOURTH_IMAGE_RATIO
    }px`,
    height: `${
      isXl
        ? 640 * FOURTH_IMAGE_RATIO
        : isLg || isMobile
        ? width * FOURTH_IMAGE_RATIO
        : 488 * FOURTH_IMAGE_RATIO
    }px`,
    bottom: `0px`,
    right: `0px`,
  }

  return (
    <div className={style.container} style={containerStyle}>
      <div className={style.mainImage} style={mainImageStyle}>
        <Image
          src={"/images/WordCloud.png"}
          alt="Main"
          width={
            isXl
              ? 640 * MAIN_IMAGE_RATIO
              : isLg
              ? width * MAIN_IMAGE_RATIO
              : 488 * MAIN_IMAGE_RATIO
          }
          height={
            isXl
              ? 640 * MAIN_IMAGE_RATIO
              : isLg
              ? width * MAIN_IMAGE_RATIO
              : 488 * MAIN_IMAGE_RATIO
          }
        />
      </div>
      <div className={style.firstImage} style={firstImageStyle}>
        <Image
          src={"/images/Social.jpg"}
          alt="Social"
          width={
            isXl
              ? 640 * FIRST_IMAGE_RATIO
              : isLg || isMobile
              ? width * FIRST_IMAGE_RATIO
              : 488 * FIRST_IMAGE_RATIO
          }
          height={
            isXl
              ? 640 * FIRST_IMAGE_RATIO
              : isLg || isMobile
              ? width * FIRST_IMAGE_RATIO
              : 488 * FIRST_IMAGE_RATIO
          }
        />
      </div>
      <div className={style.secondImage} style={secondImageStyle} />
      <div className={style.thirdImage} style={thirdImageStyle} />
      <div className={style.forthImage} style={forthImageStyle}>
        <Image
          src={"/images/Institutional.jpeg"}
          alt="Institutional"
          width={
            isXl
              ? 640 * THIRD_IMAGE_RATIO
              : isLg || isMobile
              ? width * THIRD_IMAGE_RATIO
              : 488 * THIRD_IMAGE_RATIO
          }
          height={
            isXl
              ? 640 * THIRD_IMAGE_RATIO
              : isLg || isMobile
              ? width * THIRD_IMAGE_RATIO
              : 488 * THIRD_IMAGE_RATIO
          }
        />
      </div>
    </div>
  )
}

export default WelcomeImage
