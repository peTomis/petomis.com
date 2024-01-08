import useIsScrollingUp from "@/hooks/useIsScrollingUp"
import React from "react"

interface Props {
  children?: React.ReactNode
}

const TopBarContainer = ({ children }: Props) => {
  const isScrollingUp = useIsScrollingUp()

  return (
    <div
      id="topBar"
      className={`${
        isScrollingUp
          ? "fixed bg-background dark:bg-background-dark  backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
          : "absolute "
      } top-0 z-20 flex items-center justify-between w-full p-2 lg:pr-4 `}
    >
      {children}
    </div>
  )
}

export default TopBarContainer
