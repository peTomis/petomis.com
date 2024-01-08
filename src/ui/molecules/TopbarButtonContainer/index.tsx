interface Props {
  children: React.ReactNode
  id?: string
}

const TopBarButtonContainer = ({ children, id }: Props) => {
  return (
    <div id={id} className="flex flex-row space-x-4 ">
      {children}
    </div>
  )
}

export default TopBarButtonContainer
