import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

export default function TravelSection() {
  const { travel, wedding, contact } = weddingConfig;

  return (
    <section className="relative py-24 md:py-32 px-5 overflow-hidden grain" style={{
      background: '#0C0A09',
    }}>
      <div className="relative max-w-4xl mx-auto">
        <SectionHeader title="Travel & Stay" subtitle="Everything for a comfortable journey" tag="logistics" light />

        <div className="grid md:grid-cols-2 gap-5">
          {/* Getting There */}
          <motion.div className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.08)' }}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-display text-lg mb-5" style={{ color: '#E8D5A3' }}>Getting There</h3>
            {[
              { label: 'Airport', value: travel.nearestAirport, icon: '✈️' },
              { label: 'Railway', value: travel.nearestRailway, icon: '🚂' },
              { label: 'Venue', value: `${wedding.venue.name}, ${wedding.venue.city}`, icon: '📍' },
            ].map(item => (
              <div key={item.label} className="p-3 rounded-xl mb-2.5 last:mb-0"
                style={{ background: 'rgba(255,255,255,0.02)' }}>
                <p className="text-[9px] tracking-[0.2em] uppercase" style={{ color: 'rgba(201,168,76,0.5)' }}>
                  {item.icon} {item.label}
                </p>
                <p className="text-sm mt-0.5" style={{ color: 'rgba(250,247,242,0.6)' }}>{item.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Hotels */}
          <motion.div className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.08)' }}
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-display text-lg mb-5" style={{ color: '#E8D5A3' }}>Recommended Stays</h3>
            {travel.hotels.map((h, i) => (
              <motion.div key={h.name}
                className="p-3 rounded-xl mb-2.5 last:mb-0 flex items-center justify-between"
                style={{ background: 'rgba(255,255,255,0.02)' }}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div>
                  <p className="text-sm" style={{ color: 'rgba(250,247,242,0.7)' }}>{h.name}</p>
                  <p className="text-[10px]" style={{ color: 'rgba(250,247,242,0.3)' }}>{h.type} · {h.distance}</p>
                </div>
                <a href={h.link} target="_blank" rel="noopener noreferrer"
                  className="text-[10px] px-3 py-1.5 rounded-full tracking-wider transition-all hover:scale-105"
                  style={{ border: '1px solid rgba(201,168,76,0.15)', color: 'rgba(201,168,76,0.6)' }}>
                  Book
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p className="text-center mt-8 text-[10px]" style={{ color: 'rgba(250,247,242,0.2)' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Need help? Contact us at <a href={`tel:${contact.phone}`} style={{ color: 'rgba(201,168,76,0.4)' }}>{contact.phone}</a>
        </motion.p>
      </div>
    </section>
  );
}
