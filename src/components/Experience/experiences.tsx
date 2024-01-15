import { useTranslations } from "@/hooks/useTranslations"
import AndroidStudioIcon from "@/ui/icons/programming/AndroidStudio"
import AwsIcon from "@/ui/icons/programming/Aws"
import DockerIcon from "@/ui/icons/programming/Docker"
import FirebaseIcon from "@/ui/icons/programming/Firebase"
import GitHubIcon from "@/ui/icons/programming/GitHub"
import JavaIcon from "@/ui/icons/programming/Java"
import JavascriptIcon from "@/ui/icons/programming/Javascript"
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

const GetExperienceData = () => {
  const { t } = useTranslations("home")
  const Tag = {
    FULLSTACK: {
      key: t("experience.tag.fullstack"),
      value: "fullstack",
    },
    MOBILE: {
      key: t("experience.tag.mobile"),
      value: "mobile",
    },
    BACKEND: {
      key: t("experience.tag.backend"),
      value: "backend",
    },
    FRONTEND: {
      key: t("experience.tag.frontend"),
      value: "frontend",
    },
    FRAMEWORK: {
      key: t("experience.tag.framework"),
      value: "framework",
    },
    DATABASE: {
      key: t("experience.tag.database"),
      value: "database",
    },
    PROGRAMMING_LANGUAGE: {
      key: t("experience.tag.programmingLanguage"),
      value: "programmingLanguage",
    },
    IDE: {
      key: t("experience.tag.ide"),
      value: "ide",
    },
    OTHER: {
      key: t("experience.tag.other"),
      value: "other",
    },
  }

  return [
    {
      name: "Java",
      icon: <JavaIcon />,
      tags: [Tag.MOBILE, Tag.PROGRAMMING_LANGUAGE],
      duration: `2 ${t("experience.years")}`,
      url: "https://www.oracle.com/java/",
    },
    {
      name: "Javascript",
      icon: <JavascriptIcon />,
      tags: [
        Tag.FULLSTACK,
        Tag.FRONTEND,
        Tag.BACKEND,
        Tag.PROGRAMMING_LANGUAGE,
      ],
      duration: `2 ${t("experience.years")}`,
      url: "https://www.javascript.com/",
    },
    {
      name: "Kotlin",
      icon: <KotlinIcon />,
      tags: [Tag.MOBILE, Tag.PROGRAMMING_LANGUAGE],
      duration: `2 ${t("experience.years")}`,
      url: "https://kotlinlang.org/",
    },
    {
      name: "Swift",
      icon: <SwiftIcon />,
      tags: [Tag.MOBILE, Tag.PROGRAMMING_LANGUAGE],
      duration: `2 ${t("experience.years")}`,
      url: "https://developer.apple.com/swift/",
    },
    {
      name: "Typescript",
      icon: <TypescriptIcon />,
      tags: [
        Tag.FULLSTACK,
        Tag.FRONTEND,
        Tag.BACKEND,
        Tag.PROGRAMMING_LANGUAGE,
      ],
      duration: `2 ${t("experience.years")}`,
      url: "https://www.typescriptlang.org/",
    },

    {
      name: "Next.js",
      icon: <NextjsIcon />,
      tags: [Tag.FULLSTACK, Tag.FRONTEND, Tag.FRAMEWORK],
      duration: `2 ${t("experience.years")}`,
      url: "https://nextjs.org/",
    },
    {
      name: "Nest.js",
      icon: <NestjsIcon />,
      tags: [Tag.FULLSTACK, Tag.BACKEND, Tag.FRAMEWORK],
      duration: `2 ${t("experience.years")}`,
      url: "https://nestjs.com/",
    },
    {
      name: "Node.js",
      icon: <NodeJsIcon />,
      tags: [Tag.FULLSTACK, Tag.BACKEND, Tag.OTHER],
      duration: `2 ${t("experience.years")}`,
      url: "https://nodejs.org/en/",
    },
    {
      name: "AWS",
      icon: <AwsIcon />,
      tags: [Tag.FULLSTACK, Tag.OTHER],
      duration: `2 ${t("experience.years")}`,
      url: "https://aws.amazon.com/",
    },
    {
      name: "Docker",
      icon: <DockerIcon />,
      tags: [Tag.FULLSTACK, Tag.BACKEND, Tag.OTHER],
      duration: `2 ${t("experience.years")}`,
      url: "https://www.docker.com/",
    },
    {
      name: "Postgre SQL",
      icon: <PostgreSQLIcon />,
      tags: [Tag.FULLSTACK, Tag.BACKEND, Tag.DATABASE],
      duration: `2 ${t("experience.years")}`,
      url: "https://www.postgresql.org/",
    },
    {
      name: "Android Studio",
      icon: <AndroidStudioIcon />,
      tags: [Tag.MOBILE, Tag.IDE],
      duration: `2 ${t("experience.years")}`,
      url: "https://developer.android.com/studio",
    },
    {
      name: "VS Code",
      icon: <VsCodeIcon />,
      tags: [Tag.FULLSTACK, Tag.FRONTEND, Tag.BACKEND, Tag.IDE],
      duration: `2 ${t("experience.years")}`,
      url: "https://code.visualstudio.com/",
    },
    {
      name: "Xcode",
      icon: <XcodeIcon />,
      tags: [Tag.MOBILE, Tag.IDE],
      duration: `2 ${t("experience.years")}`,
      url: "https://developer.apple.com/xcode/",
    },
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      tags: [Tag.FULLSTACK, Tag.MOBILE, Tag.OTHER],
      duration: `2 ${t("experience.years")}`,
      url: "https://github.com",
    },
    {
      name: "Jira",
      icon: <JiraIcon />,
      tags: [Tag.FULLSTACK, Tag.MOBILE, Tag.OTHER],
      duration: `2 ${t("experience.years")}`,
      url: "https://www.atlassian.com/software/jira",
    },
    {
      name: "MongoDB",
      icon: <MongodbIcon />,
      tags: [Tag.FULLSTACK, Tag.DATABASE],
      duration: `1 ${t("experience.year")}`,
      url: "https://www.mongodb.com/",
    },
    {
      name: "Kubernetes",
      icon: <KubernetesIcon />,
      tags: [Tag.FULLSTACK, Tag.BACKEND, Tag.OTHER],
      duration: `1 ${t("experience.year")}`,
      url: "https://kubernetes.io/",
    },
    {
      name: "Firebase",
      icon: <FirebaseIcon />,
      tags: [Tag.MOBILE, Tag.OTHER],
      duration: `1 ${t("experience.year")}`,
      url: "https://firebase.google.com/",
    },
  ]
}

export default GetExperienceData
