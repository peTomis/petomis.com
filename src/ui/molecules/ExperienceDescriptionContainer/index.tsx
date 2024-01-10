import { useTranslations } from "@/modules/translations/use"

interface Props {
  detailed: boolean
  job: string
  date: string
  programmingLanguages: string[]
  tools: string[]
}

const ExperienceDescriptionContainer = ({
  detailed,
  job,
  date,
  programmingLanguages,
  tools,
}: Props) => {
  const { t } = useTranslations("home")
  if (detailed)
    return (
      <div
        id="experience-description-detailed-container"
        className="flex flex-col space-y-2 font-roboto"
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
