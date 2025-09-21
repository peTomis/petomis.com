import React, { useEffect, useState } from "react"

const CyberpunkEffect = () => {
  const [squares, setSquares] = useState<
    { id: number; x: number; y: number; size: number }[]
  >([])

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now()
      const size = Math.floor(Math.random() * 20) + 10
      const newSquare = {
        id,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size,
      }

      setSquares((prev) => [...prev, newSquare])

      setTimeout(() => {
        setSquares((prev) => prev.filter((square) => square.id !== id))
      }, 2500) // Square disappears after 2.5 seconds
    }, 50) // New square every 50ms

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-screen h-screen">
      {squares.map((square) => (
        <div
          key={square.id}
          className="absolute bg-primary-400 opacity-80 animate-fade"
          style={{
            left: square.x,
            top: square.y,
            width: `${square.size}px`,
            height: `${square.size}px`,
          }}
        />
      ))}
    </div>
  )
}

export default CyberpunkEffect
