// Hooks
import { useDarkMode } from "@/hooks/useDarkMode"

// Molecules
import DarkModeSwitchButton from "@/ui/molecules/DarkModeSwitchButton"

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <div className="flex flex-row items-center justify-end w-full">
      <DarkModeSwitchButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default DarkModeToggle
