import enginesPatternStyle from "@/ui/patterns/engines"

interface Props {
  children: React.ReactNode
}

const HomeWallpaperPattern = ({ children }: Props) => {
  return (
    <div id="home-wallpaper-pattern" style={enginesPatternStyle}>
      <div
        id="home-wallpaper-gradient"
        className=" bg-gradient-radial from-background via-background to-background xl:to-transparent"
      >
        {children}
      </div>
    </div>
  )
}

export default HomeWallpaperPattern
