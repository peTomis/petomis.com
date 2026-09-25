import ParticleField from "@/ui/animations/particle-field"

interface Props {
  children?: React.ReactNode
}

const HomePageContainer: React.FC<Props> = ({ children }) => {
  return (
    <main className="relative flex flex-col overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <ParticleField />
      </div>
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{
          background:
            "radial-gradient(900px 600px at 18% 12%, rgba(30,167,255,.10), transparent 60%)," +
            "radial-gradient(700px 500px at 88% 88%, rgba(30,167,255,.06), transparent 55%)",
          // Fade the glow out at the very top so the top edge is exactly the
          // page background; iOS tints the status bar with that flat color,
          // and any glow there shows up as a visible seam.
          maskImage: "linear-gradient(to bottom, transparent, #000 140px)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 140px)",
        }}
      />
      {children}
    </main>
  )
}

export default HomePageContainer
