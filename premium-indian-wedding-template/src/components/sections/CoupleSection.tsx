'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import config from '@/data/wedding-config';
import type { FamilyMember } from '@/data/wedding-config';
import MandalaPattern from '../decorative/MandalaPattern';
import OrnamentDivider from '../decorative/OrnamentDivider';

interface PersonData {
  firstName: string;
  lastName: string;
  parentage: string;
  bio: string;
  image: string;
  family: FamilyMember[];
}

function PersonCard({ person, side }: { person: PersonData; side: 'left' | 'right' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, x: side === 'left' ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Photo with ornate frame */}
      <div className="relative mb-8 group">
        <div className="w-56 h-72 md:w-64 md:h-80 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] overflow-hidden border-2 border-gold/40 shadow-xl shadow-gold/10">
          <img
            src={person.image}
            alt={person.firstName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        </div>
        {/* Decorative circle */}
        <div className="absolute -inset-4 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] border border-gold/20 pointer-events-none" />
        {/* Sparkle accents */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-gold text-sm">✦</div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-gold text-sm">✦</div>
      </div>

      <h3 className="font-display text-3xl md:text-4xl text-maroon mb-2">
        {person.firstName}
      </h3>
      <p className="font-display text-lg text-gold/80 mb-3">{person.lastName}</p>
      <p className="font-sans text-xs uppercase tracking-[0.15em] text-wine/60 mb-4">
        {person.parentage}
      </p>
      <p className="font-body text-base text-wine/70 italic max-w-xs mb-5">
        {person.bio}
      </p>

      {/* Family Members */}
      {person.family.length > 0 && (
        <div className="mt-2 space-y-1">
          {person.family.map((member, i) => (
            <p key={i} className="text-wine/50 font-sans text-xs">
              <span className="text-gold/60 uppercase tracking-wider text-[10px]">{member.relation}:</span>{' '}
              {member.name}
            </p>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function CoupleSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="couple" className="relative py-20 md:py-32 bg-cream overflow-hidden">
      {/* Background Mandala */}
      {config.theme.animations.mandalaRotation && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mandala-rotate">
          <MandalaPattern size={600} opacity={0.04} color="#8B1A1A" />
        </div>
      )}

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold font-sans text-xs uppercase tracking-[0.3em] mb-4">
            ✦ The Couple ✦
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-maroon mb-4">
            Two Hearts, One Soul
          </h2>
          <OrnamentDivider />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <PersonCard person={config.bride} side="left" />
          <PersonCard person={config.groom} side="right" />
        </div>

        {/* Center ampersand */}
        <motion.div
          className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
        >
          <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
            <span className="font-display text-2xl text-gold">&</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
