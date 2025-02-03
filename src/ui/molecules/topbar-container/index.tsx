// Hooks
import useScrolledPastVH from "@/hooks/useScrolledPastVH"

interface Props {
  children?: React.ReactNode
}

const TopBarContainer = ({ children }: Props) => {
  const hasScrolled = useScrolledPastVH(0.01)

  return (
    <div
      id="topBar"
      className={`fixed ${
        hasScrolled
          ? " bg-background dark:bg-background-dark  backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
          : " "
      } top-0 z-20 flex items-center justify-between w-full lg:pr-4 `}
    >
      {children}
    </div>
  )
}

export default TopBarContainer
