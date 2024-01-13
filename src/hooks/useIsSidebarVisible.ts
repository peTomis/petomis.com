import { Dispatch, SetStateAction, useState } from "react"

export function useSidebarVisible(): [
  boolean,
  Dispatch<SetStateAction<boolean>>
] {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return [sidebarVisible, setSidebarVisible]
}
