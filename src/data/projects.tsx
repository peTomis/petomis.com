// External Libraries
import Image from "next/image"

// Config
import { projectWebsites } from "@/config/site"

// Atoms / molecules
import {
  CarouselElementColor,
  type EmployeeColor,
} from "@/ui/atoms/carousel-element-text"
import { CarouselElementEmployeeTag } from "@/ui/molecules/carousel-element-skewed"

// Company / tech icons
import MetchLogo from "@/ui/icons/companies/metch"
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

// Images
import metchImage from "@public/images/metch-bg.png"
import collectionManagerImage from "@public/images/151.jpeg"
import anubidigitalBg from "@public/images/anubidigital-bg.webp"
import anubidigitalLogo from "@public/images/anubidigital-logo.svg"
import pienissimoBg from "@public/images/pienissimo-bg.webp"
import pienissimoLogo from "@public/images/pienissimo-logo.webp"

export interface ProjectTask {
  title: string
  description: string
}

export interface ProjectTool {
  name: string
  icon: React.ReactNode
  url: string
}

export interface ProjectCollaborator {
  name: string
  url: string
}

/**
 * Fully resolved project, with every user-facing string already translated.
 * This is what {@link useProjects} returns and what the carousel renders.
 */
export interface Project {
  image: React.ReactNode
  name: string
  title: JSX.Element
  description: string
  color: CarouselElementColor
  employeeColor?: EmployeeColor
  tasks?: ProjectTask[]
  website: string
  employeeTag?: CarouselElementEmployeeTag
  tools?: ProjectTool[]
  collaborators: ProjectCollaborator[]
  sentences: string[]
}

/**
 * Static, translation-independent description of a project. `useProjects`
 * overlays the translated `description`, `sentences` and `tasks` on top of this.
 */
export interface ProjectStatic {
  name: string
  image: React.ReactNode
  title: JSX.Element
  color: CarouselElementColor
  website: string
  collaborators: ProjectCollaborator[]
  /** i18n key (namespace: "jobs") for the short card description. */
  descriptionKey: string
  /** i18n keys for the sentences shown in the expanded detail view. */
  sentenceKeys: string[]
  /**
   * i18n key prefixes for the tasks in the expanded detail view; each resolves
   * to `${key}.title` and `${key}.description`.
   */
  taskKeys: string[]
  tools?: ProjectTool[]
  employeeTag?: CarouselElementEmployeeTag
  employeeColor?: EmployeeColor
}

/** Shared registry of tech tools, so repeated entries are declared once. */
const tools = {
  aws: { name: "AWS", icon: <Aws />, url: "https://aws.amazon.com/" },
  docker: { name: "Docker", icon: <Docker />, url: "https://www.docker.com/" },
  github: { name: "GitHub", icon: <GitHub />, url: "https://github.com" },
  javascript: {
    name: "Javascript",
    icon: <Javascript />,
    url: "https://www.javascript.com/",
  },
  jest: { name: "Jest", icon: <Jest />, url: "https://jestjs.io/" },
  jira: {
    name: "Jira",
    icon: <Jira />,
    url: "https://www.atlassian.com/software/jira",
  },
  kubernetes: {
    name: "Kubernetes",
    icon: <Kubernetes />,
    url: "https://kubernetes.io/",
  },
  mongodb: {
    name: "MongoDB",
    icon: <Mongodb />,
    url: "https://www.mongodb.com/",
  },
  nestjs: { name: "Nest.js", icon: <Nestjs />, url: "https://nestjs.com/" },
  nextjs: { name: "Next.js", icon: <Nextjs />, url: "https://nextjs.org/" },
  nodejs: { name: "Node.js", icon: <NodeJs />, url: "https://nodejs.org/en/" },
  postgres: {
    name: "Postgre SQL",
    icon: <PostgreSQL />,
    url: "https://www.postgresql.org/",
  },
  swift: {
    name: "Swift",
    icon: <Swift />,
    url: "https://developer.apple.com/swift/",
  },
  typescript: {
    name: "Typescript",
    icon: <Typescript />,
    url: "https://www.typescriptlang.org/",
  },
  vscode: {
    name: "VS Code",
    icon: <VsCode />,
    url: "https://code.visualstudio.com/",
  },
  xcode: {
    name: "Xcode",
    icon: <Xcode />,
    url: "https://developer.apple.com/xcode/",
  },
} satisfies Record<string, ProjectTool>

const collectionManager: ProjectStatic = {
  name: "Collection Manager",
  image: (
    <Image
      src={collectionManagerImage}
      className="-z-10"
      alt="Collection Manager Background"
      width={320}
    />
  ),
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
      <div className="font-bold font-orbitron text-h6">Collection Manager</div>
    </div>
  ),
  color: CarouselElementColor.BLUE,
  website: projectWebsites.collectionManager,
  collaborators: [],
  descriptionKey: "projects.collectionmanager.description",
  sentenceKeys: [],
  taskKeys: [],
}

const pienissimo: ProjectStatic = {
  name: "Pienissimo",
  image: (
    <Image
      src={pienissimoBg}
      className="-z-10"
      alt="Collection Manager Background"
      width={320}
    />
  ),
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
  color: CarouselElementColor.PIENISSIMO,
  website: projectWebsites.pienissimo,
  collaborators: [],
  employeeTag: CarouselElementEmployeeTag.RED,
  employeeColor: CarouselElementColor.PIENISSIMO,
  descriptionKey: "projects.pienissimo.description",
  sentenceKeys: [
    "pienissimo.sentences.first",
    "pienissimo.sentences.second",
  ],
  taskKeys: [
    "pienissimo.tasks.backend",
    "pienissimo.tasks.newApp",
    "pienissimo.tasks.architecture",
    "pienissimo.tasks.devops",
  ],
  tools: [
    tools.swift,
    tools.typescript,
    tools.nestjs,
    tools.nodejs,
    tools.aws,
    tools.postgres,
    tools.vscode,
    tools.xcode,
  ],
}

const metch: ProjectStatic = {
  name: "Metch",
  image: (
    <Image
      src={metchImage}
      className="object-cover -z-10"
      alt="Metch Background"
      width={320}
    />
  ),
  title: (
    <div className="w-[160px]">
      <MetchLogo />
    </div>
  ),
  color: CarouselElementColor.RED,
  website: projectWebsites.metch,
  collaborators: [{ name: "D4NNN", url: "https://github.com/D4NNN" }],
  descriptionKey: "projects.metch.description",
  sentenceKeys: [],
  taskKeys: [],
}

const anubidigital: ProjectStatic = {
  name: "Anubidigital",
  image: (
    <Image
      src={anubidigitalBg}
      className="object-cover -z-10"
      alt="Anubidigital Logo"
      width={320}
    />
  ),
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
  color: CarouselElementColor.ANUBIDIGITAL,
  website: projectWebsites.anubidigital,
  collaborators: [],
  employeeTag: CarouselElementEmployeeTag.WHITE,
  employeeColor: CarouselElementColor.ANUBIDIGITAL,
  descriptionKey: "projects.anubidigital.description",
  sentenceKeys: [
    "anubidigital.sentences.first",
    "anubidigital.sentences.second",
  ],
  taskKeys: [
    "anubidigital.tasks.project",
    "anubidigital.tasks.onboarding",
    "anubidigital.tasks.datawarehouse",
    "anubidigital.tasks.backoffice",
    "anubidigital.tasks.rnd",
  ],
  tools: [
    tools.javascript,
    tools.typescript,
    tools.nextjs,
    tools.nestjs,
    tools.nodejs,
    tools.aws,
    tools.docker,
    tools.postgres,
    tools.jest,
    tools.vscode,
    tools.github,
    tools.jira,
    tools.mongodb,
    tools.kubernetes,
  ],
}

/** Projects in carousel display order. */
export const projectsData: ProjectStatic[] = [
  collectionManager,
  pienissimo,
  metch,
  anubidigital,
]
