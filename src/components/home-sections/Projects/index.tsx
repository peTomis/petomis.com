import { useTranslations } from "@/modules/translations/use"
import style from "./style.module.css"
import { useEffect, useState } from "react"

const startDate = new Date("2022-03-01")

const Projects = () => {
  const [daysPassed, setDaysPassed] = useState(0)

  const openAnubiHomepage = () => window.open(process.env.ANUBI, "_blank")

  useEffect(() => {
    const today = new Date()
    const timeDiff = Math.abs(today.getTime() - startDate.getTime())
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24))

    setDaysPassed(days)
  }, [])

  const { t } = useTranslations("home")

  return (
    <div
      className="flex flex-col items-center justify-center w-full px-8 py-12 space-y-4 lg:py-24 bg-background dark:bg-background-dark bg-opacity-90 lg:mx-auto lg:space-y-8 lg:items-center lg:justify-start"
      id="projects-container"
    >
      <div className={style.title}>PROJECTS</div>
      <div className={style.carouselContainer}>WORK IN PROGRESS</div>
    </div>
  )
}

export default Projects
