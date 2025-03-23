// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Atoms
import Typography from "@/ui/atoms/typography"
import Medal from "@/ui/icons/medal_"

const Certifications = () => {
  const { t } = useTranslations("home")
  return (
    <div
      id="experience-container"
      className={
        "relative py-24 overflow-hidden flex flex-col bg-gradient-to-bl from-primary-100 via-primary-100 to-primary-200 px-8 lg:mx-auto w-full justify-center items-center lg:items-center lg:justify-start"
      }
    >
      <div className="absolute flex items-end justify-end -right-10 -top-[70px] w-full">
        <div className="flex items-end justify-end w-full max-w-[1600px] mr-auto ">
          <div className=" w-72 h-72 fill-primary-200">
            <Medal />
          </div>
        </div>
      </div>
      <div className="z-10">
        <Typography
          extrabold={true}
          size="h3"
          md="h1"
          text={t("certifications.title").toUpperCase()}
          color={"PRIMARY400"}
        />
      </div>
      <div className="flex flex-row pt-16 space-x-4">
        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-primary-200">
          <div className="flex justify-center items-center w-[94px] h-[94px] rounded-full bg-primary-100">
            <div className="flex justify-center items-center w-[90px] h-[90px] rounded-full bg-primary-200"></div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-primary-200">
          <div className="flex justify-center items-center w-[94px] h-[94px] rounded-full bg-primary-100">
            <div className="flex justify-center items-center w-[90px] h-[90px] rounded-full bg-primary-200"></div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-primary-200">
          <div className="flex justify-center items-center w-[94px] h-[94px] rounded-full bg-primary-100">
            <div className="flex justify-center items-center w-[90px] h-[90px] rounded-full bg-primary-200"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications
