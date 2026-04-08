interface Props {
  children?: React.ReactNode
}

const TopBarContainer = ({ children }: Props) => {
  return (
    <div
      id="topBar"
      className="fixed top-4 z-20 flex items-center justify-between w-full px-3 lg:px-4"
    >
      {children}
    </div>
  )
}

export default TopBarContainer
