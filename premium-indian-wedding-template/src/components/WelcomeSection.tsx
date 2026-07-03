import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';
import MandalaDecor from './MandalaDecor';

/**
 * WelcomeSection - Beautiful welcome with couple details and families
 */

export default function WelcomeSection() {
  const { bride, groom, wedding, quotes } = weddingConfig;
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden" style={{ background: '#FFF8F0' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 mandala-pattern opacity-10" />
      <div className="absolute inset-0 royal-overlay" />
      
      {/* Decorative Mandalas */}
      <div className="absolute -top-24 -left-24 rotate-slow pointer-events-none">
        <MandalaDecor size={250} opacity={0.06} />
      </div>
      <div className="absolute -bottom-24 -right-24 rotate-slow pointer-events-none" style={{ animationDirection: 'reverse' }}>
        <MandalaDecor size={250} opacity={0.06} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <SectionHeader
          title="Wedding Invitation"
          subtitle="With the blessings of our elders and the grace of God"
        />

        {/* Ganesh Ji */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-6xl md:text-7xl mb-2">🙏</div>
          <p className="font-script text-2xl md:text-3xl" style={{ color: '#D4A853' }}>
            श्री गणेशाय नमः
          </p>
        </motion.div>

        {/* Parents Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Bride's Family */}
          <motion.div
            className="text-center p-6 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(212,168,83,0.05), rgba(139,26,26,0.05))',
              border: '1px solid rgba(212,168,83,0.2)',
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-elegant text-sm tracking-widest uppercase mb-2" style={{ color: '#8B1A1A' }}>
              Bride's Family
            </p>
            <p className="font-display text-lg" style={{ color: '#2D1B0E' }}>{bride.parents}</p>
            <p className="text-xs mt-1" style={{ color: 'rgba(45,27,14,0.5)' }}>{bride.grandparents}</p>
            <div className="mt-3 text-sm italic font-elegant" style={{ color: '#8B1A1A' }}>
              cordially invite you to the wedding of their beloved daughter
            </div>
            <h3 className="font-script text-4xl md:text-5xl mt-3 text-gold-gradient">{bride.firstName}</h3>
            <p className="text-xs mt-1 italic font-elegant" style={{ color: 'rgba(45,27,14,0.5)' }}>
              {bride.description}
            </p>
          </motion.div>

          {/* Groom's Family */}
          <motion.div
            className="text-center p-6 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(139,26,26,0.05), rgba(212,168,83,0.05))',
              border: '1px solid rgba(212,168,83,0.2)',
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-elegant text-sm tracking-widest uppercase mb-2" style={{ color: '#8B1A1A' }}>
              Groom's Family
            </p>
            <p className="font-display text-lg" style={{ color: '#2D1B0E' }}>{groom.parents}</p>
            <p className="text-xs mt-1" style={{ color: 'rgba(45,27,14,0.5)' }}>{groom.grandparents}</p>
            <div className="mt-3 text-sm italic font-elegant" style={{ color: '#8B1A1A' }}>
              cordially invite you to the wedding of their beloved son
            </div>
            <h3 className="font-script text-4xl md:text-5xl mt-3 text-gold-gradient">{groom.firstName}</h3>
            <p className="text-xs mt-1 italic font-elegant" style={{ color: 'rgba(45,27,14,0.5)' }}>
              {groom.description}
            </p>
          </motion.div>
        </div>

        {/* Couple Together */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-20 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, #D4A853)' }} />
            <span className="text-2xl">🕊️</span>
            <div className="w-20 h-[1px]" style={{ background: 'linear-gradient(90deg, #D4A853, transparent)' }} />
          </div>
          <p className="font-display text-base md:text-lg" style={{ color: '#8B1A1A' }}>
            request the honour of your presence at the marriage of
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
            <span className="font-script text-4xl md:text-5xl text-gold-gradient">{bride.firstName}</span>
            <span className="text-3xl">💞</span>
            <span className="font-script text-4xl md:text-5xl text-gold-gradient">{groom.firstName}</span>
          </div>
          <p className="mt-4 font-elegant text-sm md:text-base" style={{ color: 'rgba(45,27,14,0.7)' }}>
            on {new Date(wedding.date).toLocaleDateString('en-US', {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            })}
          </p>
          <p className="font-elegant text-sm" style={{ color: 'rgba(45,27,14,0.5)' }}>
            at {wedding.venue.name}, {wedding.venue.city}
          </p>
        </motion.div>

        {/* Dress Code */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div
            className="inline-block px-6 py-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(139,26,26,0.08), rgba(212,168,83,0.08))',
              border: '1px solid rgba(212,168,83,0.2)',
            }}
          >
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: '#8B1A1A' }}>
              👔 Dress Code: {wedding.dressCode}
            </span>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="mt-12 text-center p-6 rounded-xl relative"
          style={{
            background: 'linear-gradient(135deg, rgba(212,168,83,0.08), rgba(139,26,26,0.08))',
            borderLeft: '3px solid #D4A853',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute -top-3 left-6 text-2xl" style={{ color: '#D4A853' }}>"</div>
          <p className="font-elegant text-base md:text-lg italic" style={{ color: '#2D1B0E' }}>
            {randomQuote}
          </p>
          <div className="absolute -bottom-3 right-6 text-2xl" style={{ color: '#D4A853' }}>"</div>
        </motion.div>
      </div>
    </section>
  );
}
