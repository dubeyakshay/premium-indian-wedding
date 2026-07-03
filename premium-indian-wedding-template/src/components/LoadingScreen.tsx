import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: '#0C0A09' }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Radial glow */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 50% 40%, rgba(201,168,76,0.08) 0%, transparent 60%)',
      }} />

      {/* Mandala */}
      <motion.div
        className="relative w-24 h-24 md:w-28 md:h-28 mb-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <g fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.6">
            <circle cx="100" cy="100" r="95" />
            <circle cx="100" cy="100" r="75" />
            <circle cx="100" cy="100" r="55" />
            <circle cx="100" cy="100" r="35" />
            {[0, 30, 60, 90, 120, 150].map(a => (
              <line key={a} x1="100" y1="5" x2="100" y2="195" transform={`rotate(${a} 100 100)`} />
            ))}
            {[0, 60, 120].map(a => (
              <ellipse key={`e${a}`} cx="100" cy="100" rx="85" ry="35" transform={`rotate(${a} 100 100)`} />
            ))}
          </g>
        </svg>

        {/* Center diya */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-2xl diya-flame"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🪔
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="font-script text-2xl md:text-3xl mb-3" style={{ color: '#C9A84C' }}>
          शुभ विवाह
        </p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#C9A84C' }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <div className="w-8 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
        </div>
      </motion.div>
    </motion.div>
  );
}
