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
    },
    {
      name: "Kotlin",
      icon: <KotlinIcon />,
      tags: [Tag.MOBILE, Tag.PROGRAMMING_LANGUAGE],
      duration: `2 ${t("experience.years")}`,
    },
    {
      name: "Swift",
      icon: <SwiftIcon />,
      tags: [Tag.MOBILE, Tag.PROGRAMMING_LANGUAGE],
      duration: `2 ${t("experience.years")}`,
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
    },

    {
      name: "Next.js",
      icon: <NextjsIcon />,
      tags: [Tag.FULLSTACK, Tag.FRONTEND, Tag.FRAMEWORK],
      duration: `2 ${t("experience.years")}`,
    },
    {
      name: "Nest.js",
      icon: <NestjsIcon />,
      tags: [Tag.FULLSTACK, Tag.BACKEND, Tag.FRAMEWORK],
      duration: `2 ${t("experience.years")}`,
    },
    {
      name: "Node.js",
      icon: <NodeJsIcon />,
      tags: [Tag.FULLSTACK, Tag.BACKEND, Tag.OTHER],
      duration: `2 ${t("experience.years")}`,
    },
    {
      name: "AWS",
      icon: <AwsIcon />,
      tags: [Tag.FULLSTACK, Tag.OTHER],
      duration: `2 ${t("experience.years")}`,
    },
    {
      name: "Docker",
      icon: <DockerIcon />,
      tags: [Tag.FULLSTACK, Tag.BACKEND, Tag.OTHER],
      duration: `2 ${t("experience.years")}`,
    },
    {
      name: "Postgre SQL",
      icon: <PostgreSQLIcon />,
      tags: [Tag.FULLSTACK, Tag.BACKEND, Tag.DATABASE],
      duration: `2 ${t("experience.years")}`,
    },
    {
      name: "Android Studio",
      icon: <AndroidStudioIcon />,
      tags: [Tag.MOBILE, Tag.IDE],
      duration: `2 ${t("experience.years")}`,
    },
    {
      name: "VS Code",
      icon: <VsCodeIcon />,
      tags: [Tag.FULLSTACK, Tag.FRONTEND, Tag.BACKEND, Tag.IDE],
      duration: `2 ${t("experience.years")}`,
    },
    {
      name: "Xcode",
      icon: <XcodeIcon />,
      tags: [Tag.MOBILE, Tag.IDE],
      duration: `2 ${t("experience.years")}`,
    },
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      tags: [Tag.FULLSTACK, Tag.MOBILE, Tag.OTHER],
      duration: `2 ${t("experience.years")}`,
    },
    {
      name: "Jira",
      icon: <JiraIcon />,
      tags: [Tag.FULLSTACK, Tag.MOBILE, Tag.OTHER],
      duration: `2 ${t("experience.years")}`,
    },
    {
      name: "MongoDB",
      icon: <MongodbIcon />,
      tags: [Tag.FULLSTACK, Tag.DATABASE],
      duration: `1 ${t("experience.year")}`,
    },
    {
      name: "Kubernetes",
      icon: <KubernetesIcon />,
      tags: [Tag.FULLSTACK, Tag.BACKEND, Tag.OTHER],
      duration: `1 ${t("experience.year")}`,
    },
    {
      name: "Firebase",
      icon: <FirebaseIcon />,
      tags: [Tag.MOBILE, Tag.OTHER],
      duration: `1 ${t("experience.year")}`,
    },
  ]
}

export default GetExperienceData
