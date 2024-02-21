// External libraries
import React from "react"

/**
 * A custom React hook for managing the visibility of a sidebar.
 *
 * This hook initializes the sidebar's visibility to `false` (hidden by default) and
 * provides functions to toggle the sidebar's visibility and explicitly close the sidebar.
 *
 * @returns An object containing:
 * - `sidebarVisible`: A boolean state indicating whether the sidebar is currently visible.
 * - `toggleSidebar`: A function to toggle the sidebar's visibility.
 * - `closeSidebar`: A function to explicitly set the sidebar's visibility to false (hidden).
 */
const useSidebarVisibility = () => {
  // State to track the visibility of the sidebar
  const [sidebarVisible, setSidebarVisible] = React.useState(false)

  // Function to toggle the visibility state of the sidebar
  const toggleSidebar = () => setSidebarVisible(!sidebarVisible)

  // Function to explicitly close (hide) the sidebar
  const closeSidebar = () => setSidebarVisible(false)

  // Return the visibility state and control functions
  return { sidebarVisible, toggleSidebar, closeSidebar }
}

export default useSidebarVisibility
