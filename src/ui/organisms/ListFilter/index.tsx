import ListFilterElements, {
  ListFilterColor,
} from "@/ui/molecules/ListFilterElements"
import ListFilterLabel from "@/ui/molecules/ListFilterLabel"

interface Props {
  icon: JSX.Element
  label: string
  color?: ListFilterColor
  filters: string[]
  activeFilters: string[]
  onFilterChange: (filter: string) => void
}

const ListFilter = ({
  icon,
  label,
  activeFilters,
  filters,
  onFilterChange,
  color,
}: Props) => {
  return (
    <div className="flex flex-col items-start justify-start px-8 space-y-2 md:px-0 md:space-y-0 md:space-x-4 md:items-center md:flex-row">
      <ListFilterLabel icon={icon} label={label} />
      <ListFilterElements
        activeFilters={activeFilters}
        filters={filters}
        onFilterChange={onFilterChange}
        color={color}
      />
    </div>
  )
}

export default ListFilter
