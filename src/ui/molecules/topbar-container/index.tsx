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
        hasScrolled ? " " : " "
      } top-4 z-20 flex items-center justify-between w-full px-3 lg:px-4 `}
    >
      {children}
    </div>
  )
}

export default TopBarContainer
