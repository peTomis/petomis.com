import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useLocalStorage } from "./useLocalStorage"

const DARK_MODE_CLASS = "dark"

export function useDarkMode(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [storageValue, setStorageValue] = useLocalStorage("dark", "false")

  const [darkMode, setDarkMode] = useState(storageValue === "true")

  useEffect(() => {
    const element = document.documentElement

    darkMode
      ? element.classList.add(DARK_MODE_CLASS)
      : element.classList.remove(DARK_MODE_CLASS)

    setStorageValue(String(darkMode))
  }, [darkMode])

  return [darkMode, setDarkMode]
}
