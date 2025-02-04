interface Props {
  icon: JSX.Element
  label: string
}

const ListFilterLabel = ({ icon, label }: Props) => {
  return (
    <div className="flex flex-none flex-row w-[100px] space-x-2">
      <div className="flex flex-row w-6 h-6">{icon}</div>
      <div className="flex">{label}</div>
    </div>
  )
}

export default ListFilterLabel
