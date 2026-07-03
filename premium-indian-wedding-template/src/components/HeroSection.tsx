import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';

/**
 * HeroSection - Grand landing screen with envelope opening animation
 * Features animated background, floating elements, and magical reveal
 */

interface HeroSectionProps {
  onOpen: () => void;
  guestName: string | null;
}

export default function HeroSection({ onOpen, guestName }: HeroSectionProps) {
  const { bride, groom, wedding } = weddingConfig;

  const weddingDate = new Date(wedding.date);
  const formattedDate = weddingDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(26,10,10,0.85) 0%, rgba(61,21,21,0.75) 30%, rgba(26,10,10,0.85) 60%, rgba(45,27,14,0.85) 100%)',
        }}
      />
      {/* Mandala Pattern overlay */}
      <div className="absolute inset-0 mandala-pattern opacity-15" />

      {/* Animated Border Frame */}
      <div className="absolute inset-4 md:inset-8 border border-yellow-700/20 rounded-3xl pointer-events-none" />
      <div className="absolute inset-6 md:inset-12 border border-yellow-700/10 rounded-2xl pointer-events-none" />

      {/* Corner Ornaments - Mandala style */}
      {[
        { pos: 'top-6 left-6', delay: '0s', dir: 'normal' },
        { pos: 'top-6 right-6', delay: '0s', dir: 'reverse' },
        { pos: 'bottom-6 left-6', delay: '5s', dir: 'normal' },
        { pos: 'bottom-6 right-6', delay: '5s', dir: 'reverse' },
      ].map((corner, i) => (
        <div
          key={i}
          className={`absolute ${corner.pos} rotate-slow`}
          style={{ animationDirection: corner.dir as 'normal' | 'reverse', animationDelay: corner.delay }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" opacity="0.25">
            <g fill="none" stroke="#D4A853" strokeWidth="0.8">
              <circle cx="25" cy="25" r="20" />
              <circle cx="25" cy="25" r="14" />
              <circle cx="25" cy="25" r="8" />
              {[0, 45, 90, 135].map((a) => (
                <line key={a} x1="25" y1="5" x2="25" y2="45" transform={`rotate(${a} 25 25)`} />
              ))}
            </g>
          </svg>
        </div>
      ))}

      {/* Floating Decorative Diyas */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xl md:text-2xl"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        >
          🪔
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative text-center px-6 max-w-2xl mx-auto">
        {/* Om Symbol */}
        <motion.div
          className="text-3xl md:text-4xl mb-4"
          style={{ color: '#D4A853' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          🙏 ॐ श्री गणेशाय नमः 🙏
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="w-48 md:w-64 h-[1px] mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, #D4A853, transparent)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Guest Greeting */}
        {guestName && (
          <motion.p
            className="font-elegant text-lg md:text-xl mb-3 italic"
            style={{ color: '#F5E6C8' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Dear {guestName}, your presence will make our day special ✨
          </motion.p>
        )}

        {/* Subtitle */}
        <motion.p
          className="font-elegant text-base md:text-lg tracking-[0.2em] uppercase mb-4"
          style={{ color: 'rgba(212, 168, 83, 0.8)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Together with our families
        </motion.p>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-gold-gradient leading-tight">
            {bride.firstName}
          </h1>
          <motion.div
            className="text-3xl md:text-4xl my-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ❤️
          </motion.div>
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-gold-gradient leading-tight">
            {groom.firstName}
          </h1>
        </motion.div>

        {/* Wedding Date */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p
            className="font-display text-sm md:text-base tracking-[0.15em] uppercase"
            style={{ color: '#F5E6C8' }}
          >
            {formattedDate}
          </p>
          <p
            className="text-xs md:text-sm mt-1 tracking-wider"
            style={{ color: 'rgba(245, 230, 200, 0.6)' }}
          >
            {wedding.venue.name}, {wedding.venue.city}
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="w-48 md:w-64 h-[1px] mx-auto my-6"
          style={{ background: 'linear-gradient(90deg, transparent, #D4A853, transparent)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
        />

        {/* Open Invitation Button */}
        <motion.button
          onClick={onOpen}
          className="relative px-10 py-4 rounded-full font-display text-base md:text-lg tracking-wider uppercase overflow-hidden group cursor-pointer"
          style={{
            border: '2px solid #D4A853',
            color: '#FFF8F0',
            background: 'transparent',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">✉️ Open Invitation</span>
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: 'linear-gradient(135deg, #8B1A1A, #D4A853)' }}
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Scroll Hint */}
        <motion.div
          className="mt-8 text-xs tracking-widest scroll-indicator"
          style={{ color: 'rgba(212, 168, 83, 0.5)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          Tap to begin the celebration
        </motion.div>
      </div>
    </motion.div>
  );
}
