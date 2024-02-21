// External libraries
import React from "react"

// Hooks
import { useLocalStorage } from "./useLocalStorage"

// Constant for the CSS class that enables dark mode
const DARK_MODE_CLASS = "dark"

/**
 * Custom hook to toggle dark mode in the application.
 * Utilizes local storage to persist user's preference across sessions.
 *
 * @returns Tuple containing the current dark mode state and a setter function.
 */
export function useDarkMode(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  // Retrieve the initial dark mode value from local storage or default to "false"
  const [storageValue, setStorageValue] = useLocalStorage("dark", "false")

  // State hook to manage dark mode status; initializes based on local storage value
  const [darkMode, setDarkMode] = React.useState(storageValue === "true")

  // Effect hook to apply the dark mode class to the <html> element and update local storage
  React.useEffect(() => {
    const element = document.documentElement // Reference to the <html> element

    // Add or remove the dark mode class based on the darkMode state
    darkMode
      ? element.classList.add(DARK_MODE_CLASS)
      : element.classList.remove(DARK_MODE_CLASS)

    // Persist the current state to local storage
    setStorageValue(String(darkMode))
  }, [darkMode]) // Re-run the effect when darkMode changes

  // Return the current dark mode state and the function to toggle it
  return [darkMode, setDarkMode]
}
