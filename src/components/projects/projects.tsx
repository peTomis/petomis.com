// External Libraries
import { StaticImageData } from "next/image"

// Atoms
import { CarouselElementColor } from "@/ui/atoms/carousel-element-text"

// Icons
import MetchLogo from "@/ui/icons/companies/metch_"

// Assets
import metchImage from "@public/images/metch-bg.png"

interface Project {
  src: StaticImageData
  name: string
  title: JSX.Element
  description: string
  color: CarouselElementColor
  website: string
}

const metch: Project = {
  src: metchImage,
  name: "Metch",
  title: (
    <div className="w-[200px] lg:w-[300px]">
      <MetchLogo />
    </div>
  ),
  description:
    "The game Changer! Match is a platform that aims to make the process of finding talents and teams in the gaming sector simple and efficient.",
  color: CarouselElementColor.RED,
  website: process.env.METCH_GG ?? "",
}

export const projects: Project[] = [metch]
