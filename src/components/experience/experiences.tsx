// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Icons
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

interface PersonalExperience {
  name: string
  icon: JSX.Element
  tags: { key: string; value: string }[]
  duration: { from: number; to: number }[]
  url: string
}

enum ExperienceTag {
  FULLSTACK = "experience.tag.fullstack",
  MOBILE = "experience.tag.mobile",
  FRAMEWORK = "experience.tag.framework",
  DATABASE = "experience.tag.database",
  PROGRAMMING_LANGUAGE = "experience.tag.programmingLanguage",
  IDE = "experience.tag.ide",
  OTHER = "experience.tag.other",
}

const GetExperienceData = (): PersonalExperience[] => {
  const { t } = useTranslations("home")

  const Tag = {
    FULLSTACK: {
      key: t(ExperienceTag.FULLSTACK),
      value: "fullstack",
    },
    MOBILE: {
      key: t(ExperienceTag.MOBILE),
      value: "mobile",
    },
    FRAMEWORK: {
      key: t(ExperienceTag.FRAMEWORK),
      value: "framework",
    },
    DATABASE: {
      key: t(ExperienceTag.DATABASE),
      value: "database",
    },
    PROGRAMMING_LANGUAGE: {
      key: t(ExperienceTag.PROGRAMMING_LANGUAGE),
      value: "programmingLanguage",
    },
    IDE: {
      key: t(ExperienceTag.IDE),
      value: "ide",
    },
    OTHER: {
      key: t(ExperienceTag.OTHER),
      value: "other",
    },
  }

  const getTimestampsFromDate = (
    fromDate: string,
    toDate?: string
  ): {
    from: number
    to: number
  } => {
    const from = new Date(fromDate).getTime()
    const to = toDate ? new Date(toDate).getTime() : new Date().getTime()

    return {
      from,
      to,
    }
  }

  const experiences = [
    {
      name: "Java",
      icon: <Java />,
      tags: [Tag.MOBILE, Tag.PROGRAMMING_LANGUAGE],
      duration: [getTimestampsFromDate("2020-01-01", "2022-02-28")],
      url: "https://www.oracle.com/java/",
    },
    {
      name: "Javascript",
      icon: <Javascript />,
      tags: [Tag.FULLSTACK, Tag.PROGRAMMING_LANGUAGE],
      duration: [getTimestampsFromDate("2022-03-01")],
      url: "https://www.javascript.com/",
    },
    {
      name: "Kotlin",
      icon: <Kotlin />,
      tags: [Tag.MOBILE, Tag.PROGRAMMING_LANGUAGE],
      duration: [getTimestampsFromDate("2020-01-01", "2022-02-28")],
      url: "https://kotlinlang.org/",
    },
    {
      name: "Swift",
      icon: <Swift />,
      tags: [Tag.MOBILE, Tag.PROGRAMMING_LANGUAGE],
      duration: [
        getTimestampsFromDate("2020-01-01", "2022-02-28"),
        getTimestampsFromDate("2024-04-01"),
      ],
      url: "https://developer.apple.com/swift/",
    },
    {
      name: "Typescript",
      icon: <Typescript />,
      tags: [Tag.FULLSTACK, Tag.PROGRAMMING_LANGUAGE],
      duration: [getTimestampsFromDate("2022-03-01")],
      url: "https://www.typescriptlang.org/",
    },

    {
      name: "Next.js",
      icon: <Nextjs />,
      tags: [Tag.FULLSTACK, Tag.FRAMEWORK],
      duration: [getTimestampsFromDate("2022-03-01")],
      url: "https://nextjs.org/",
    },
    {
      name: "Nest.js",
      icon: <Nestjs />,
      tags: [Tag.FULLSTACK, Tag.FRAMEWORK],
      duration: [getTimestampsFromDate("2022-03-01")],
      url: "https://nestjs.com/",
    },
    {
      name: "Node.js",
      icon: <NodeJs />,
      tags: [Tag.FULLSTACK, Tag.OTHER],
      duration: [getTimestampsFromDate("2022-03-01")],
      url: "https://nodejs.org/en/",
    },
    {
      name: "AWS",
      icon: <Aws />,
      tags: [Tag.FULLSTACK, Tag.OTHER],
      duration: [getTimestampsFromDate("2022-03-01")],
      url: "https://aws.amazon.com/",
    },
    {
      name: "Docker",
      icon: <Docker />,
      tags: [Tag.FULLSTACK, Tag.OTHER],
      duration: [getTimestampsFromDate("2022-03-01", "2024-03-31")],
      url: "https://www.docker.com/",
    },
    {
      name: "Postgre SQL",
      icon: <PostgreSQL />,
      tags: [Tag.FULLSTACK, Tag.DATABASE],
      duration: [getTimestampsFromDate("2022-03-01")],
      url: "https://www.postgresql.org/",
    },
    {
      name: "Jest",
      icon: <Jest />,
      tags: [Tag.FULLSTACK, Tag.FRAMEWORK],
      duration: [getTimestampsFromDate("2022-03-01", "2024-03-31")],
      url: "https://jestjs.io/",
    },
    {
      name: "Android Studio",
      icon: <AndroidStudio />,
      tags: [Tag.MOBILE, Tag.IDE],
      duration: [
        getTimestampsFromDate("2020-01-01", "2022-02-28"),
        getTimestampsFromDate("2024-04-01"),
      ],
      url: "https://developer.android.com/studio",
    },
    {
      name: "VS Code",
      icon: <VsCode />,
      tags: [Tag.FULLSTACK, Tag.IDE],
      duration: [getTimestampsFromDate("2022-03-01")],
      url: "https://code.visualstudio.com/",
    },
    {
      name: "Xcode",
      icon: <Xcode />,
      tags: [Tag.MOBILE, Tag.IDE],
      duration: [
        getTimestampsFromDate("2020-01-01", "2022-02-28"),
        getTimestampsFromDate("2024-04-01"),
      ],
      url: "https://developer.apple.com/xcode/",
    },
    {
      name: "GitHub",
      icon: <GitHub />,
      tags: [Tag.FULLSTACK, Tag.MOBILE, Tag.OTHER],
      duration: [getTimestampsFromDate("2022-03-01")],
      url: "https://github.com",
    },
    {
      name: "Jira",
      icon: <Jira />,
      tags: [Tag.FULLSTACK, Tag.MOBILE, Tag.OTHER],
      duration: [getTimestampsFromDate("2022-03-01", "2024-03-31")],
      url: "https://www.atlassian.com/software/jira",
    },
    {
      name: "MongoDB",
      icon: <Mongodb />,
      tags: [Tag.FULLSTACK, Tag.DATABASE],
      duration: [getTimestampsFromDate("2022-03-01")],
      url: "https://www.mongodb.com/",
    },
    {
      name: "Kubernetes",
      icon: <Kubernetes />,
      tags: [Tag.FULLSTACK, Tag.OTHER],
      duration: [getTimestampsFromDate("2022-03-01", "2024-03-31")],
      url: "https://kubernetes.io/",
    },
    {
      name: "Firebase",
      icon: <Firebase />,
      tags: [Tag.MOBILE, Tag.OTHER],
      duration: [getTimestampsFromDate("2020-01-01", "2022-02-28")],
      url: "https://firebase.google.com/",
    },
  ]

  return experiences
}

export default GetExperienceData
