interface Props {
  children: React.ReactNode
}

const ExperienceCardContainer = ({ children }: Props) => {
  return (
    <div
      id="experience-card-container"
      className="grid grid-cols-3 gap-1.5 max-w-[498px] md:max-w-[624px] lg:max-w-[750px] xl:max-w-[1002px] w-full px-4 md:px-0 mx-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8"
    >
      {children}
    </div>
  )
}

export default ExperienceCardContainer
