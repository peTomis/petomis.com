import ListFilterElements, {
  ListFilterColor,
} from "@/ui/molecules/list-filter-elements"
import ListFilterLabel from "@/ui/molecules/list-filter-label"

interface Props {
  icon: JSX.Element
  label: string
  color?: ListFilterColor
  filters: { key: string; value: string }[]
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
    <div className="flex flex-col items-start justify-start space-y-2 fill-white md:px-0 md:space-y-0 md:space-x-4 md:items-center md:flex-row">
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
