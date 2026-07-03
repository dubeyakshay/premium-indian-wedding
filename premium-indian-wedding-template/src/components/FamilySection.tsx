import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

export default function FamilySection() {
  const { family, bride, groom } = weddingConfig;

  const renderFamily = (
    members: { name: string; relation: string; emoji: string }[],
    name: string,
  ) => (
    <div>
      <motion.h3
        className="font-display text-xl md:text-2xl text-center mb-6"
        style={{ color: '#f9fafb' }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      >
        {name}'s Family
      </motion.h3>
      <div className="grid grid-cols-2 gap-3">
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            className="text-center p-4 md:p-5 rounded-2xl card-lift"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 14px 35px rgba(0,0,0,0.2)',
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="w-10 h-10 rounded-full mx-auto mb-2.5 flex items-center justify-center text-lg"
              style={{ background: 'rgba(212,175,95,0.14)' }}>
              {m.emoji}
            </div>
            <h4 className="font-display text-sm font-medium" style={{ color: '#f9fafb' }}>{m.name}</h4>
            <p className="text-[10px] mt-0.5 tracking-wider" style={{ color: 'rgba(229,231,235,0.65)' }}>{m.relation}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative py-24 md:py-32 px-5 overflow-hidden grain mesh-bg" style={{
      background: 'linear-gradient(180deg, #070b14, #0b1220)',
    }}>
      <div className="relative max-w-4xl mx-auto">
        <SectionHeader title="Our Families" subtitle="United by love, blessed by family" tag="the families" light />
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {renderFamily(family.bride, bride.firstName)}
          {renderFamily(family.groom, groom.firstName)}
        </div>
      </div>
    </section>
  );
}
