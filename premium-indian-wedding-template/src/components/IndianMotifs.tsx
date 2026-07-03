import { motion } from 'framer-motion';

/**
 * IndianMotifs - Decorative Indian-themed divider section
 * Features peacock, lotus, diya, and rangoli elements
 */

export default function IndianMotifs() {
  const motifs = [
    { emoji: '🦚', label: 'Peacock', desc: 'Symbol of grace & beauty' },
    { emoji: '🪷', label: 'Lotus', desc: 'Symbol of purity & devotion' },
    { emoji: '🪔', label: 'Diya', desc: 'Symbol of light & hope' },
    { emoji: '🐘', label: 'Elephant', desc: 'Symbol of strength & wisdom' },
    { emoji: '🔔', label: 'Temple Bell', desc: 'Symbol of auspiciousness' },
    { emoji: '🕉️', label: 'Om', desc: 'Symbol of the divine' },
  ];

  return (
    <section
      className="relative py-12 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(212,168,83,0.05), rgba(139,26,26,0.05))',
        borderTop: '1px solid rgba(212,168,83,0.1)',
        borderBottom: '1px solid rgba(212,168,83,0.1)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center flex-wrap gap-6 md:gap-10">
          {motifs.map((motif, index) => (
            <motion.div
              key={motif.label}
              className="text-center group cursor-default"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <motion.div
                className="text-2xl md:text-3xl mb-1"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {motif.emoji}
              </motion.div>
              <p className="text-[10px] tracking-wider uppercase" style={{ color: 'rgba(45,27,14,0.4)' }}>
                {motif.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
