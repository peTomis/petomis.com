// Icons
import MoonIcon from "@/ui/icons/Moon"
import SunIcon from "@/ui/icons/Sun"

interface Props {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const DarkModeSwitchButton = ({ darkMode, setDarkMode }: Props) => {
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
  }

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
          aria-label="Toggle dark mode"
          onChange={handleDarkModeToggle}
        />
        <div className="block w-16 rounded-full h-9 bg-background-dark bg-opacity-10 dark:bg-background dark:bg-opacity-10">
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

export default DarkModeSwitchButton
