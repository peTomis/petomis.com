import { useTranslations } from "@/modules/translations/use"
import style from "./style.module.css"
import ExperienceDecor from "@/ui/atoms/ExperienceDecor"
import { useEffect, useState } from "react"
import RedirectIcon from "@/ui/icons/Redirect"
import { Carousel } from "@/ui/organisms/Carousel"
import ActivityCard from "@/ui/molecules/ActivityCard"
import AnubidigitalIcon from "@/ui/icons/Anubidigital"

interface Props {
  id: string
}

const Experience = ({ id }: Props) => {
  const [daysPassed, setDaysPassed] = useState(0)

  const openAnubiHomepage = () => window.open(process.env.ANUBI, "_blank")

  useEffect(() => {
    const startDate = new Date("2022-03-01")
    const today = new Date()
    const timeDiff = Math.abs(today.getTime() - startDate.getTime())
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24))

    setDaysPassed(days)
  }, [])

  const { t } = useTranslations("home")

  const CarouselData = [
    <ActivityCard key={0} bgColor="bg-[#ffffff]">
      <div className={style.experienceContainer}>
        <div className={style.experienceTitle}>{t("experience.jobAName")}</div>
        <div
          className={style.experienceCommitterWithRedirect}
          onClick={openAnubiHomepage}
        >
          <AnubidigitalIcon />
          <RedirectIcon />
        </div>
        <div className={style.experienceDuration}>
          {t("experience.jobADate")}
        </div>
        <div className={style.dayMark}>
          <div className={style.innerDayMark}>
            <div className="text-bold">{daysPassed}</div>
            <div className="font-light text-h5 md:text-h2">
              {t("experience.days")}
            </div>
          </div>
        </div>
      </div>
    </ActivityCard>,
    <ActivityCard key={1} bgColor="bg-primary-400">
      <div className={style.experienceContainer}>
        <div className={style.experienceTitle2}>{t("experience.jobBName")}</div>
        <div className={style.experienceCommitter}>
          {t("experience.jobBCommitter")}
        </div>
        <div className={style.experienceDuration}>
          {t("experience.jobBDate")}
        </div>
      </div>
    </ActivityCard>,
  ]

  return (
    <div className={style.container} id={id}>
      <div className={style.title}>{t("experience.title")}</div>
      <div className={style.carouselContainer}>
        <Carousel items={CarouselData} />
      </div>
    </div>
  )
}

export default Experience
