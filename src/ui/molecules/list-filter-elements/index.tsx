// External Libraries
import { Flipper, Flipped } from "react-flip-toolkit"

// Hooks
import useSortedFilters from "@/hooks/useSortedFilters"

export enum ListFilterColor {
  PRIMARY200 = "bg-primary-200",
  PRIMARY300 = "bg-primary-300",
}

interface Props {
  color?: ListFilterColor
  filters: { key: string; value: string }[]
  activeFilters: string[]
  onFilterChange: (filter: string) => void
}

const ListFilterElements = ({
  activeFilters,
  filters,
  onFilterChange,
  color = ListFilterColor.PRIMARY300,
}: Props) => {
  const isActive = (filter: string) => activeFilters.includes(filter)

  const sortedFilters = useSortedFilters(filters, activeFilters)

  return (
    <Flipper flipKey={sortedFilters.map((f) => f.value).join("")}>
      <div className="flex flex-wrap w-full mx-auto">
        {sortedFilters.map((filter) => (
          <Flipped key={filter.value} flipId={filter.value}>
            <button
              onClick={() => onFilterChange(filter.value)}
              className={`flex flex-row  justify-center m-[2px] items-center space-x-2 px-4 py-2 rounded ${
                isActive(filter.value)
                  ? `${color} text-white-dark`
                  : "bg-white bg-opacity-5"
              }`}
            >
              {filter.key}
            </button>
          </Flipped>
        ))}
      </div>
    </Flipper>
  )
}

export default ListFilterElements
