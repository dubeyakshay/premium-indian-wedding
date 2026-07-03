import { motion } from 'framer-motion';

interface ParallaxDividerProps {
  image: string;
  text?: string;
  subtext?: string;
  height?: string;
}

export default function ParallaxDivider({ image, text, subtext, height = '320px' }: ParallaxDividerProps) {
  return (
    <div className="relative overflow-hidden flex items-center justify-center"
      style={{
        height,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
      {/* Modern dark overlay */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, rgba(12,10,9,0.5) 0%, rgba(12,10,9,0.75) 100%)',
      }} />

      <motion.div className="relative text-center px-6"
        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        {text && (
          <h3 className="font-script text-3xl md:text-5xl text-gold-gradient-light mb-2">{text}</h3>
        )}
        {subtext && (
          <p className="text-xs md:text-sm tracking-widest" style={{ color: 'rgba(250,247,242,0.4)' }}>{subtext}</p>
        )}
      </motion.div>
    </div>
  );
}
