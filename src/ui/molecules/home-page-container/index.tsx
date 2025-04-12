import CyberpunkEffect from "@/ui/animations/cyberpunk"

interface Props {
  children?: React.ReactNode
}

const HomePageContainer: React.FC<Props> = ({ children }) => {
  return (
    <main className="relative flex flex-col overflow-x-hidden">
      <div className="fixed top-0 left-0 w-screen h-screen bg-transparent opacity-60 pointer-events-none z-[-1]">
        <CyberpunkEffect />
      </div>
      {children}
    </main>
  )
}

export default HomePageContainer
