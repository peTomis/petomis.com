import MoonIcon from "@/ui/icons/Moon"
import SunIcon from "@/ui/icons/Sun"
import { useDarkMode } from "@/hooks/useDarkMode"
import DarkModeSwitchButton from "@/ui/molecules/DarkModeSwitchButton"

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  return <DarkModeSwitchButton darkMode={darkMode} setDarkMode={setDarkMode} />
}

export default DarkModeToggle
