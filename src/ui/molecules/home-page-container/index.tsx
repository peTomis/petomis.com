interface Props {
  children?: React.ReactNode
}

const HomePageContainer: React.FC<Props> = ({ children }) => {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-x-hidden transition-colors duration-500">
      {children}
    </main>
  )
}

export default HomePageContainer
