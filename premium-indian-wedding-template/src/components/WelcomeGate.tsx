'use client';

import { motion } from 'framer-motion';
import config from '@/data/wedding-config';
import MandalaPattern from './decorative/MandalaPattern';

export default function WelcomeGate({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-wine-dark"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Background Mandalas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mandala-rotate opacity-10">
        <MandalaPattern size={600} color="#D4AF37" opacity={0.2} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mandala-rotate opacity-10" style={{ animationDirection: 'reverse' }}>
        <MandalaPattern size={400} color="#D4AF37" opacity={0.15} />
      </div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 0.5px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Corner ornaments */}
      <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-gold/20 rounded-tl-sm" />
      <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-gold/20 rounded-tr-sm" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-gold/20 rounded-bl-sm" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-gold/20 rounded-br-sm" />

      <div className="relative z-10 text-center px-8 max-w-md">
        {/* Auspicious symbol */}
        <motion.div
          className="text-6xl mb-8 text-gold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 150 }}
        >
          🙏
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-gold/50 font-sans text-[10px] uppercase tracking-[0.5em] mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          You are cordially invited
        </motion.p>

        {/* Couple Names */}
        <motion.h1
          className="font-display text-4xl md:text-5xl text-cream mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {config.bride.firstName}
        </motion.h1>

        <motion.p
          className="gold-shimmer font-display text-2xl my-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          &
        </motion.p>

        <motion.h1
          className="font-display text-4xl md:text-5xl text-cream mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          {config.groom.firstName}
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-gold/40 text-xs">✦</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
        </motion.div>

        {/* Date preview */}
        <motion.p
          className="text-cream/40 font-body text-sm italic mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          {new Date(config.weddingDate).toLocaleDateString('en-IN', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </motion.p>

        {/* Enter Button — this click enables audio autoplay */}
        <motion.button
          onClick={onEnter}
          className="group relative px-10 py-4 border-2 border-gold/50 text-gold font-sans text-xs uppercase tracking-[0.3em] hover:bg-gold hover:text-wine-dark transition-all duration-500 rounded-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Shimmer effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="relative flex items-center gap-3">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            Open Invitation
          </span>
        </motion.button>

        {config.settings.music.enabled && (
          <motion.p
            className="text-cream/20 font-sans text-[10px] mt-4 uppercase tracking-[0.1em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            🎵 Music will play automatically
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
