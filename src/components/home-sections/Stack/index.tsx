import GitHubIcon from "@/ui/icons/programming/GitHub"
import AwsIcon from "@/ui/icons/programming/Aws"
import DockerIcon from "@/ui/icons/programming/Docker"
import KubernetesIcon from "@/ui/icons/programming/Kubernetes"
import NestjsIcon from "@/ui/icons/programming/NestJs"
import NextjsIcon from "@/ui/icons/programming/Nextjs"
import PostgreSQLIcon from "@/ui/icons/programming/Postgre"
import Image from "next/image"
import React from "react"
import JiraIcon from "@/ui/icons/programming/JiraIcon"

interface ImageItemProps {
  src: string
  alt: string
  key: number
}

const Item = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center w-[300px] h-[100px]">
    {children}
  </div>
)

Item.displayName = "Item"

const Stack = () => {
  const items = [
    <Item key={0}>
      <NestjsIcon />
    </Item>,
    <Item key={1}>
      <NextjsIcon />
    </Item>,
    <Item key={2}>
      <PostgreSQLIcon />
    </Item>,
    <Item key={3}>
      <DockerIcon />
    </Item>,
    <Item key={4}>
      <KubernetesIcon />
    </Item>,
    <Item key={5}>
      <AwsIcon />
    </Item>,
    <Item key={6}>
      <GitHubIcon />
    </Item>,
    <Item key={7}>
      <JiraIcon />
    </Item>,
  ]

  const loopedItems = [...items, ...items]
  return (
    <div
      id="stack-container"
      className="flex items-center justify-center w-full bg-opacity-5 bg-primary-300"
    >
      <div id="carousel-container" className="w-full overflow-hidden shadow-lg">
        <div className="flex items-center justify-center animate-smallCarousel md:animate-carousel">
          {loopedItems}
        </div>
      </div>
    </div>
  )
}

export default Stack
