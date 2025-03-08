interface Props {
  children?: React.ReactNode
}

const HomePageContainer: React.FC<Props> = ({ children }) => {
  return (
    <main className="relative flex flex-col overflow-x-hidden">{children}</main>
  )
}

export default HomePageContainer
