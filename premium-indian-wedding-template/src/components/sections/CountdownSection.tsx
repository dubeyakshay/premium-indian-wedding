'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import config from '@/data/wedding-config';
import OrnamentDivider from '../decorative/OrnamentDivider';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - new Date().getTime();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownUnit({ value, label, delay }: { value: number; label: string; delay: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="relative">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-lg border border-gold/30 bg-wine-dark/80 backdrop-blur-sm flex items-center justify-center glow-gold">
          <span className="font-display text-3xl md:text-5xl text-gold">
            {String(value).padStart(2, '0')}
          </span>
        </div>
        {/* Corner decorations */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-gold/60" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-gold/60" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-gold/60" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-gold/60" />
      </div>
      <span className="mt-3 text-cream/60 font-sans text-[10px] md:text-xs uppercase tracking-[0.2em]">
        {label}
      </span>
    </motion.div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(config.weddingDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(config.weddingDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-wine-dark overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          className="text-gold/60 font-sans text-xs uppercase tracking-[0.3em] mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Save the Date
        </motion.p>

        <motion.h2
          className="font-display text-3xl md:text-5xl text-cream mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Counting Down to Forever
        </motion.h2>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          <CountdownUnit value={timeLeft.days} label="Days" delay={0} />
          <span className="text-gold/40 font-display text-2xl md:text-4xl mt-[-20px]">:</span>
          <CountdownUnit value={timeLeft.hours} label="Hours" delay={0.1} />
          <span className="text-gold/40 font-display text-2xl md:text-4xl mt-[-20px]">:</span>
          <CountdownUnit value={timeLeft.minutes} label="Minutes" delay={0.2} />
          <span className="text-gold/40 font-display text-2xl md:text-4xl mt-[-20px]">:</span>
          <CountdownUnit value={timeLeft.seconds} label="Seconds" delay={0.3} />
        </div>

        <OrnamentDivider className="mt-12" />

        <motion.blockquote
          className="mt-4 font-body text-lg md:text-xl italic text-cream/70 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          &ldquo;{config.quote}&rdquo;
          <footer className="mt-3 text-gold/50 font-sans text-xs uppercase tracking-[0.15em] not-italic">
            — {config.quoteAuthor}
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
