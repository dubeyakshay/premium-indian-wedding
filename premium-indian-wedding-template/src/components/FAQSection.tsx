import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

export default function FAQSection() {
  const { faq } = weddingConfig;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 px-5 overflow-hidden grain mesh-bg" style={{
      background: 'linear-gradient(180deg, #0b1220, #070b14)',
    }}>
      <div className="relative max-w-2xl mx-auto">
        <SectionHeader title="FAQ" subtitle="Common questions answered" tag="questions" light />

        <div className="space-y-2">
          {faq.map((item, i) => (
            <motion.div key={i} className="rounded-xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between cursor-pointer group">
                <span className="font-display text-sm font-medium pr-4" style={{ color: '#f9fafb' }}>{item.question}</span>
                <motion.span className="text-xs shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors group-hover:bg-amber-50"
                  style={{ color: '#d4af5f' }}
                  animate={{ rotate: openIdx === i ? 180 : 0 }}>
                  ↓
                </motion.span>
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <div className="px-5 pb-4">
                      <div className="h-px mb-3" style={{ background: 'rgba(201,168,76,0.1)' }} />
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(229,231,235,0.8)' }}>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
