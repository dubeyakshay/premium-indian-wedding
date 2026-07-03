import { motion } from 'framer-motion';

/**
 * SectionHeader - Reusable ornate section title with decorative elements
 */

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, light = false }: SectionHeaderProps) {
  const titleColor = light ? '#FFF8F0' : '#2D1B0E';
  const subtitleColor = light ? 'rgba(245,230,200,0.8)' : 'rgba(45,27,14,0.6)';

  return (
    <motion.div
      className="text-center mb-12 md:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
    >
      {/* Top Ornament */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="text-lg" style={{ color: '#D4A853' }}>✦</span>
        <div className="w-16 md:w-24 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #D4A853)' }} />
        <span className="text-2xl" style={{ color: '#D4A853' }}>🪷</span>
        <div className="w-16 md:w-24 h-[1px]" style={{ background: 'linear-gradient(90deg, #D4A853, transparent)' }} />
        <span className="text-lg" style={{ color: '#D4A853' }}>✦</span>
      </div>

      {/* Title */}
      <h2
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide"
        style={{ color: titleColor }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="font-elegant text-base md:text-lg mt-2 italic"
          style={{ color: subtitleColor }}
        >
          {subtitle}
        </p>
      )}

      {/* Bottom Ornament */}
      <div className="flex items-center justify-center gap-1 mt-4">
        <div className="w-8 md:w-12 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #D4A853)' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: '#D4A853' }} />
        <div className="w-12 md:w-20 h-[1px]" style={{ background: '#D4A853' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: '#D4A853' }} />
        <div className="w-8 md:w-12 h-[1px]" style={{ background: 'linear-gradient(90deg, #D4A853, transparent)' }} />
      </div>
    </motion.div>
  );
}
