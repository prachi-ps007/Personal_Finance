import './Starfield.css';

/** Constellation-like star positions — clusters that suggest shapes */
const STAR_POSITIONS = [
  // Ursa-like cluster (top-left)
  { x: 8, y: 12 },
  { x: 12, y: 8 },
  { x: 15, y: 14 },
  { x: 18, y: 10 },
  { x: 22, y: 16 },
  { x: 20, y: 20 },
  { x: 14, y: 18 },
  // Orion belt (center-right)
  { x: 72, y: 25 },
  { x: 78, y: 28 },
  { x: 84, y: 24 },
  { x: 80, y: 32 },
  { x: 88, y: 35 },
  // Cassiopeia W (top-right)
  { x: 75, y: 8 },
  { x: 82, y: 12 },
  { x: 88, y: 6 },
  { x: 92, y: 14 },
  { x: 96, y: 10 },
  // Lyra (bottom-left)
  { x: 15, y: 65 },
  { x: 20, y: 70 },
  { x: 25, y: 62 },
  { x: 22, y: 75 },
  { x: 28, y: 72 },
  // Scattered filler stars
  { x: 35, y: 22 },
  { x: 45, y: 35 },
  { x: 55, y: 18 },
  { x: 60, y: 45 },
  { x: 40, y: 55 },
  { x: 50, y: 68 },
  { x: 65, y: 58 },
  { x: 30, y: 40 },
  { x: 70, y: 48 },
  { x: 5, y: 45 },
  { x: 95, y: 55 },
  { x: 10, y: 82 },
  { x: 85, y: 72 },
  { x: 38, y: 78 },
  { x: 92, y: 88 },
];

function Starfield() {
  return (
    <div className="starfield" aria-hidden>
      {STAR_POSITIONS.map((pos, i) => (
        <span
          key={i}
          className={`star star--${(i % 3) + 1}`}
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            animationDelay: `${(i * 0.15) % 3}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Starfield;
