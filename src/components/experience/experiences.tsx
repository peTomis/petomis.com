// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Icons
import AndroidStudioIcon from "@/ui/icons/programming/AndroidStudio"
import AwsIcon from "@/ui/icons/programming/Aws"
import DockerIcon from "@/ui/icons/programming/Docker"
import FirebaseIcon from "@/ui/icons/programming/Firebase"
import GitHubIcon from "@/ui/icons/programming/GitHub"
import JavaIcon from "@/ui/icons/programming/Java"
import JavascriptIcon from "@/ui/icons/programming/Javascript"
import JestIcon from "@/ui/icons/programming/Jest"
import JiraIcon from "@/ui/icons/programming/Jira"
import KotlinIcon from "@/ui/icons/programming/Kotlin"
import KubernetesIcon from "@/ui/icons/programming/Kubernetes"
import MongodbIcon from "@/ui/icons/programming/Mongodb"
import NestjsIcon from "@/ui/icons/programming/NestJs"
import NextjsIcon from "@/ui/icons/programming/Nextjs"
import NodeJsIcon from "@/ui/icons/programming/Nodejs"
import PostgreSQLIcon from "@/ui/icons/programming/Postgre"
import SwiftIcon from "@/ui/icons/programming/Swift"
import TypescriptIcon from "@/ui/icons/programming/Typescript"
import VsCodeIcon from "@/ui/icons/programming/VsCode"
import XcodeIcon from "@/ui/icons/programming/Xcode"

interface PersonalExperience {
  name: string
  icon: JSX.Element
  tags: { key: string; value: string }[]
  duration: string
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

  const from = (year: number): string => {
    const years = new Date().getFullYear() - year
    return `${years} ${
      years > 1 ? t("experience.years") : t("experience.year")
    }`
  }

  const staticYears = (years: number): string => {
    return `${years} ${
      years > 1 ? t("experience.years") : t("experience.year")
    }`
  }

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

  const experiences = [
    {
      name: "Java",
      icon: <JavaIcon />,
      tags: [Tag.MOBILE, Tag.PROGRAMMING_LANGUAGE],
      duration: staticYears(2),
      url: "https://www.oracle.com/java/",
    },
    {
      name: "Javascript",
      icon: <JavascriptIcon />,
      tags: [Tag.FULLSTACK, Tag.PROGRAMMING_LANGUAGE],
      duration: from(2022),
      url: "https://www.javascript.com/",
    },
    {
      name: "Kotlin",
      icon: <KotlinIcon />,
      tags: [Tag.MOBILE, Tag.PROGRAMMING_LANGUAGE],
      duration: staticYears(2),
      url: "https://kotlinlang.org/",
    },
    {
      name: "Swift",
      icon: <SwiftIcon />,
      tags: [Tag.MOBILE, Tag.PROGRAMMING_LANGUAGE],
      duration: staticYears(2),
      url: "https://developer.apple.com/swift/",
    },
    {
      name: "Typescript",
      icon: <TypescriptIcon />,
      tags: [Tag.FULLSTACK, Tag.PROGRAMMING_LANGUAGE],
      duration: from(2022),
      url: "https://www.typescriptlang.org/",
    },

    {
      name: "Next.js",
      icon: <NextjsIcon />,
      tags: [Tag.FULLSTACK, Tag.FRAMEWORK],
      duration: from(2022),
      url: "https://nextjs.org/",
    },
    {
      name: "Nest.js",
      icon: <NestjsIcon />,
      tags: [Tag.FULLSTACK, Tag.FRAMEWORK],
      duration: from(2022),
      url: "https://nestjs.com/",
    },
    {
      name: "Node.js",
      icon: <NodeJsIcon />,
      tags: [Tag.FULLSTACK, Tag.OTHER],
      duration: from(2022),
      url: "https://nodejs.org/en/",
    },
    {
      name: "AWS",
      icon: <AwsIcon />,
      tags: [Tag.FULLSTACK, Tag.OTHER],
      duration: from(2022),
      url: "https://aws.amazon.com/",
    },
    {
      name: "Docker",
      icon: <DockerIcon />,
      tags: [Tag.FULLSTACK, Tag.OTHER],
      duration: from(2022),
      url: "https://www.docker.com/",
    },
    {
      name: "Postgre SQL",
      icon: <PostgreSQLIcon />,
      tags: [Tag.FULLSTACK, Tag.DATABASE],
      duration: from(2022),
      url: "https://www.postgresql.org/",
    },
    {
      name: "Jest",
      icon: <JestIcon />,
      tags: [Tag.FULLSTACK, Tag.FRAMEWORK],
      duration: from(2022),
      url: "https://jestjs.io/",
    },
    {
      name: "Android Studio",
      icon: <AndroidStudioIcon />,
      tags: [Tag.MOBILE, Tag.IDE],
      duration: staticYears(2),
      url: "https://developer.android.com/studio",
    },
    {
      name: "VS Code",
      icon: <VsCodeIcon />,
      tags: [Tag.FULLSTACK, Tag.IDE],
      duration: from(2022),
      url: "https://code.visualstudio.com/",
    },
    {
      name: "Xcode",
      icon: <XcodeIcon />,
      tags: [Tag.MOBILE, Tag.IDE],
      duration: staticYears(2),
      url: "https://developer.apple.com/xcode/",
    },
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      tags: [Tag.FULLSTACK, Tag.MOBILE, Tag.OTHER],
      duration: from(2022),
      url: "https://github.com",
    },
    {
      name: "Jira",
      icon: <JiraIcon />,
      tags: [Tag.FULLSTACK, Tag.MOBILE, Tag.OTHER],
      duration: from(2022),
      url: "https://www.atlassian.com/software/jira",
    },
    {
      name: "MongoDB",
      icon: <MongodbIcon />,
      tags: [Tag.FULLSTACK, Tag.DATABASE],
      duration: from(2023),
      url: "https://www.mongodb.com/",
    },
    {
      name: "Kubernetes",
      icon: <KubernetesIcon />,
      tags: [Tag.FULLSTACK, Tag.OTHER],
      duration: from(2023),
      url: "https://kubernetes.io/",
    },
    {
      name: "Firebase",
      icon: <FirebaseIcon />,
      tags: [Tag.MOBILE, Tag.OTHER],
      duration: staticYears(1),
      url: "https://firebase.google.com/",
    },
  ]

  return experiences
}

export default GetExperienceData
