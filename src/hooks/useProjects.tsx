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
import { CarouselElementEmployeeTag } from "@/ui/molecules/carousel-element-skewed"

// Images
import anubidigitalBg from "@public/images/anubidigital-bg.webp"
import anubidigitalLogo from "@public/images/anubidigital-logo.svg"
import pienissimoBg from "@public/images/pienissimo-bg.webp"
import pienissimoLogo from "@public/images/pienissimo-logo.webp"

interface Project {
  image: React.ReactNode
  name: string
  title: JSX.Element
  description: string
  color: CarouselElementColor
  website: string
  employeeTag?: CarouselElementEmployeeTag
  collaborators: { name: string; url: string }[]
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
        <div className="font-bold font-orbitron text-h6">
          Collection Manager
        </div>
      </div>
    ),
    description: t("projects.collectionmanager.description"),
    color: CarouselElementColor.BLUE,
    website: process.env.COLLECTIONMANAGER ?? "",
    collaborators: [],
  }

  const pienissimo: Project = {
    image: (
      <Image
        src={pienissimoBg}
        className="-z-10"
        alt="Collection Manager Background"
        width={320}
      />
    ),
    name: "Pienissimo",
    title: (
      <div className="w-[160px]">
        <Image
          src={pienissimoLogo}
          className="object-cover -z-10"
          alt="Pienissimo Logo"
          width={160}
        />
      </div>
    ),
    description: t("projects.pienissimo.description"),
    color: CarouselElementColor.PIENISSIMO,
    website: "/pienissimo",
    employeeTag: CarouselElementEmployeeTag.RED,
    collaborators: [],
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
    collaborators: [
      {
        name: "D4NNN",
        url: "https://github.com/D4NNN",
      },
    ],
  }

  const anubidigital: Project = {
    image: (
      <Image
        src={anubidigitalBg}
        className="object-cover -z-10"
        alt="Anubidigital Logo"
        width={320}
      />
    ),
    name: "Anubidigital",
    title: (
      <div className="w-[160px]">
        <Image
          src={anubidigitalLogo}
          className="object-cover -z-10"
          alt="Anubidigital Logo"
          width={160}
        />
      </div>
    ),
    description: t("projects.anubidigital.description"),
    color: CarouselElementColor.ANUBIDIGITAL,
    website: "/anubidigital",
    employeeTag: CarouselElementEmployeeTag.WHITE,
    collaborators: [],
  }

  return [collectionmanager, pienissimo, metch, anubidigital]
}
