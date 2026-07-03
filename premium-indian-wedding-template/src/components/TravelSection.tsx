import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

/**
 * TravelSection - Travel & accommodation information for guests
 */

export default function TravelSection() {
  const { travel, wedding } = weddingConfig;

  return (
    <section
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A0A0A 0%, #2D1515 50%, #1A0A0A 100%)',
      }}
    >
      <div className="absolute inset-0 mandala-pattern opacity-10" />

      <div className="relative max-w-4xl mx-auto">
        <SectionHeader
          title="Travel & Stay"
          subtitle="Everything you need for a comfortable journey"
          light
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Getting There */}
          <motion.div
            className="p-6 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(212,168,83,0.2)',
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold mb-4" style={{ color: '#D4A853' }}>
              ✈️ Getting There
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <p className="text-xs tracking-wider uppercase" style={{ color: '#D4A853' }}>Nearest Airport</p>
                <p className="text-sm mt-1" style={{ color: '#F5E6C8' }}>{travel.nearestAirport}</p>
              </div>
              <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <p className="text-xs tracking-wider uppercase" style={{ color: '#D4A853' }}>Nearest Railway Station</p>
                <p className="text-sm mt-1" style={{ color: '#F5E6C8' }}>{travel.nearestRailway}</p>
              </div>
              <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <p className="text-xs tracking-wider uppercase" style={{ color: '#D4A853' }}>Venue</p>
                <p className="text-sm mt-1" style={{ color: '#F5E6C8' }}>{wedding.venue.name}</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(245,230,200,0.5)' }}>{wedding.venue.address}</p>
              </div>
            </div>
          </motion.div>

          {/* Accommodation */}
          <motion.div
            className="p-6 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(212,168,83,0.2)',
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold mb-4" style={{ color: '#D4A853' }}>
              🏨 Recommended Stays
            </h3>
            <div className="space-y-3">
              {travel.hotels.map((hotel, index) => (
                <motion.div
                  key={hotel.name}
                  className="p-3 rounded-lg flex items-center justify-between"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#F5E6C8' }}>{hotel.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs" style={{ color: 'rgba(245,230,200,0.5)' }}>
                        ⭐ {hotel.type}
                      </span>
                      <span className="text-xs" style={{ color: 'rgba(245,230,200,0.5)' }}>
                        📍 {hotel.distance}
                      </span>
                    </div>
                  </div>
                  <a
                    href={hotel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-full transition-all hover:scale-105"
                    style={{
                      border: '1px solid rgba(212,168,83,0.3)',
                      color: '#D4A853',
                    }}
                  >
                    Book
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact for Help */}
        <motion.div
          className="mt-8 text-center p-4 rounded-xl"
          style={{
            background: 'rgba(212,168,83,0.05)',
            border: '1px solid rgba(212,168,83,0.15)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs" style={{ color: 'rgba(245,230,200,0.5)' }}>
            Need help with travel arrangements? Contact us at{' '}
            <a href={`tel:${weddingConfig.contact.phone}`} style={{ color: '#D4A853' }}>
              {weddingConfig.contact.phone}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
