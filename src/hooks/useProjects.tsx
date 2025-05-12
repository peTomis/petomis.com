// External Libraries
import Image from "next/image"

// Hooks
import { useTranslations } from "./useTranslations"

// Atoms
import { CarouselElementColor } from "@/ui/atoms/carousel-element-text"

// Icons
import MetchLogo from "@/ui/icons/companies/metch"

// Assets
import metchImage from "@public/images/metch-bg.png"
import collectionManagerImage from "@public/images/151.jpeg"
import { CarouselElementEmployeeTag } from "@/ui/molecules/carousel-element-skewed"

// Images
import anubidigitalBg from "@public/images/anubidigital-bg.webp"
import anubidigitalLogo from "@public/images/anubidigital-logo.svg"
import pienissimoBg from "@public/images/pienissimo-bg.webp"
import pienissimoLogo from "@public/images/pienissimo-logo.webp"

// Icons
import Aws from "@/ui/icons/programming/Aws"
import Docker from "@/ui/icons/programming/Docker"
import GitHub from "@/ui/icons/programming/GitHub"
import Javascript from "@/ui/icons/programming/Javascript"
import Jest from "@/ui/icons/programming/Jest"
import Jira from "@/ui/icons/programming/Jira"
import Kubernetes from "@/ui/icons/programming/Kubernetes"
import Mongodb from "@/ui/icons/programming/Mongodb"
import Nestjs from "@/ui/icons/programming/NestJs"
import Nextjs from "@/ui/icons/programming/Nextjs"
import NodeJs from "@/ui/icons/programming/Nodejs"
import PostgreSQL from "@/ui/icons/programming/Postgres"
import Swift from "@/ui/icons/programming/Swift"
import Typescript from "@/ui/icons/programming/Typescript"
import VsCode from "@/ui/icons/programming/VsCode"
import Xcode from "@/ui/icons/programming/Xcode"

export interface Project {
  image: React.ReactNode
  name: string
  title: JSX.Element
  description: string
  color: CarouselElementColor
  employeeColor?:
    | CarouselElementColor.ANUBIDIGITAL
    | CarouselElementColor.PIENISSIMO
  tasks?: any[]
  website: string
  employeeTag?: CarouselElementEmployeeTag
  tools?: {
    name: string
    icon: React.ReactNode
    url: string
  }[]
  collaborators: { name: string; url: string }[]
  sentences: string[]
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
    sentences: [],
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
    website: process.env.PIENISSIMO ?? "",
    employeeTag: CarouselElementEmployeeTag.RED,
    employeeColor: CarouselElementColor.PIENISSIMO,
    collaborators: [],
    sentences: [
      t("pienissimo.sentences.first"),
      t("pienissimo.sentences.second"),
    ],
    tasks: [
      {
        title: t("pienissimo.tasks.backend.title"),
        description: t("pienissimo.tasks.backend.description"),
      },
      {
        title: t("pienissimo.tasks.newApp.title"),
        description: t("pienissimo.tasks.newApp.description"),
      },
      {
        title: t("pienissimo.tasks.architecture.title"),
        description: t("pienissimo.tasks.architecture.description"),
      },
      {
        title: t("pienissimo.tasks.devops.title"),
        description: t("pienissimo.tasks.devops.description"),
      },
    ],
    tools: [
      {
        name: "Swift",
        icon: <Swift />,
        url: "https://developer.apple.com/swift/",
      },
      {
        name: "Typescript",
        icon: <Typescript />,
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "Nest.js",
        icon: <Nestjs />,
        url: "https://nestjs.com/",
      },
      {
        name: "Node.js",
        icon: <NodeJs />,
        url: "https://nodejs.org/en/",
      },
      {
        name: "AWS",
        icon: <Aws />,
        url: "https://aws.amazon.com/",
      },
      {
        name: "Postgre SQL",
        icon: <PostgreSQL />,
        url: "https://www.postgresql.org/",
      },
      {
        name: "VS Code",
        icon: <VsCode />,
        url: "https://code.visualstudio.com/",
      },
      {
        name: "Xcode",
        icon: <Xcode />,
        url: "https://developer.apple.com/xcode/",
      },
    ],
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
    sentences: [],
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
    website: process.env.ANUBI ?? "",
    employeeTag: CarouselElementEmployeeTag.WHITE,
    employeeColor: CarouselElementColor.ANUBIDIGITAL,
    collaborators: [],
    sentences: [
      t("anubidigital.sentences.first"),
      t("anubidigital.sentences.second"),
    ],
    tasks: [
      {
        title: t("anubidigital.tasks.project.title"),
        description: t("anubidigital.tasks.project.description"),
      },
      {
        title: t("anubidigital.tasks.onboarding.title"),
        description: t("anubidigital.tasks.onboarding.description"),
      },
      {
        title: t("anubidigital.tasks.datawarehouse.title"),
        description: t("anubidigital.tasks.datawarehouse.description"),
      },
      {
        title: t("anubidigital.tasks.backoffice.title"),
        description: t("anubidigital.tasks.backoffice.description"),
      },
      {
        title: t("anubidigital.tasks.rnd.title"),
        description: t("anubidigital.tasks.rnd.description"),
      },
    ],
    tools: [
      {
        name: "Javascript",
        icon: <Javascript />,
        url: "https://www.javascript.com/",
      },
      {
        name: "Typescript",
        icon: <Typescript />,
        url: "https://www.typescriptlang.org/",
      },

      {
        name: "Next.js",
        icon: <Nextjs />,
        url: "https://nextjs.org/",
      },
      {
        name: "Nest.js",
        icon: <Nestjs />,
        url: "https://nestjs.com/",
      },
      {
        name: "Node.js",
        icon: <NodeJs />,
        url: "https://nodejs.org/en/",
      },
      {
        name: "AWS",
        icon: <Aws />,
        url: "https://aws.amazon.com/",
      },
      {
        name: "Docker",
        icon: <Docker />,
        url: "https://www.docker.com/",
      },
      {
        name: "Postgre SQL",
        icon: <PostgreSQL />,
        url: "https://www.postgresql.org/",
      },
      {
        name: "Jest",
        icon: <Jest />,
        url: "https://jestjs.io/",
      },
      {
        name: "VS Code",
        icon: <VsCode />,
        url: "https://code.visualstudio.com/",
      },
      {
        name: "GitHub",
        icon: <GitHub />,
        url: "https://github.com",
      },
      {
        name: "Jira",
        icon: <Jira />,
        url: "https://www.atlassian.com/software/jira",
      },
      {
        name: "MongoDB",
        icon: <Mongodb />,
        url: "https://www.mongodb.com/",
      },
      {
        name: "Kubernetes",
        icon: <Kubernetes />,
        url: "https://kubernetes.io/",
      },
    ],
  }

  return [collectionmanager, pienissimo, metch, anubidigital]
}
