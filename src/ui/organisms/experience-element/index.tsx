// External Libraries
import { useState } from "react"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"
import { PersonalExperience } from "@/hooks/useJobExperiences"

// Molecules
import ExperienceCard from "@/ui/molecules/experience-card"

// Atoms
import ExperienceCardContainer from "@/ui/atoms/experience-card-container"
import Typography from "@/ui/atoms/typography"

// Icons
import ChevronIcon from "@/ui/icons/chevron"

// Styles
import styles from "./experience.module.css"

export type ExperienceBackground = "bg-primary-400" | "bg-black" | "bg-red-300"
type AccordionTextColor = "text-white" | "text-black"

interface ExperienceElementProps {
  title: string
  company: React.ReactNode
  date: string
  experiences: PersonalExperience[]
  background: ExperienceBackground
  text?: AccordionTextColor
  children?: React.ReactNode
}

const ExperienceElement = ({
  title,
  company,
  date,
  experiences,
  background,
  text = "text-white",
  children,
}: ExperienceElementProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={`relative mb-2 ${text}`}>
        <ExperienceBackground
          experiences={experiences}
          background={background}
        />
        <ExperienceMainContent
          company={company}
          title={title}
          date={date}
          open={open}
          setOpen={setOpen}
          text={text}
        />
      </div>
      {open && (
        <ExperienceDetails experiences={experiences} background={background}>
          {children}
        </ExperienceDetails>
      )}
    </>
  )
}

const ExperienceBackground = ({
  experiences,
  background,
}: {
  background: ExperienceBackground
  experiences: PersonalExperience[]
}) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full overflow-hidden -rotate-2 ${background}`}
    >
      <div
        className={`${styles["transform"]} absolute right-0 top-0 select-none cursor-default opacity-20 md:opacity-50`}
      >
        <ExperienceCardContainer full={false}>
          {experiences.map((experience, key) => (
            <ExperienceCard key={key} icon={experience.icon} />
          ))}
        </ExperienceCardContainer>
      </div>
    </div>
  )
}

const ExperienceMainContent = ({
  company,
  title,
  date,
  open,
  setOpen,
  text,
}: {
  company: React.ReactNode
  title: string
  date: string
  open: boolean
  setOpen: (open: boolean) => void
  text: AccordionTextColor
}) => {
  const { t } = useTranslations("experience")

  return (
    <div className="relative flex flex-col w-full p-8 space-y-4 overflow-hidden shadow-lg  sm:w-[600px] lg:w-[820px] bg-white bg-opacity-20">
      <div className="flex flex-row">
        <div className="flex flex-col font-bold text-h5 md:text-h3">
          <div className="line-clamp-1"></div>
          <Typography extrabold size="h4" md="h3" text={title.toUpperCase()} />
          {company}
          <Typography extrabold size="h6" light text={date} />
        </div>
        <div className="flex flex-1 w-full"></div>
      </div>
      <div
        className="flex flex-row items-center space-x-2 cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <Typography extrabold size="h6" light text={t("details")} />
        <div
          className={`transform transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronIcon black={text === "text-black"} />
        </div>
      </div>
    </div>
  )
}

const ExperienceDetails = ({
  experiences,
  background,
  children,
}: {
  experiences: PersonalExperience[]
  background: ExperienceBackground
  children?: React.ReactNode
}) => {
  return (
    <div className="relative">
      <div
        className={`absolute top-0 left-0 w-full h-full -rotate-2  ${background}`}
      ></div>
      <div className="relative flex flex-col md:p-8 space-y-4 overflow-hidden shadow-lg  sm:w-[600px] lg:w-[820px] min-h-[300px] bg-white bg-opacity-20">
        {children}
        <ExperienceCardContainer>
          {experiences.map((experience, key) => (
            <ExperienceCard
              key={key}
              name={experience.name}
              icon={experience.icon}
              onClick={() => window.open(experience.url)}
            />
          ))}
        </ExperienceCardContainer>
      </div>
    </div>
  )
}

export default ExperienceElement
