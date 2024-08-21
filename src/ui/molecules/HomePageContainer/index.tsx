import circuitBoardPatternStyle from "@/ui/patterns/circuit-board"

interface Props {
  children?: React.ReactNode
}

const HomePageContainer: React.FC<Props> = ({ children }) => {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-x-hidden transition-colors duration-500 text-defaultTextColor dark:text-defaultTextColor-dark">
      <div className="absolute" style={circuitBoardPatternStyle}></div>
      {children}
    </main>
  )
}

export default HomePageContainer
