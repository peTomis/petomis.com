import { useTranslations } from "@/hooks/useTranslations"
import Typography from "@/ui/atoms/typography"
import {
  ActivityColorText,
  ActivityColorTitleText,
  ActivityColorVariant,
} from "@/utils"

export interface WorkExperienceTool {
  category?: string
  list: string
}

interface Props {
  tools: WorkExperienceTool[]
  variant?: ActivityColorVariant
}

const WorkExperienceTools = ({
  tools,
  variant = ActivityColorVariant.MOBILE,
}: Props) => {
  const { t } = useTranslations("jobs")
  return (
    <div className="flex flex-col p-8 space-y-4 md:p-0">
      <div className="flex flex-col space-y-2">
        <Typography
          text={t("tools")}
          color={ActivityColorTitleText[variant]}
          size="h4"
          bold
        />
      </div>
      {tools.map((item, index) =>
        item.category ? (
          <div className="flex flex-col w-full mx-auto space-y-2 " key={index}>
            <Typography
              text={item.category}
              color={ActivityColorTitleText[variant]}
              bold
            />
            <Typography
              text={item.list}
              color={ActivityColorText[variant]}
              light
            />
          </div>
        ) : (
          <div className="flex flex-col w-full mx-auto space-y-2" key={index}>
            <Typography
              text={item.list}
              color={ActivityColorText[variant]}
              light
            />
          </div>
        )
      )}
    </div>
  )
}

export default WorkExperienceTools
