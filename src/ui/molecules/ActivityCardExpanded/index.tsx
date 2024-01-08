import useLockScroll from "@/utils/lockScroll"

interface Props {
  visible: boolean
  onClose: () => void
}

const ActivityCardExpanded = ({ visible, onClose }: Props) => {
  useLockScroll()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
      <div className="w-[90vw] h-[90vh] m-8 bg-red-400">
        <div className="cursor-pointer" onClick={onClose}>
          X
        </div>
      </div>
    </div>
  )
}

export default ActivityCardExpanded
