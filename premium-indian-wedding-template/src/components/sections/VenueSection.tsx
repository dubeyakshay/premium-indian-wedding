'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import config from '@/data/wedding-config';
import OrnamentDivider from '../decorative/OrnamentDivider';
import MandalaPattern from '../decorative/MandalaPattern';

export default function VenueSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="venue" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${config.images.venuePhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-wine-dark/90 backdrop-blur-sm" />

      {/* Mandala */}
      <div className="absolute -right-32 top-0 mandala-rotate">
        <MandalaPattern size={400} opacity={0.05} />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold/60 font-sans text-xs uppercase tracking-[0.3em] mb-4">
            ✦ The Venue ✦
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
            Where Dreams Unite
          </h2>
          <OrnamentDivider />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Venue Image */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src={config.images.venuePhoto}
                alt={config.mainVenue.name}
                className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute -inset-2 border border-gold/20 rounded-lg pointer-events-none" />
          </motion.div>

          {/* Venue Details */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-display text-3xl text-gold mb-4">{config.mainVenue.name}</h3>
            <p className="font-body text-lg text-cream/70 mb-6 leading-relaxed">
              An exquisite heritage venue that embodies the grandeur and timeless elegance
              befitting this sacred celebration of love.
            </p>
            <div className="space-y-3 text-cream/60 font-sans text-sm">
              <p className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-gold">📍</span>
                {config.mainVenue.address}
              </p>
              <p className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-gold">🏙️</span>
                {config.mainVenue.city}
              </p>
            </div>
            <a
              href={config.mainVenue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3 text-xs font-sans uppercase tracking-[0.15em] bg-gold/10 border border-gold/40 text-gold hover:bg-gold hover:text-wine-dark transition-all duration-300 rounded-sm"
            >
              Get Directions →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
