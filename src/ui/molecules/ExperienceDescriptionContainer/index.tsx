import { useTranslations } from "@/modules/translations/use"
import AnubidigitalIcon from "@/ui/icons/companies/Anubidigital"

interface Props {
  detailed: boolean
  job: string
  date: string
  programmingLanguages: string[]
  tools: string[]
  techGraph?: React.ReactNode
}

const ExperienceDescriptionContainer = ({
  detailed,
  job,
  date,
  programmingLanguages,
  tools,
  techGraph,
}: Props) => {
  const { t } = useTranslations("home")
  if (detailed)
    return (
      <div className="flex flex-col items-start w-full space-y-8">
        <div className="flex flex-row items-start justify-center w-full py-4 space-x-4 md:py-2 bg-primary-500 md:space-x-32">
          <div className="flex justify-center items-center fill-white w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
            <AnubidigitalIcon />
          </div>
          <div
            id="experience-description-detailed-container"
            className="flex flex-col items-start justify-center h-full md:space-y-2 font-roboto"
          >
            <div id="experience-job" className="font-bold text-h5 md:text-h3">
              {job}
            </div>
            <div id="experience-job" className="text-[22px] md:text-h4">
              Anubidigital
            </div>
            <div
              id="experience-date"
              className="text-base italic font-light md:text-h5 opacity-80"
            >
              {date}
            </div>
          </div>
        </div>

        {techGraph}
      </div>
    )

  return (
    <div
      id="experience-description-container"
      className="flex flex-col space-y-2 k font-roboto"
    >
      <div id="experience-job" className="text-h4">
        {job}
      </div>
      <div id="experience-date" className="font-light text-h5">
        {date}
      </div>

      <div id="experience-languages">
        <div id="experience-languages-label">
          {t("work.programmingLanguages")}
        </div>
        <div id="experience-languages.list" className="font-extralight">
          {programmingLanguages.join(", ")}
        </div>
      </div>

      <div id="experience-tools">
        <div id="experience-tools-label">{t("work.tools")}</div>
        <div id="experience-tools-list" className="font-extralight">
          {tools.join(", ")}
        </div>
      </div>
    </div>
  )
}

export default ExperienceDescriptionContainer
