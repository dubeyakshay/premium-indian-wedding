import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

/**
 * StorySection - Animated timeline of the couple's love story
 * Features alternating left-right layout with scroll animations
 */

export default function StorySection() {
  const { story } = weddingConfig;

  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden" style={{ background: '#FFF8F0' }}>
      <div className="absolute inset-0 mandala-pattern opacity-10" />
      <div className="absolute inset-0 royal-overlay" />

      <div className="relative max-w-4xl mx-auto">
        <SectionHeader
          title="Our Love Story"
          subtitle="Every love story is beautiful, but ours is our favorite"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 timeline-line"
          />

          {/* Mobile Line */}
          <div
            className="md:hidden absolute left-6 top-0 bottom-0 w-[2px] timeline-line"
          />

          {story.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-start mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                  style={{
                    background: 'linear-gradient(135deg, #8B1A1A, #D4A853)',
                    boxShadow: '0 0 20px rgba(212,168,83,0.3)',
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  {item.emoji}
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="p-6 rounded-2xl relative"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(212,168,83,0.05))',
                    border: '1px solid rgba(212,168,83,0.2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 12px 40px rgba(212,168,83,0.15)',
                  }}
                >
                  {/* Date Badge */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139,26,26,0.1), rgba(212,168,83,0.1))',
                      color: '#8B1A1A',
                      border: '1px solid rgba(212,168,83,0.3)',
                    }}
                  >
                    {item.date}
                  </span>

                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2" style={{ color: '#2D1B0E' }}>
                    {item.title}
                  </h3>
                  <p className="font-elegant text-sm md:text-base leading-relaxed" style={{ color: 'rgba(45,27,14,0.7)' }}>
                    {item.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-2 right-2 text-lg opacity-20">✦</div>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
