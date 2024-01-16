interface Props {
  children: React.ReactNode
}

const ExperienceCardContainer = ({ children }: Props) => {
  return (
    <div
      id="experience-card-container"
      className="grid grid-cols-3 gap-4 mx-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8"
    >
      {children}
    </div>
  )
}

export default ExperienceCardContainer
