interface Props {
  children?: React.ReactNode
}

const HomePageContainer = ({ children }: Props) => {
  return (
    <div
      className={
        "flex overflow-x-hidden relative flex-col items-center justify-center text-defaultTextColor dark:text-defaultTextColor-dark transition-colors duration-500"
      }
    >
      {children}
    </div>
  )
}

export default HomePageContainer
