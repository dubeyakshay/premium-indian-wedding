import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

/**
 * EventsSection - Interactive timeline of wedding events
 * Each card has countdown, details, and hover animations
 */

function EventCountdown({ date }: { date: string }) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const update = () => {
      const diff = new Date(date).getTime() - Date.now();
      setDays(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
    };
    update();
    const i = setInterval(update, 60000);
    return () => clearInterval(i);
  }, [date]);

  return (
    <span className="text-xs font-medium px-2 py-1 rounded-full" style={{
      background: 'rgba(212,168,83,0.15)',
      color: '#D4A853',
    }}>
      {days > 0 ? `${days} days away` : 'Today! 🎉'}
    </span>
  );
}

export default function EventsSection() {
  const { events } = weddingConfig;

  return (
    <section
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1A0A0A 0%, #2D1515 50%, #1A0A0A 100%)',
      }}
    >
      <div className="absolute inset-0 mandala-pattern opacity-10" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          title="Wedding Events"
          subtitle="Join us in celebrating each beautiful moment"
          light
        />

        {/* Decorative element above cards */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-elegant text-sm" style={{ color: 'rgba(245,230,200,0.4)' }}>
            🎊 Five days of celebration, a lifetime of memories 🎊
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{
                border: '1px solid rgba(212,168,83,0.2)',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Event Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(180deg, transparent 30%, ${event.color}CC 100%)` }}
                />

                {/* Event Emoji */}
                <div className="absolute top-3 right-3 text-3xl">{event.emoji}</div>

                {/* Event Name on image */}
                <div className="absolute bottom-3 left-4">
                  <h3 className="font-display text-2xl font-bold text-white">{event.name}</h3>
                </div>
              </div>

              {/* Event Details */}
              <div
                className="p-5"
                style={{ background: 'rgba(26,10,10,0.95)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="font-display text-sm" style={{ color: '#F5E6C8' }}>
                    📅 {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'short', month: 'short', day: 'numeric',
                    })}
                  </p>
                  <EventCountdown date={event.date} />
                </div>

                <p className="text-xs mb-2" style={{ color: 'rgba(245,230,200,0.7)' }}>
                  ⏰ {event.time}
                </p>
                <p className="text-xs mb-2" style={{ color: 'rgba(245,230,200,0.7)' }}>
                  📍 {event.venue}
                </p>
                <p className="text-xs mb-3" style={{ color: 'rgba(245,230,200,0.7)' }}>
                  👔 {event.dressCode}
                </p>

                <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,230,200,0.5)' }}>
                  {event.description}
                </p>

                {/* Decorative bottom line */}
                <div
                  className="mt-4 h-[2px] rounded-full transition-all duration-500 group-hover:w-full w-1/3"
                  style={{ background: `linear-gradient(90deg, ${event.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
