export const customTransitionAnimation = (visible: boolean | undefined) => {
  if (visible === undefined) return ""
  return `transform transition-transform duration-500 ease-in-out ${
    visible ? "translate-y-0" : "translate-y-full"
  }`
}
