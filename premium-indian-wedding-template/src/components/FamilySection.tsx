import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

/**
 * FamilySection - Beautiful cards for bride's and groom's families
 */

export default function FamilySection() {
  const { family, bride, groom } = weddingConfig;

  const renderFamilyCards = (
    members: { name: string; relation: string; emoji: string }[],
    side: string,
    accentColor: string
  ) => (
    <div>
      <motion.h3
        className="font-display text-2xl md:text-3xl text-center mb-6 font-bold"
        style={{ color: accentColor }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {side === 'bride' ? `${bride.firstName}'s Family` : `${groom.firstName}'s Family`}
      </motion.h3>

      <div className="grid grid-cols-2 gap-4">
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            className="text-center p-4 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(212,168,83,0.05))',
              border: '1px solid rgba(212,168,83,0.15)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: '0 8px 30px rgba(212,168,83,0.15)',
            }}
          >
            <div className="text-3xl mb-2">{member.emoji}</div>
            <h4 className="font-display text-sm md:text-base font-semibold" style={{ color: '#2D1B0E' }}>
              {member.name}
            </h4>
            <p className="font-elegant text-xs mt-1 italic" style={{ color: 'rgba(45,27,14,0.5)' }}>
              {member.relation}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden" style={{ background: '#FFF8F0' }}>
      <div className="absolute inset-0 mandala-pattern opacity-10" />
      <div className="absolute inset-0 royal-overlay" />

      <div className="relative max-w-5xl mx-auto">
        <SectionHeader
          title="Our Families"
          subtitle="United by love, blessed by families"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {renderFamilyCards(family.bride, 'bride', '#8B1A1A')}
          {renderFamilyCards(family.groom, 'groom', '#2D5016')}
        </div>

        {/* Together */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 text-lg">
            <span style={{ color: '#D4A853' }}>✦</span>
            <span className="font-elegant italic text-sm" style={{ color: 'rgba(45,27,14,0.5)' }}>
              Two families becoming one
            </span>
            <span style={{ color: '#D4A853' }}>✦</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
