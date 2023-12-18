import { Dispatch, SetStateAction, useEffect, useState } from "react"

const DARK_MODE_CLASS = "dark"

export function useDarkMode(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const element = document.documentElement

    darkMode
      ? element.classList.add(DARK_MODE_CLASS)
      : element.classList.remove(DARK_MODE_CLASS)
  }, [darkMode])

  return [darkMode, setDarkMode]
}
