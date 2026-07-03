import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';

/**
 * Footer - Elegant footer with couple names and credits
 */

export default function Footer() {
  const { bride, groom, social } = weddingConfig;

  return (
    <footer
      className="relative py-16 px-4 text-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D0505, #1A0A0A)',
      }}
    >
      <div className="absolute inset-0 mandala-pattern opacity-5" />

      <div className="relative max-w-2xl mx-auto">
        {/* Decorative Top */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-16 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #D4A853)' }} />
          <span className="text-xl" style={{ color: '#D4A853' }}>🪷</span>
          <div className="w-16 h-[1px]" style={{ background: 'linear-gradient(90deg, #D4A853, transparent)' }} />
        </div>

        {/* Couple Names */}
        <motion.h2
          className="font-script text-4xl md:text-5xl text-gold-gradient mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {bride.firstName} & {groom.firstName}
        </motion.h2>

        <p className="font-elegant text-sm italic mb-4" style={{ color: 'rgba(245,230,200,0.5)' }}>
          Two souls, one beautiful journey
        </p>

        <p className="text-xs mb-6" style={{ color: 'rgba(245,230,200,0.3)' }}>
          {social.hashtag}
        </p>

        {/* Divider */}
        <div className="section-divider mb-6 max-w-xs mx-auto" />

        {/* Credits */}
        <p className="text-xs" style={{ color: 'rgba(245,230,200,0.3)' }}>
          Made with ❤️ for {bride.firstName} & {groom.firstName}
        </p>
        <p className="text-xs mt-1" style={{ color: 'rgba(245,230,200,0.2)' }}>
          © {new Date().getFullYear()} • A Royal Indian Wedding
        </p>

        {/* Bottom Ornament */}
        <div className="mt-8 flex items-center justify-center gap-1">
          <span className="text-xs" style={{ color: 'rgba(212,168,83,0.3)' }}>✦</span>
          <span className="text-lg" style={{ color: 'rgba(212,168,83,0.3)' }}>🕊️</span>
          <span className="text-xs" style={{ color: 'rgba(212,168,83,0.3)' }}>✦</span>
        </div>
      </div>
    </footer>
  );
}
