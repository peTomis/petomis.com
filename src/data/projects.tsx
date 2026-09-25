// External Libraries
import Image, { type StaticImageData } from "next/image"

// Config
import { projectWebsites } from "@/config/site"

// Data
import { ProjectColor, type EmployeeColor } from "@/data/projectColors"

// Company / tech icons
import MetchLogo from "@/ui/icons/companies/metch"
import Inventory2 from "@/ui/icons/inventory-2"
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
import anubidigitalLogoBlack from "@public/images/anubidigital-logo-black.svg"
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
  /** Card background image, shown over the brand `color`. */
  background: StaticImageData
  name: string
  /** Project logo (details modal, and the card unless `logo` is set). */
  title: JSX.Element
  /** Card-only logo, when the card background needs a different variant. */
  logo?: JSX.Element
  description: string
  color: ProjectColor
  employeeColor?: EmployeeColor
  tasks?: ProjectTask[]
  website: string
  /** A job (vs a personal project): the card opens the details modal. */
  employee?: boolean
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
  background: StaticImageData
  title: JSX.Element
  logo?: JSX.Element
  color: ProjectColor
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
  employee?: boolean
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
  background: collectionManagerImage,
  title: (
    <div className="flex flex-col w-full">
      <div className="flex justify-center">
        <Inventory2 />
      </div>
      <div className="font-bold text-center font-orbitron text-h6">
        Collection Manager
      </div>
    </div>
  ),
  color: ProjectColor.BLUE,
  website: projectWebsites.collectionManager,
  collaborators: [],
  descriptionKey: "projects.collectionmanager.description",
  sentenceKeys: [],
  taskKeys: [],
}

const pienissimo: ProjectStatic = {
  name: "Pienissimo",
  background: pienissimoBg,
  title: (
    <div className="w-[160px]">
      <span className="sr-only">Pienissimo</span>
      <Image
        src={pienissimoLogo}
        className="object-cover -z-10"
        alt="Pienissimo Logo"
        width={160}
      />
    </div>
  ),
  color: ProjectColor.PIENISSIMO,
  website: projectWebsites.pienissimo,
  collaborators: [],
  employee: true,
  employeeColor: ProjectColor.PIENISSIMO,
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
  background: metchImage,
  title: (
    <div className="w-[160px]">
      <span className="sr-only">Metch</span>
      <MetchLogo />
    </div>
  ),
  color: ProjectColor.RED,
  website: projectWebsites.metch,
  collaborators: [{ name: "D4NNN", url: "https://github.com/D4NNN" }],
  descriptionKey: "projects.metch.description",
  sentenceKeys: [],
  taskKeys: [],
}

const anubidigital: ProjectStatic = {
  name: "Anubidigital",
  background: anubidigitalBg,
  title: (
    <div className="w-[160px]">
      <span className="sr-only">Anubidigital</span>
      <Image
        src={anubidigitalLogo}
        className="object-cover -z-10"
        alt="Anubidigital Logo"
        width={160}
      />
    </div>
  ),
  // "digital" in black on the card's lighter background; the modal's darker
  // red keeps the original red wordmark (`title`).
  logo: (
    <div className="w-[160px]">
      <span className="sr-only">Anubidigital</span>
      <Image
        src={anubidigitalLogoBlack}
        className="object-cover"
        alt="Anubidigital Logo"
        width={160}
      />
    </div>
  ),
  color: ProjectColor.ANUBIDIGITAL,
  website: projectWebsites.anubidigital,
  collaborators: [],
  employee: true,
  employeeColor: ProjectColor.ANUBIDIGITAL,
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

/** Projects in display order. */
export const projectsData: ProjectStatic[] = [
  pienissimo,
  anubidigital,
  metch,
  collectionManager,
]
