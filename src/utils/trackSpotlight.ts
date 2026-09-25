/**
 * Mouse-move handler for cards with a cursor-following radial spotlight:
 * stores the pointer position as `--mx` / `--my` (percentages) on the card.
 */
const trackSpotlight = (event: React.MouseEvent<HTMLElement>) => {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`)
  card.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`)
}

export default trackSpotlight
