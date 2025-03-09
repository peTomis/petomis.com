import { useTranslations } from "@/hooks/useTranslations"
import Typography, { TypographyColor } from "@/ui/atoms/typography"
import { ActivityColorText, ActivityColorVariant } from "@/utils"

interface Props {
  job: string
  date: string
  programmingLanguages: string[]
  tools: string[]
  variant?: ActivityColorVariant
}

const ExperienceDescriptionContainer = ({
  job,
  date,
  programmingLanguages,
  tools,
  variant = ActivityColorVariant.MOBILE,
}: Props) => {
  const { t } = useTranslations("home")

  return (
    <div
      id="experience-description-container"
      className="flex flex-col space-y-2"
    >
      <div id="experience-job" className="text-h4">
        <Typography text={job} color={ActivityColorText[variant]} size="h4" />
      </div>

      <div id="experience-date">
        <Typography
          light={true}
          text={date}
          color={ActivityColorText[variant]}
          size="h5"
        />
      </div>

      <div id="experience-languages">
        <div>
          <Typography
            text={t("work.programmingLanguages")}
            color={ActivityColorText[variant]}
          />
        </div>

        <Typography
          extralight={true}
          text={programmingLanguages.join(", ")}
          color={ActivityColorText[variant]}
        />
      </div>

      <div id="experience-tools">
        <div>
          <Typography
            text={t("work.tools")}
            color={ActivityColorText[variant]}
          />
        </div>

        <Typography
          extralight={true}
          text={tools.join(", ")}
          color={ActivityColorText[variant]}
        />
      </div>
    </div>
  )
}

export default ExperienceDescriptionContainer
