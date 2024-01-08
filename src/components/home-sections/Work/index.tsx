import { useTranslations } from "@/modules/translations/use"
import experiences from "./components/Experiences"
import ActivityCardExpanded from "@/ui/molecules/ActivityCardExpanded"
import { useState } from "react"
import ActivityCard from "@/ui/molecules/ActivityCard"

interface Props {
  id: string
}

const Work = ({ id }: Props) => {
  const [visible, setVisible] = useState(false)
  const { t } = useTranslations("home")

  return (
    <div className="flex flex-col w-full py-8 mx-auto" id={id}>
      {visible && (
        <ActivityCardExpanded
          visible={visible}
          onClose={() => setVisible(false)}
        />
      )}
      <div className="flex mx-auto font-extrabold text-center text-h2 font-bacasimeAntique text-primary-300">
        {t("experience.title")}
      </div>
      <div className="grid gap-4 p-4 mx-auto md:grid-cols-2">
        {experiences.map((experience, key) => (
          <ActivityCard
            key={key}
            imageBackgroundColor={experience.imageBackgroundColor}
            textBackgroundColor={experience.textBackgroundColor}
            onClick={() => setVisible(true)}
            textColor={experience.textColor}
            image={experience.image()}
            description={experience.description()}
          />
        ))}
      </div>
    </div>
  )
}

export default Work
