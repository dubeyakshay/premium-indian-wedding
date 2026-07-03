import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';

interface HeroSectionProps {
  onOpen: () => void;
  guestName: string | null;
}

export default function HeroSection({ onOpen, guestName }: HeroSectionProps) {
  const { bride, groom, wedding } = weddingConfig;
  const dateLabel = new Date(wedding.date).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  });

  return (
    <motion.section className="fixed inset-0 z-[90] overflow-hidden" exit={{ opacity: 0 }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(2,6,23,0.55), rgba(2,6,23,0.85))' }} />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="w-full max-w-3xl text-center">
          <motion.p
            className="text-[11px] tracking-[0.35em] uppercase mb-5"
            style={{ color: 'rgba(212,175,95,0.9)' }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Together with our families
          </motion.p>

          {guestName && (
            <motion.p
              className="mb-6 text-sm"
              style={{ color: 'rgba(229,231,235,0.9)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Dear {guestName}, your presence will make our day special
            </motion.p>
          )}

          <motion.h1
            className="font-script text-gold-gradient leading-tight"
            style={{ fontSize: 'clamp(3.8rem, 11vw, 8.5rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {bride.firstName}
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-3 my-2"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="w-14 md:w-28 h-px" style={{ background: 'rgba(212,175,95,0.5)' }} />
            <span style={{ color: 'rgba(212,175,95,0.95)' }}>&</span>
            <div className="w-14 md:w-28 h-px" style={{ background: 'rgba(212,175,95,0.5)' }} />
          </motion.div>

          <motion.h1
            className="font-script text-gold-gradient leading-tight"
            style={{ fontSize: 'clamp(3.8rem, 11vw, 8.5rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {groom.firstName}
          </motion.h1>

          <motion.p
            className="mt-7 text-sm md:text-base tracking-[0.18em] uppercase"
            style={{ color: 'rgba(229,231,235,0.85)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {dateLabel}
          </motion.p>
          <motion.p
            className="mt-2 text-xs tracking-widest"
            style={{ color: 'rgba(229,231,235,0.6)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {wedding.venue.name} • {wedding.venue.city}
          </motion.p>

          <motion.div className="mt-10" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
            <motion.button
              onClick={onOpen}
              className="relative px-10 py-4 rounded-full uppercase text-xs tracking-[0.3em] cursor-pointer pulse-glow"
              style={{
                color: '#f8fafc',
                background: 'linear-gradient(135deg, rgba(139,26,58,0.45), rgba(212,175,95,0.35))',
                border: '1px solid rgba(212,175,95,0.6)',
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Open Invitation</span>
              <span
                className="absolute inset-0 rounded-full opacity-40"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)',
                  animation: 'shimmerSlide 2.2s linear infinite',
                }}
              />
            </motion.button>
          </motion.div>

          <motion.p className="mt-6 text-[11px] tracking-[0.28em] uppercase scroll-indicator" style={{ color: 'rgba(229,231,235,0.55)' }}>
            Tap to enter
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}