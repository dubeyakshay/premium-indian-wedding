import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(`${weddingConfig.wedding.date}T19:00:00`).getTime();
    const tick = () => {
      const diff = Math.max(target - Date.now(), 0);
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <section className="relative py-24 px-5" style={{ background: '#0b1220' }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader tag="live countdown" title="Counting The Moments" subtitle="Until we say I do" light />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {units.map((u, idx) => (
            <motion.div
              key={u.label}
              className="glass-panel rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <motion.p key={u.value} className="font-display text-4xl md:text-6xl text-gold-gradient" initial={{ scale: 1.05 }} animate={{ scale: 1 }}>
                {String(u.value).padStart(2, '0')}
              </motion.p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em]" style={{ color: 'rgba(229,231,235,0.65)' }}>{u.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}