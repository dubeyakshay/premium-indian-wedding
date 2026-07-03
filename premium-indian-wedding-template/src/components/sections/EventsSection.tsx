'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import config from '@/data/wedding-config';
import type { WeddingEvent } from '@/data/wedding-config';
import OrnamentDivider from '../decorative/OrnamentDivider';

const eventIcons: Record<string, string> = {
  mehndi: '🌺',
  sangeet: '🎶',
  wedding: '💍',
  reception: '🎉',
  haldi: '🌼',
  default: '✦',
};

function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
        isEven ? '' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 group">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Event icon badge */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-wine-dark/80 backdrop-blur-sm border border-gold/30 flex items-center justify-center text-xl">
            {eventIcons[event.id] || eventIcons.default}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
        <p className="text-gold font-sans text-[10px] uppercase tracking-[0.3em] mb-2">
          {new Date(event.date).toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-maroon mb-3">{event.title}</h3>
        <div className={`flex items-center gap-2 mb-4 ${isEven ? 'justify-center md:justify-start' : 'justify-center md:justify-end'}`}>
          <div className="h-px w-8 bg-gold/40" />
          <span className="text-gold/60 text-xs">✦</span>
          <div className="h-px w-8 bg-gold/40" />
        </div>
        <p className="font-body text-base text-wine/70 mb-4 leading-relaxed">{event.description}</p>
        <div className="space-y-1 text-sm text-wine/60 font-sans">
          <p>🕐 {event.time}</p>
          <p>📍 {event.venue}</p>
          <p className="text-xs">{event.address}</p>
          {event.dressCode && (
            <p className="mt-2 text-gold/80 text-xs uppercase tracking-[0.1em]">
              👗 {event.dressCode}
            </p>
          )}
        </div>
        <a
          href={event.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-5 py-2 text-xs font-sans uppercase tracking-[0.15em] border border-gold/40 text-gold hover:bg-gold hover:text-wine-dark transition-all duration-300 rounded-sm"
        >
          View on Map →
        </a>
      </div>
    </motion.div>
  );
}

export default function EventsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="events" className="relative py-20 md:py-32 bg-cream-dark overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #8B1A1A 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold font-sans text-xs uppercase tracking-[0.3em] mb-4">
            ✦ Wedding Events ✦
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-maroon mb-4">
            Celebrations & Ceremonies
          </h2>
          <OrnamentDivider />
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {config.events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
