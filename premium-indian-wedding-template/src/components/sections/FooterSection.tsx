'use client';

import { motion } from 'framer-motion';
import config from '@/data/wedding-config';
import MandalaPattern from '../decorative/MandalaPattern';

export default function FooterSection() {
  return (
    <footer className="relative py-16 md:py-24 bg-wine-dark overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mandala-rotate opacity-5">
        <MandalaPattern size={400} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold/50 font-sans text-[10px] uppercase tracking-[0.4em] mb-6">
            ✦ With Love ✦
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-cream mb-2">
            {config.bride.firstName} <span className="text-gold">&</span> {config.groom.firstName}
          </h2>
          <p className="font-body text-lg text-cream/50 italic mt-4 mb-8">
            {new Date(config.weddingDate).toLocaleDateString('en-IN', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold/30" />
          <span className="text-gold/40">✦</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold/30" />
        </div>

        {/* Hashtag */}
        <p className="font-display text-xl text-gold/60 mb-8">{config.hashtag}</p>

        {/* Footer note */}
        <p className="text-cream/30 font-sans text-xs">
          {config.footerMessage}
        </p>

        {/* Corner ornaments */}
        <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-gold/15" />
        <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-gold/15" />
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-gold/15" />
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-gold/15" />
      </div>
    </footer>
  );
}
