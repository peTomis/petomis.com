interface Props {
  children: React.ReactNode
}

const ExperienceCardContainer = ({ children }: Props) => {
  return (
    <div
      id="experience-card-container"
      className="grid grid-cols-2 gap-4 mx-4 xl:grid-cols-4"
    >
      {children}
    </div>
  )
}

export default ExperienceCardContainer
