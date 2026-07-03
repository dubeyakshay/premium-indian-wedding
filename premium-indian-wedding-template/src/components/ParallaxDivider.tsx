import { motion } from 'framer-motion';

/**
 * ParallaxDivider - Beautiful image divider between sections
 * with overlay text and parallax scrolling effect
 */

interface ParallaxDividerProps {
  image: string;
  text?: string;
  subtext?: string;
  height?: string;
}

export default function ParallaxDivider({ image, text, subtext, height = '300px' }: ParallaxDividerProps) {
  return (
    <div
      className="relative overflow-hidden flex items-center justify-center"
      style={{
        height,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(26,10,10,0.8), rgba(139,26,26,0.6), rgba(26,10,10,0.8))',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {text && (
          <h3 className="font-script text-3xl md:text-5xl text-gold-gradient mb-2">
            {text}
          </h3>
        )}
        {subtext && (
          <p className="font-elegant text-sm md:text-base" style={{ color: 'rgba(245,230,200,0.7)' }}>
            {subtext}
          </p>
        )}
      </motion.div>

      {/* Decorative corners */}
      <div className="absolute top-3 left-3 text-lg opacity-30" style={{ color: '#D4A853' }}>✦</div>
      <div className="absolute top-3 right-3 text-lg opacity-30" style={{ color: '#D4A853' }}>✦</div>
      <div className="absolute bottom-3 left-3 text-lg opacity-30" style={{ color: '#D4A853' }}>✦</div>
      <div className="absolute bottom-3 right-3 text-lg opacity-30" style={{ color: '#D4A853' }}>✦</div>
    </div>
  );
}
