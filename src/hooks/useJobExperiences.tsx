// External Libraries
import Image from "next/image"

// Hooks
import { useTranslations } from "./useTranslations"

// Utils
import { ActivityColorVariant } from "@/utils"

// Images
import anubidigitalLogo from "@public/images/anubidigital-logo.svg"
import pienissimoLogo from "@public/images/pienissimo-logo.webp"

// Atoms
import Typography from "@/ui/atoms/typography"

// Icons
import { ExperienceBackground } from "@/ui/organisms/experience-element"
import AndroidStudio from "@/ui/icons/programming/AndroidStudio"
import Aws from "@/ui/icons/programming/Aws"
import Docker from "@/ui/icons/programming/Docker"
import Firebase from "@/ui/icons/programming/Firebase"
import GitHub from "@/ui/icons/programming/GitHub"
import Java from "@/ui/icons/programming/Java"
import Javascript from "@/ui/icons/programming/Javascript"
import Jest from "@/ui/icons/programming/Jest"
import Jira from "@/ui/icons/programming/Jira"
import Kotlin from "@/ui/icons/programming/Kotlin"
import Kubernetes from "@/ui/icons/programming/Kubernetes"
import Mongodb from "@/ui/icons/programming/Mongodb"
import Nestjs from "@/ui/icons/programming/NestJs"
import Nextjs from "@/ui/icons/programming/Nextjs"
import NodeJs from "@/ui/icons/programming/Nodejs"
import PostgreSQL from "@/ui/icons/programming/Postgre"
import Swift from "@/ui/icons/programming/Swift"
import Typescript from "@/ui/icons/programming/Typescript"
import VsCode from "@/ui/icons/programming/VsCode"
import Xcode from "@/ui/icons/programming/Xcode"
import { WorkExperienceTaskItem } from "@/ui/organisms/work-experience-tasks"
import { WorkExperienceTool } from "@/ui/organisms/work-experience-tools"

export interface WorkExperience {
  job: string
  variant: ActivityColorVariant
  date: string
  background: ExperienceBackground
  image: () => React.ReactNode
  experiences: PersonalExperience[]
  tasks: WorkExperienceTaskItem[]
  sentences: string[]
  tools: WorkExperienceTool[]
}

export interface PersonalExperience {
  name: string
  icon: JSX.Element
  url: string
}

export function useJobExperiences(): WorkExperience[] {
  const { t } = useTranslations("jobs")

  const pienissimo: WorkExperience = {
    job: "Software Developer",
    date: "2024 - today",
    background: "bg-red-300",
    variant: ActivityColorVariant.PIENISSIMO,
    image: () => (
      <div className="h-[36px] items-center flex">
        <Image
          src={pienissimoLogo}
          className="object-cover"
          alt=""
          width={140}
          height={300}
        />
      </div>
    ),
    tasks: [],
    sentences: [
      t("pienissimo.sentences.first"),
      t("pienissimo.sentences.second"),
    ],
    tools: [
      {
        list: t("pienissimo.tools.other.list"),
      },
      {
        category: t("pienissimo.tools.backend.title") ?? "",
        list: t("pienissimo.tools.backend.list"),
      },
      {
        category: t("pienissimo.tools.frontend-mobile.title") ?? "",
        list: t("pienissimo.tools.frontend-mobile.list"),
      },
    ],
    experiences: [
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

  const anubidigital: WorkExperience = {
    job: "Fullstack Developer",
    date: "2022 - 2024",
    background: "bg-black",
    variant: ActivityColorVariant.ANUBIDIGITAL,
    image: () => (
      <div className="h-[36px] items-center flex">
        <Image
          src={anubidigitalLogo}
          className="object-cover"
          alt=""
          width={140}
          height={300}
        />
      </div>
    ),
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
    sentences: [
      t("anubidigital.sentences.first"),
      t("anubidigital.sentences.second"),
    ],
    tools: [
      {
        list: t("anubidigital.tools.other.list"),
      },
      {
        category: t("anubidigital.tools.backend.title") ?? "",
        list: t("anubidigital.tools.backend.list"),
      },
      {
        category: t("anubidigital.tools.frontend.title") ?? "",
        list: t("anubidigital.tools.frontend.list"),
      },
    ],
    experiences: [
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

  const freelanceMobileDeveloper: WorkExperience = {
    job: "Mobile Developer",
    date: "2020 - 2022",
    background: "bg-primary-400",
    variant: ActivityColorVariant.MOBILE,
    image: () => (
      <Typography
        extrabold
        size="h5"
        md="h4"
        light
        text={"Freelance".toUpperCase()}
      />
    ),
    tasks: [
      {
        title: t("mobile.tasks.management.title"),
        description: t("mobile.tasks.management.description"),
      },
      {
        title: t("mobile.tasks.design.title"),
        description: t("mobile.tasks.design.description"),
      },
      {
        title: t("mobile.tasks.integration.title"),
        description: t("mobile.tasks.integration.description"),
      },
      {
        title: t("mobile.tasks.implementation.title"),
        description: t("mobile.tasks.implementation.description"),
      },
    ],
    sentences: [t("mobile.sentences.first"), t("mobile.sentences.second")],
    tools: [
      {
        list: t("mobile.tools.cross.list"),
      },
      {
        category: t("mobile.tools.android.title") ?? "",
        list: t("mobile.tools.android.list"),
      },
      {
        category: t("mobile.tools.ios.title") ?? "",
        list: t("mobile.tools.ios.list"),
      },
    ],
    experiences: [
      {
        name: "Java",
        icon: <Java />,
        url: "https://www.oracle.com/java/",
      },
      {
        name: "Kotlin",
        icon: <Kotlin />,
        url: "https://kotlinlang.org/",
      },
      {
        name: "Swift",
        icon: <Swift />,
        url: "https://developer.apple.com/swift/",
      },
      {
        name: "Android Studio",
        icon: <AndroidStudio />,
        url: "https://developer.android.com/studio",
      },
      {
        name: "Xcode",
        icon: <Xcode />,
        url: "https://developer.apple.com/xcode/",
      },
      {
        name: "GitHub",
        icon: <GitHub />,
        url: "https://github.com",
      },
      {
        name: "Firebase",
        icon: <Firebase />,
        url: "https://firebase.google.com/",
      },
    ],
  }

  return [pienissimo, anubidigital, freelanceMobileDeveloper]
}
