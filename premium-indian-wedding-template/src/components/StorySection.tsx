import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

export default function StorySection() {
  const { story } = weddingConfig;

  return (
    <section className="relative py-24 md:py-36 px-5 overflow-hidden grain mesh-bg" style={{ background: '#0b1220' }}>
      <div className="absolute inset-0 mandala-bg" />

      <div className="relative max-w-3xl mx-auto">
        <SectionHeader
          title="Our Story"
          subtitle="Every love story is beautiful, but ours is our favorite"
          tag="the journey"
          light
        />

        <div className="relative">
          {/* Central line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px timeline-line" />

          {story.map((item, i) => (
            <motion.div
              key={i}
              className={`relative flex items-start mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Dot */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg float-y"
                  style={{
                    background: '#0b1220',
                    border: '2px solid rgba(212,175,95,0.5)',
                    boxShadow: '0 0 0 6px #0b1220',
                  }}>
                  {item.emoji}
                </div>
              </div>

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                <motion.div className="p-5 md:p-6 rounded-2xl card-lift"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.22)',
                  }}>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] tracking-[0.2em] uppercase mb-3"
                    style={{ background: 'rgba(212,175,95,0.14)', color: '#d4af5f' }}>
                    {item.date}
                  </span>
                  <h3 className="font-display text-lg md:text-xl font-semibold mb-2" style={{ color: '#f9fafb' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(229,231,235,0.78)' }}>
                    {item.description}
                  </p>
                </motion.div>
              </div>

              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
