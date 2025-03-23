// External Libraries
import Image from "next/image"

// Hooks
import { useTranslations } from "./useTranslations"

// Atoms
import { CarouselElementColor } from "@/ui/atoms/carousel-element-text"

// Icons
import MetchLogo from "@/ui/icons/companies/metch_"

// Assets
import metchImage from "@public/images/metch-bg.png"
import collectionManagerImage from "@public/images/151.jpeg"

interface Project {
  image: React.ReactNode
  name: string
  title: JSX.Element
  description: string
  color: CarouselElementColor
  website: string
}

export function useProjects(): Project[] {
  const { t } = useTranslations("jobs")

  const collectionmanager: Project = {
    image: (
      <Image
        src={collectionManagerImage}
        className="-z-10"
        alt="Collection Manager Background"
        width={320}
      />
    ),
    name: "Collection Manager",
    title: (
      <div className="flex flex-col w-full">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            viewBox="-0.5 -0.5 16 16"
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M1.875 7.5a5.625 5.625 0 1 0 11.25 0 5.625 5.625 0 1 0 -11.25 0"
              strokeWidth="1"
            ></path>
            <path
              d="M5.625 7.5a1.875 1.875 0 1 0 3.75 0 1.875 1.875 0 1 0 -3.75 0"
              strokeWidth="1"
            ></path>
            <path d="M1.875 7.5h3.75" strokeWidth="1"></path>
            <path d="M9.375 7.5h3.75" strokeWidth="1"></path>
          </svg>
        </div>
        <div className="font-bold text-h6">Collection Manager</div>
      </div>
    ),
    description: t("projects.collectionmanager.description"),
    color: CarouselElementColor.BLUE,
    website: process.env.COLLECTIONMANAGER ?? "",
  }

  const metch: Project = {
    image: (
      <Image
        src={metchImage}
        className="object-cover -z-10"
        alt="Metch Background"
        width={320}
      />
    ),
    name: "Metch",
    title: (
      <div className="w-[160px]">
        <MetchLogo />
      </div>
    ),
    description: t("projects.metch.description"),
    color: CarouselElementColor.RED,
    website: process.env.METCH_GG ?? "",
  }

  return [collectionmanager, metch]
}
