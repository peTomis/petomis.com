import enginesPatternDarkStyle from "@/ui/patterns/engines"
import React from "react"

interface Props {
  children: React.ReactNode
}

const HomeWallpaperPattern = ({ children }: Props) => {
  return (
    <div id="home-wallpaper-pattern" style={enginesPatternDarkStyle}>
      <div
        id="home-wallpaper-gradient"
        className=" bg-gradient-radial from-background dark:from-background-dark via-background dark:via-background-dark to-background dark:to-background-dark lg:to-transparent dark:lg:to-transparent"
      >
        {children}
      </div>
    </div>
  )
}

export default HomeWallpaperPattern
