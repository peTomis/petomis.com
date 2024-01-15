import useIsSectionLoaded from "@/hooks/useIsSectionLoaded"
import { customTransitionAnimation } from "@/ui/animations/CustomTransitionAnimation"
import Typography from "@/ui/atoms/Typography"
import ClockIcon from "@/ui/icons/Clock"

interface Props {
  name: string
  icon: React.ReactNode
  tags: string[]
  duration: string
  onClick?: () => void
}

const ExperienceCard = ({ name, icon, tags, duration, onClick }: Props) => {
  const id = `experience-card-${name}`
  const isSectionLoaded = useIsSectionLoaded(id)
  return (
    <div
      id={id}
      className={`relative flex flex-col px-2 py-4 space-y-4 shadow-md cursor-pointer select-none xl:px-4 bg-primary-100 bg-opacity-5 ${customTransitionAnimation(
        isSectionLoaded
      )}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-full">
        <Typography text={name} />
      </div>
      <div className="flex items-center justify-center w-full h-[90px]">
        <div>{icon}</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {tags.map((t, key) => (
          <div
            key={key}
            className="truncate overflow-hidden text-center line rounded-md shadow-md p-2 bg-primary-100 max-w-[120px] bg-opacity-5"
          >
            {t}
          </div>
        ))}
      </div>
      <div className="flex flex-row items-end justify-center flex-1 w-full mx-auto space-x-1 text-center">
        <div className="w-6 h-6 fill-defaultTextColor">
          <ClockIcon />
        </div>
        <Typography text={duration} />
      </div>
    </div>
  )
}

export default ExperienceCard
