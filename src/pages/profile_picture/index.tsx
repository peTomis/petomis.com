import image from "@public/images/profile_picture.png"
import link from "@public/images/link.png"
import map from "@public/images/map.png"
import phone from "@public/images/phone.png"
import email from "@public/images/mail.png"
import Image from "next/image"

import { NextPage } from "next"

const ProfilePicture: NextPage = () => {
  return (
    <>
      <Image
        src={image}
        alt="Profile picture"
        loading="eager"
        priority={true}
        width={1000}
        height={1000}
      />
      <Image
        src={link}
        alt="Link icon"
        loading="eager"
        priority={true}
        width={50}
        height={50}
      />
      <Image
        src={map}
        alt="Map icon"
        loading="eager"
        priority={true}
        width={50}
        height={50}
      />
      <Image
        src={phone}
        alt="Phone icon"
        loading="eager"
        priority={true}
        width={50}
        height={50}
      />
      <Image
        src={email}
        alt="Mail icon"
        loading="eager"
        priority={true}
        width={50}
        height={50}
      />
    </>
  )
}

export default ProfilePicture
