function DotGrid() {
  return (
    <div className="dot-grid" aria-hidden="true">
      {Array.from({ length: 18 * 12 }).map((_, i) => {
        const col = i % 18
        const row = Math.floor(i / 18)
        const delay = ((Math.sin(col * 0.7) + Math.cos(row * 0.9) + 2) / 4) * 3.2
        return (
          <div
            key={i}
            className="dot-grid-item"
            style={{ animationDelay: `${delay.toFixed(2)}s` }}
          />
        )
      })}
    </div>
  )
}

export default DotGrid;