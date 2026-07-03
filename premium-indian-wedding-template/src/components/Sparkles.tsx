import { useEffect, useState } from 'react';

/**
 * Sparkles - Floating sparkle particles for magical effect
 */

interface SparkleItem {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<SparkleItem[]>([]);

  useEffect(() => {
    const items: SparkleItem[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 3 + Math.random() * 6,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }));
    setSparkles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[4] overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle absolute rounded-full"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: 'radial-gradient(circle, #D4A853, transparent)',
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
