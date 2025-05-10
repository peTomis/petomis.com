interface Props {
  children: React.ReactNode
}

const ExperienceCardContainer = ({ children }: Props) => {
  return (
    <div
      id="experience-card-container"
      className={
        "grid grid-cols-3 gap-1.5 w-full sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-4"
      }
    >
      {children}
    </div>
  )
}

export default ExperienceCardContainer
