import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

export default function WelcomeSection() {
  const { bride, groom, wedding } = weddingConfig;

  return (
    <section className="relative py-24 md:py-32 px-5 mesh-bg" style={{ background: '#070b14' }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="wedding invitation"
          title={`${bride.firstName} & ${groom.firstName}`}
          subtitle="We invite you to celebrate the beginning of our forever"
          light
        />

        <div className="grid md:grid-cols-2 gap-8 text-center">
          <motion.div
            className="glass-panel rounded-2xl p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(212,175,95,0.9)' }}>Bride Family</p>
            <p className="font-elegant text-lg" style={{ color: '#f3f4f6' }}>{bride.parents}</p>
            <p className="mt-2 text-sm" style={{ color: 'rgba(229,231,235,0.7)' }}>{bride.grandparents}</p>
          </motion.div>

          <motion.div
            className="glass-panel rounded-2xl p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(212,175,95,0.9)' }}>Groom Family</p>
            <p className="font-elegant text-lg" style={{ color: '#f3f4f6' }}>{groom.parents}</p>
            <p className="mt-2 text-sm" style={{ color: 'rgba(229,231,235,0.7)' }}>{groom.grandparents}</p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em]" style={{ color: 'rgba(212,175,95,0.9)' }}>Save the date</p>
          <p className="font-display text-2xl md:text-3xl mt-2" style={{ color: '#f3f4f6' }}>
            {new Date(wedding.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <p className="mt-2 text-sm" style={{ color: 'rgba(229,231,235,0.75)' }}>
            {wedding.time} • {wedding.venue.name}, {wedding.venue.city}
          </p>
        </motion.div>
      </div>
    </section>
  );
}