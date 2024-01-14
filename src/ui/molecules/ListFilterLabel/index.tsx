interface Props {
  icon: JSX.Element
  label: string
}

const ListFilterLabel = ({ icon, label }: Props) => {
  return (
    <div className="flex flex-row w-[70px] space-x-2">
      <div className="flex flex-row w-6 h-6">{icon}</div>
      <div>{label}</div>
    </div>
  )
}

export default ListFilterLabel
