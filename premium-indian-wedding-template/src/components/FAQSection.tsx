import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

/**
 * FAQSection - Accordion-style FAQ for common guest questions
 */

export default function FAQSection() {
  const { faq } = weddingConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden" style={{ background: '#FFF8F0' }}>
      <div className="absolute inset-0 mandala-pattern opacity-10" />
      <div className="absolute inset-0 royal-overlay" />

      <div className="relative max-w-3xl mx-auto">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know"
        />

        <div className="space-y-3">
          {faq.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(212,168,83,0.15)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-5 py-4 flex items-center justify-between cursor-pointer"
              >
                <span className="font-display text-sm md:text-base font-semibold pr-4" style={{ color: '#2D1B0E' }}>
                  {item.question}
                </span>
                <motion.span
                  className="text-lg flex-shrink-0"
                  style={{ color: '#D4A853' }}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4">
                      <div className="h-[1px] mb-3" style={{ background: 'linear-gradient(90deg, #D4A853, transparent)' }} />
                      <p className="font-elegant text-sm leading-relaxed" style={{ color: 'rgba(45,27,14,0.7)' }}>
                        {item.answer}
                      </p>
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
