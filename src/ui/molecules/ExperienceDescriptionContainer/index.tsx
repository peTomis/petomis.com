import { useTranslations } from "@/hooks/useTranslations"
import Typography, { TypographyColor } from "@/ui/atoms/Typography"

interface Props {
  job: string
  date: string
  programmingLanguages: string[]
  tools: string[]
  color?: TypographyColor
}

const ExperienceDescriptionContainer = ({
  job,
  date,
  programmingLanguages,
  tools,
  color = "defaultTextColor",
}: Props) => {
  const { t } = useTranslations("home")

  return (
    <div
      id="experience-description-container"
      className="flex flex-col space-y-2"
    >
      <div id="experience-job" className="text-h4">
        <Typography text={job} color={color} size="h4" />
      </div>

      <div id="experience-date">
        <Typography light={true} text={date} color={color} size="h5" />
      </div>

      <div id="experience-languages">
        <div>
          <Typography text={t("work.programmingLanguages")} color={color} />
        </div>

        <Typography
          extralight={true}
          text={programmingLanguages.join(", ")}
          color={color}
        />
      </div>

      <div id="experience-tools">
        <div>
          <Typography text={t("work.tools")} color={color} />
        </div>

        <Typography extralight={true} text={tools.join(", ")} color={color} />
      </div>
    </div>
  )
}

export default ExperienceDescriptionContainer
