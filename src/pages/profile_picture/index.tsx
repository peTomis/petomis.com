import image from "@public/images/profile_picture.jpg"
import Image from "next/image"

import { NextPage } from "next"

const ProfilePicture: NextPage = () => {
  return (
    <>
      {" "}
      <Image
        src={image}
        alt="Main image"
        loading="eager"
        priority={true}
        width={1000}
        height={1000}
      />
    </>
  )
}

export default ProfilePicture
