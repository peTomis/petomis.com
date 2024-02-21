// External libraries
import React from "react"

/**
 * Custom React hook for persisting state to `localStorage`.
 *
 * This hook tries to read an existing value from `localStorage` by the given key
 * on initialization. If the key does not exist, or if an error occurs during retrieval
 * (e.g., due to an invalid format), the provided default value is used instead.
 *
 * Any updates to the state are automatically saved back to `localStorage`. The hook
 * handles serialization and deserialization of the value using JSON format to support
 * more complex data types beyond strings.
 *
 * @param {string} key - The key under which the value is stored in `localStorage`.
 * @param {string} defaultValue - A default value to use if no value is found or if an error occurs.
 * @returns {Array} An array containing the current state value and a setter function,
 *                  similar to the interface provided by React's `useState`.
 *
 * @example
 * const [name, setName] = useLocalStorage('name', 'Anonymous');
 * setName('Alice'); // The value 'Alice' is now persisted in localStorage under the key 'name'.
 */
export function useLocalStorage(key: string, defaultValue: string) {
  const [value, setValue] = React.useState(() => {
    let currentValue

    try {
      // Attempt to get the existing value from localStorage by key.
      // Fallback to the defaultValue if the key doesn't exist.
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      )
    } catch (error) {
      // If an error occurs (e.g., malformed JSON), use the defaultValue.
      currentValue = defaultValue
    }

    return currentValue
  })

  React.useEffect(() => {
    // Automatically update localStorage when the value changes.
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}
