import { useTranslations } from "@/hooks/useTranslations"
import Typography, { TypographyColor } from "@/ui/atoms/Typography"

interface WorkExperienceTools {
  category?: string
  list: string
}

interface Props {
  tools: WorkExperienceTools[]
  mainColor?: TypographyColor
  color?: TypographyColor
}

const WorkExperienceTools = ({ tools, mainColor, color = "white" }: Props) => {
  const { t } = useTranslations("jobs")
  return (
    <div
      className={`flex flex-1 flex-col w-full justify-center  items-start px-8 py-16 xl:px-16 xl:py-0 space-y-8 bg-${mainColor} bg-opacity-10 `}
    >
      <div className="flex flex-col space-y-8  max-w-[900px]  w-full mx-auto">
        <div className="flex flex-col w-full mx-auto space-y-2">
          <Typography
            text={t("tools")}
            color={mainColor}
            darkColor={mainColor}
            size="h4"
            bold
          />
        </div>
        {tools.map((item, index) =>
          item.category ? (
            <div className="flex flex-col w-full mx-auto space-y-2" key={index}>
              <Typography
                text={item.category}
                color={mainColor}
                darkColor={mainColor}
                size="h5"
                bold
              />
              <Typography
                text={item.list}
                color={color}
                darkColor={color}
                size="h6"
              />
            </div>
          ) : (
            <div className="flex flex-col w-full mx-auto space-y-2" key={index}>
              <Typography
                text={item.list}
                color={color}
                darkColor={color}
                size="h6"
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default WorkExperienceTools
