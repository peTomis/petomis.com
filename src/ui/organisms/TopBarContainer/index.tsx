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
        isScrollingUp ? "fixed" : "absolute"
      } top-0 z-20 flex items-center justify-center w-full p-2 space-x-4 lg:justify-end lg:pr-4 bg-background dark:bg-background-dark  backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80`}
    >
      {children}
    </div>
  )
}

export default TopBarContainer
