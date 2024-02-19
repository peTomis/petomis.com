// External libraries
import React from "react"

/**
 * A custom hook for managing the visibility of a sidebar.
 *
 * This hook initializes the sidebar's visibility state to `false`, indicating that
 * the sidebar is hidden by default. It provides a setter function to toggle this
 * visibility state, allowing the sidebar to be shown or hidden as needed.
 *
 * @returns A tuple containing the current visibility state of the sidebar (`sidebarVisible`)
 *          and a function to set this visibility state (`setSidebarVisible`).
 */
export function useSidebarVisible(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  // State to track whether the sidebar is visible or not.
  const [sidebarVisible, setSidebarVisible] = React.useState(false)

  // Return the visibility state along with the setter function.
  return [sidebarVisible, setSidebarVisible]
}
