import { motion } from 'framer-motion';

/**
 * LoadingScreen - Elegant Indian-themed loading animation
 * Features rotating mandala and shimmering text
 */

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #0D0505 0%, #2D1010 30%, #1A0808 60%, #0D0505 100%)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Mandala SVG Rotating */}
      <motion.div
        className="relative w-32 h-32 mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="mandalaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A853" />
              <stop offset="50%" stopColor="#F5E6C8" />
              <stop offset="100%" stopColor="#D4A853" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#mandalaGrad)" strokeWidth="1.5">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="50" />
            <circle cx="100" cy="100" r="30" />
            <circle cx="100" cy="100" r="10" />
            {[0, 30, 60, 90, 120, 150].map((angle) => (
              <line
                key={angle}
                x1="100"
                y1="10"
                x2="100"
                y2="190"
                transform={`rotate(${angle} 100 100)`}
              />
            ))}
            {[0, 45, 90, 135].map((angle) => (
              <ellipse
                key={`e${angle}`}
                cx="100"
                cy="100"
                rx="80"
                ry="40"
                transform={`rotate(${angle} 100 100)`}
              />
            ))}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <circle
                key={`p${angle}`}
                cx="100"
                cy="20"
                r="8"
                transform={`rotate(${angle} 100 100)`}
                fill="url(#mandalaGrad)"
                fillOpacity="0.3"
              />
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Diya */}
      <motion.div
        className="text-4xl mb-6 diya-flame"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        🪔
      </motion.div>

      {/* Loading Text */}
      <motion.p
        className="font-script text-3xl md:text-4xl"
        style={{ color: '#D4A853' }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        शुभ विवाह
      </motion.p>
      <motion.p
        className="text-sm mt-3 tracking-[0.3em] uppercase"
        style={{ color: 'rgba(212, 168, 83, 0.6)' }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        Loading your invitation...
      </motion.p>
    </motion.div>
  );
}
