import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: string;
  opacity: number;
}

const petalTypes = ['🌸', '✿', '❀', '✾'];

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 10,
      duration: 12 + Math.random() * 15,
      delay: Math.random() * 12,
      type: petalTypes[Math.floor(Math.random() * petalTypes.length)],
      opacity: 0.15 + Math.random() * 0.2,
    })));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal absolute"
          style={{
            left: `${p.left}%`,
            top: '-30px',
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          {p.type}
        </div>
      ))}
    </div>
  );
}
