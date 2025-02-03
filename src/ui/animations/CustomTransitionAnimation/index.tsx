export const customTransitionAnimation = (visible: boolean | undefined) => {
  if (visible === undefined) return ""
  return `md:transform md:transition-transform md:duration-500 md:ease-in-out ${
    visible ? "md:translate-y-0" : "md:translate-y-full"
  }`
}
