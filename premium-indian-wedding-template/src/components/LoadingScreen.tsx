'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import config from '@/data/wedding-config';
import MandalaPattern from './decorative/MandalaPattern';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const duration = config.theme.animations.loadingScreenDuration;
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 700);
    }, duration);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-wine-dark"
      animate={exiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      {/* Background mandala */}
      <div className="absolute mandala-rotate opacity-20">
        <MandalaPattern size={500} color="#D4AF37" opacity={0.3} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* Om symbol */}
        <motion.div
          className="text-5xl mb-6 text-gold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          ॐ
        </motion.div>

        <motion.p
          className="text-gold/60 font-sans text-xs uppercase tracking-[0.3em] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Shubh Vivah
        </motion.p>

        <motion.h1
          className="font-display text-4xl md:text-6xl text-gold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {config.bride.firstName}
        </motion.h1>

        <motion.p
          className="text-gold/60 text-2xl font-display my-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 }}
        >
          &
        </motion.p>

        <motion.h1
          className="font-display text-4xl md:text-6xl text-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          {config.groom.firstName}
        </motion.h1>

        {/* Loading bar */}
        <motion.div
          className="mt-10 w-48 mx-auto h-px bg-gold/20 rounded overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="h-full bg-gold"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.5, duration: 1.2, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Music indicator */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="w-0.5 bg-gold/50 rounded-full"
              animate={{
                height: [4, 12 + Math.random() * 8, 4],
              }}
              transition={{
                duration: 0.6 + Math.random() * 0.4,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: i * 0.1,
              }}
            />
          ))}
          <span className="text-gold/30 font-sans text-[9px] uppercase tracking-wider ml-2">
            ♪ Playing
          </span>
        </motion.div>
      </motion.div>

      {/* Corner ornaments */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-gold/30 rounded-tl-lg" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-gold/30 rounded-tr-lg" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-gold/30 rounded-bl-lg" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-gold/30 rounded-br-lg" />
    </motion.div>
  );
}
