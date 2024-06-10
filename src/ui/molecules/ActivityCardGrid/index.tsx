interface Props {
  children: React.ReactNode
}

const ActivityCardGrid = ({ children }: Props) => {
  return (
    <div
      id="activity-card-grid"
      className="grid gap-4 p-4 mx-auto md:grid-cols-2 xl:grid-cols-3"
    >
      {children}
    </div>
  )
}

export default ActivityCardGrid
