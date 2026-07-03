import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

/**
 * CountdownSection - Animated countdown timer to wedding day
 * Features confetti effect when countdown reaches zero
 */

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const targetDate = new Date(weddingConfig.wedding.date + 'T19:00:00').getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setIsComplete(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    { label: 'Days', value: timeLeft.days, emoji: '📅' },
    { label: 'Hours', value: timeLeft.hours, emoji: '⏰' },
    { label: 'Minutes', value: timeLeft.minutes, emoji: '⏳' },
    { label: 'Seconds', value: timeLeft.seconds, emoji: '✨' },
  ];

  return (
    <section
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A0A0A 0%, #3D1515 50%, #1A0A0A 100%)',
      }}
    >
      <div className="absolute inset-0 mandala-pattern opacity-10" />

      {/* Confetti when complete */}
      {isComplete && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                background: ['#D4A853', '#8B1A1A', '#10B981', '#EC4899', '#F59E0B'][i % 5],
                animation: `confettiFall ${3 + Math.random() * 4}s linear ${Math.random() * 2}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative max-w-4xl mx-auto">
        <SectionHeader
          title="Counting Down To Forever"
          subtitle={isComplete ? "The celebration has begun! 🎉" : "Every second brings us closer to our forever"}
          light
        />

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {countdownItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center p-4 md:p-6 rounded-2xl glow-pulse"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(212,168,83,0.3)',
                backdropFilter: 'blur(10px)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl mb-2">{item.emoji}</div>
              <motion.div
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient"
                key={item.value}
                initial={{ scale: 1.2, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(item.value).padStart(2, '0')}
              </motion.div>
              <p
                className="font-elegant text-xs md:text-sm mt-2 tracking-widest uppercase"
                style={{ color: 'rgba(212,168,83,0.7)' }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Wedding Date */}
        <motion.p
          className="text-center mt-8 font-elegant text-sm md:text-base"
          style={{ color: 'rgba(245,230,200,0.6)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Save the Date: {new Date(weddingConfig.wedding.date).toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
          })}
        </motion.p>
      </div>
    </section>
  );
}
