import image from "@public/images/profile_picture.png"
import image2 from "@public/images/profile_picture_2.png"
import imageBlu from "@public/images/profile_picture_blu.png"
import link from "@public/images/link.png"
import link2 from "@public/images/link_2.png"
import linkBlu from "@public/images/link_blu.png"
import map from "@public/images/map.png"
import map2 from "@public/images/map_2.png"
import mapBlu from "@public/images/map_blu.png"
import phone from "@public/images/phone.png"
import phone2 from "@public/images/phone_2.png"
import phoneBlu from "@public/images/phone_blu.png"
import email from "@public/images/mail.png"
import email2 from "@public/images/mail_2.png"
import emailBlu from "@public/images/mail_blu.png"
import logo from "@public/images/logo.png"
import pienissimoLogoBlu from "@public/images/pienissimo_logo_blu.png"
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
      <Image
        src={image2}
        alt="Profile picture"
        loading="eager"
        priority={true}
        width={1000}
        height={1000}
      />
      <Image
        src={link2}
        alt="Link icon"
        loading="eager"
        priority={true}
        width={50}
        height={50}
      />
      <Image
        src={map2}
        alt="Map icon"
        loading="eager"
        priority={true}
        width={50}
        height={50}
      />
      <Image
        src={phone2}
        alt="Phone icon"
        loading="eager"
        priority={true}
        width={50}
        height={50}
      />
      <Image
        src={email2}
        alt="Mail icon"
        loading="eager"
        priority={true}
        width={50}
        height={50}
      />
      <Image
        src={logo}
        alt="Petomis logo"
        loading="eager"
        priority={true}
        width={256}
        height={64}
      />
      <Image
        src={imageBlu}
        alt="Profile picture"
        loading="eager"
        priority={true}
        width={1000}
        height={1000}
      />
      <Image
        src={linkBlu}
        alt="Link icon"
        loading="eager"
        priority={true}
        width={50}
        height={50}
      />
      <Image
        src={mapBlu}
        alt="Map icon"
        loading="eager"
        priority={true}
        width={50}
        height={50}
      />
      <Image
        src={phoneBlu}
        alt="Phone icon"
        loading="eager"
        priority={true}
        width={50}
        height={50}
      />
      <Image
        src={emailBlu}
        alt="Mail icon"
        loading="eager"
        priority={true}
        width={50}
        height={50}
      />
      <Image
        src={pienissimoLogoBlu}
        alt="Pienissimo logo"
        loading="eager"
        priority={true}
        width={512}
        height={128}
      />
    </>
  )
}

export default ProfilePicture
