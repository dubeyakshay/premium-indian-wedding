import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

export default function EventsSection() {
  return (
    <section className="relative py-24 px-5 mesh-bg" style={{ background: '#070b14' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="event flow"
          title="Celebration Timeline"
          subtitle="Join us through every special ceremony"
          light
        />

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4">
          {weddingConfig.events.map((event, idx) => (
            <motion.article
              key={event.name}
              className="glass-panel rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="h-32 relative">
                <img src={event.image} alt={event.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(2,6,23,0.1), rgba(2,6,23,0.82))' }} />
                <p className="absolute bottom-3 left-3 font-display text-xl" style={{ color: '#fff' }}>{event.name}</p>
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.16em]" style={{ color: 'rgba(212,175,95,0.9)' }}>
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
                <p className="text-sm mt-2" style={{ color: '#e5e7eb' }}>{event.time}</p>
                <p className="text-sm mt-1" style={{ color: 'rgba(229,231,235,0.75)' }}>{event.venue}</p>
                <p className="text-xs mt-3" style={{ color: 'rgba(229,231,235,0.6)' }}>{event.dressCode}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}