import useIsSectionLoaded from "@/hooks/useIsSectionLoaded"
import { customTransitionAnimation } from "@/ui/animations/custom-transition-animation"
import Typography from "@/ui/atoms/typography_"
import Clock from "@/ui/icons/clock_"

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
      className={`relative flex flex-col py-4 w-full shadow-md cursor-pointer select-none bg-primary-100 bg-opacity-5 lg:w-[120px] ${customTransitionAnimation(
        isSectionLoaded
      )}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-full">
        <Typography text={name} light />
      </div>
      <div className="flex items-center justify-center w-full h-[80px] md:h-[90px]">
        <div>{icon}</div>
      </div>
      <div className="flex flex-row items-end justify-center flex-1 w-full mx-auto space-x-1 text-center opacity-60">
        <div className="w-4 h-4 my-auto fill-white">
          <Clock />
        </div>
        <Typography text={duration} extralight />
      </div>
    </div>
  )
}

export default ExperienceCard
