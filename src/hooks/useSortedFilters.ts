import { useMemo } from "react"

const useSortedFilters = (filters: string[], activeFilters: string[]) => {
  return useMemo(() => {
    const sorted = [...filters].sort()

    // if exists the filter Other, place it at end
    sorted.sort((a, b) => {
      if (a === "Other") {
        return 1
      } else if (b === "Other" || b === "Altro") {
        return -1
      }
      return 0
    })

    return sorted.sort((a, b) => {
      const aActive = activeFilters.includes(a)
      const bActive = activeFilters.includes(b)
      if (aActive && !bActive) {
        return -1
      } else if (!aActive && bActive) {
        return 1
      }
      return 0
    })
  }, [filters, activeFilters])
}

export default useSortedFilters
