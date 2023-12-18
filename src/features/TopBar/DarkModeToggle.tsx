import React, { useState, useEffect } from "react"
import MoonIcon from "@/ui/icons/Moon"
import SunIcon from "@/ui/icons/Sun"
import { useDarkMode } from "@/hooks/useDarkMode"

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <div className="flex items-center justify-center">
      <label
        htmlFor="toggle"
        className="relative flex items-center cursor-pointer"
      >
        <input
          id="toggle"
          type="checkbox"
          className="sr-only"
          onChange={() => setDarkMode(!darkMode)}
        />
        <div className="block w-16 rounded-full h-9 bg-background-dark bg-opacity-20 dark:bg-background dark:bg-opacity-20">
          <div className="flex items-center justify-between h-full px-1 fill-defaultTextColor dark:fill-defaultTextColor-dark">
            <SunIcon />
            <MoonIcon />
          </div>
        </div>
        <div
          className={`dot flex justify-center items-center absolute left-1 top-1 bg-background fill-background-dark w-7 h-7 rounded-full transition ${
            darkMode ? "transform translate-x-7" : ""
          }`}
        >
          {darkMode ? <MoonIcon /> : <SunIcon />}
        </div>
      </label>
    </div>
  )
}

export default DarkModeToggle
