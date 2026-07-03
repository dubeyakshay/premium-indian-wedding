import { useEffect, useState } from 'react';

interface SparkleItem {
  id: number; left: number; top: number; size: number; delay: number; duration: number;
}

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<SparkleItem[]>([]);

  useEffect(() => {
    setSparkles(Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 8,
      duration: 3 + Math.random() * 4,
    })));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[4] overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle absolute rounded-full"
          style={{
            left: `${s.left}%`, top: `${s.top}%`,
            width: `${s.size}px`, height: `${s.size}px`,
            background: 'radial-gradient(circle, rgba(201,168,76,0.8), transparent)',
            animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
