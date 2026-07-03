'use client';

import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  color: string;
  swayAmount: number;
}

const PETAL_COLORS = [
  '#D4AF37', // gold
  '#E8B4B8', // rose
  '#FF9933', // saffron
  '#C0392B', // deep red
  '#F5D260', // light gold
];

export default function FloatingPetals({ count = 15 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 15,
      size: 8 + Math.random() * 14,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      swayAmount: 30 + Math.random() * 80,
    }));
    setPetals(generated);
  }, [count]);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal absolute"
          style={{
            left: `${p.left}%`,
            ['--duration' as string]: `${p.duration}s`,
            ['--delay' as string]: `${p.delay}s`,
            width: p.size,
            height: p.size,
          }}
        >
          <svg viewBox="0 0 20 20" width={p.size} height={p.size}>
            <ellipse
              cx="10"
              cy="10"
              rx="8"
              ry="5"
              fill={p.color}
              opacity="0.6"
              transform="rotate(30 10 10)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
