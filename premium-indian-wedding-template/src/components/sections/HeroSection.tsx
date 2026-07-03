'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import config from '@/data/wedding-config';
import MandalaPattern from '../decorative/MandalaPattern';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!config.theme.animations.parallaxHero) return;
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scroll = window.scrollY;
      const bg = sectionRef.current.querySelector('.hero-bg') as HTMLElement;
      if (bg) {
        bg.style.transform = `translateY(${scroll * 0.4}px) scale(1.1)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const weddingDate = new Date(config.weddingDate);
  const dateStr = weddingDate.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="hero-bg absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${config.images.heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Mandala Decorations */}
      {config.theme.animations.mandalaRotation && (
        <>
          <div className="absolute top-10 left-10 mandala-rotate">
            <MandalaPattern size={200} opacity={0.08} />
          </div>
          <div className="absolute bottom-10 right-10 mandala-rotate" style={{ animationDirection: 'reverse' }}>
            <MandalaPattern size={250} opacity={0.06} />
          </div>
        </>
      )}

      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-gold/30" />
      <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-gold/30" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b border-l border-gold/30" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-gold/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          className="text-gold/70 font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          ✦ Shubh Vivah ✦
        </motion.p>

        <motion.p
          className="text-cream/60 font-body text-sm md:text-base italic mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Together with their families
        </motion.p>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {config.bride.firstName}
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-4 my-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6, type: 'spring' }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
          <span className={`font-display text-3xl md:text-4xl ${config.theme.animations.goldShimmer ? 'gold-shimmer' : 'text-gold'}`}>&</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          {config.groom.firstName}
        </motion.h1>

        <motion.p
          className="text-gold font-sans text-xs md:text-sm uppercase tracking-[0.25em] mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {config.tagline}
        </motion.p>

        <motion.div
          className="mt-8 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <p className="text-cream/80 font-body text-lg md:text-xl italic">{dateStr}</p>
          <p className="text-gold/70 font-sans text-xs uppercase tracking-[0.2em]">{config.mainVenue.name}</p>
          <p className="text-cream/50 font-sans text-xs">{config.mainVenue.city}</p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border border-gold/40 rounded-full mx-auto flex justify-center"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-gold rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
