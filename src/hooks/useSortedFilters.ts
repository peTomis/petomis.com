// External libraries
import React from "react"

/**
 * Custom React hook that sorts an array of filter objects. Active filters are moved to the
 * beginning of the array, and the filter with a value of "other" is moved to the end.
 *
 * @param {{ key: string; value: string }[]} filters - An array of filter objects to sort.
 * @param {string[]} activeFilters - An array of strings representing the currently active filters.
 * @returns A sorted array of filter objects based on the active status and specific value criteria.
 */
const useSortedFilters = (
  filters: { key: string; value: string }[],
  activeFilters: string[]
) => {
  return React.useMemo(() => {
    // Sort filters based on whether they're active and ensuring "other" is at the end
    return filters.sort((a, b) => {
      // Move "other" to the end
      if (a.value === "other") return 1
      if (b.value === "other") return -1

      // Prioritize active filters
      const aActive = activeFilters.includes(a.value)
      const bActive = activeFilters.includes(b.value)
      if (aActive && !bActive) return -1
      if (!aActive && bActive) return 1

      // If both are active or inactive, sort alphabetically by 'value' for consistency
      return a.value.localeCompare(b.value)
    })
  }, [filters, activeFilters]) // Recompute the memoized value when filters or activeFilters change
}

export default useSortedFilters
