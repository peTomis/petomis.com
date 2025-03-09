interface Props {
  children: React.ReactNode
  full?: boolean
}

const ExperienceCardContainer = ({ children, full = true }: Props) => {
  const className = full
    ? "grid grid-cols-3 gap-1.5 w-full sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
    : "grid grid-cols-3 gap-1.5 w-full"

  const dir = full ? "ltr" : "rtl"
  return (
    <div dir={dir} id="experience-card-container" className={className}>
      {children}
    </div>
  )
}

export default ExperienceCardContainer
