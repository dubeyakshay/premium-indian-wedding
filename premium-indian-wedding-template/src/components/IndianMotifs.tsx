import { motion } from 'framer-motion';

const motifs = [
  { emoji: '🦚', label: 'Grace' },
  { emoji: '🪷', label: 'Purity' },
  { emoji: '🪔', label: 'Light' },
  { emoji: '🐘', label: 'Strength' },
  { emoji: '🔔', label: 'Blessings' },
  { emoji: '🕉️', label: 'Divine' },
];

export default function IndianMotifs() {
  return (
    <section className="relative py-10 md:py-14 px-5 overflow-hidden"
      style={{ background: '#FAF7F2', borderTop: '1px solid rgba(201,168,76,0.06)', borderBottom: '1px solid rgba(201,168,76,0.06)' }}>
      <div className="max-w-3xl mx-auto flex items-center justify-center flex-wrap gap-8 md:gap-14">
        {motifs.map((m, i) => (
          <motion.div key={m.label} className="text-center cursor-default"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
            <motion.div className="text-xl md:text-2xl mb-1"
              whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
              {m.emoji}
            </motion.div>
            <p className="text-[8px] tracking-[0.3em] uppercase" style={{ color: '#D6D3D1' }}>{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
