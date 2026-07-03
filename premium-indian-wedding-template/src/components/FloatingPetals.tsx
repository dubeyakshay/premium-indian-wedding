import { useEffect, useState } from 'react';

/**
 * FloatingPetals - Animated flower petals that fall across the screen.
 * Creates a dreamy, romantic atmosphere.
 */

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: string;
  opacity: number;
}

const petalEmojis = ['🌸', '🌺', '🌷', '💮', '🪷', '✿'];

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 16,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      type: petalEmojis[Math.floor(Math.random() * petalEmojis.length)],
      opacity: 0.4 + Math.random() * 0.4,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal absolute"
          style={{
            left: `${petal.left}%`,
            top: '-40px',
            fontSize: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
          }}
        >
          {petal.type}
        </div>
      ))}
    </div>
  );
}
