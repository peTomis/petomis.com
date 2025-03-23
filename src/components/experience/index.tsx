// External libraries
import React from "react"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Atoms
import Typography from "@/ui/atoms/typography"
import ExperienceElement from "@/ui/organisms/experience-element"

// Logos
import { useJobExperiences } from "@/hooks/useJobExperiences"

const Experience = () => {
  const { t } = useTranslations("jobs")
  const [pienissimo, anubidigital, freelanceMobileDeveloper] =
    useJobExperiences()

  return (
    <div
      id="career-container"
      className="flex flex-col px-4 py-16 bg-primary-500 md:p-16"
    >
      <div className="text-center">
        <Typography extrabold size="h1" text={t("title").toUpperCase()} />
      </div>
      <div className="relative w-4 h-4 mx-auto my-8 bg-white bg-opacity-20" />
      <div className="flex flex-col px-2 py-8 mx-auto space-y-8">
        <ExperienceElement
          title={pienissimo.job}
          company={pienissimo.image()}
          date={pienissimo.date}
          background={pienissimo.background}
          text={"text-black"}
          experiences={pienissimo.experiences}
          tasks={pienissimo.tasks}
          sentences={pienissimo.sentences}
          tools={pienissimo.tools}
          variant={pienissimo.variant}
        />
        <ExperienceElement
          title={anubidigital.job}
          company={anubidigital.image()}
          date={anubidigital.date}
          background={anubidigital.background}
          experiences={anubidigital.experiences}
          tasks={anubidigital.tasks}
          sentences={anubidigital.sentences}
          tools={anubidigital.tools}
          variant={anubidigital.variant}
        />
        <ExperienceElement
          title={freelanceMobileDeveloper.job}
          company={freelanceMobileDeveloper.image()}
          date={freelanceMobileDeveloper.date}
          background={freelanceMobileDeveloper.background}
          experiences={freelanceMobileDeveloper.experiences}
          tasks={freelanceMobileDeveloper.tasks}
          sentences={freelanceMobileDeveloper.sentences}
          tools={freelanceMobileDeveloper.tools}
          variant={freelanceMobileDeveloper.variant}
        />
      </div>
    </div>
  )
}

export default Experience
