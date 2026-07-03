import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

/**
 * VenueSection - Elegant venue card with map and action buttons
 */

export default function VenueSection() {
  const { wedding } = weddingConfig;

  const generateICS = () => {
    const start = new Date(wedding.date + 'T19:00:00');
    const end = new Date(wedding.date + 'T23:59:00');
    const formatDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const ics = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatDate(start)}
DTEND:${formatDate(end)}
SUMMARY:${weddingConfig.bride.firstName} & ${weddingConfig.groom.firstName}'s Wedding
LOCATION:${wedding.venue.name}, ${wedding.venue.address}
DESCRIPTION:You are cordially invited to the wedding celebration!
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wedding-invitation.ics';
    a.click();
    URL.revokeObjectURL(url);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
    `${weddingConfig.bride.firstName} & ${weddingConfig.groom.firstName}'s Wedding`
  )}&dates=${wedding.date.replace(/-/g, '')}T190000/${wedding.date.replace(/-/g, '')}T235900&location=${encodeURIComponent(
    `${wedding.venue.name}, ${wedding.venue.address}`
  )}&details=${encodeURIComponent('You are cordially invited!')}`;

  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden" style={{ background: '#FFF8F0' }}>
      <div className="absolute inset-0 mandala-pattern opacity-10" />
      <div className="absolute inset-0 royal-overlay" />

      <div className="relative max-w-4xl mx-auto">
        <SectionHeader
          title="Wedding Venue"
          subtitle="Where our dreams come alive"
        />

        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(212,168,83,0.3)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Venue Header */}
          <div
            className="p-6 md:p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, #1A0A0A, #3D1515)',
            }}
          >
            <div className="text-4xl mb-3">🏰</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-gold-gradient">
              {wedding.venue.name}
            </h3>
            <p className="font-elegant text-sm mt-2" style={{ color: 'rgba(245,230,200,0.7)' }}>
              📍 {wedding.venue.address}
            </p>
            <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
              <span className="text-xs px-3 py-1 rounded-full" style={{
                border: '1px solid rgba(212,168,83,0.3)',
                color: '#D4A853',
              }}>
                🕐 {wedding.time}
              </span>
              <span className="text-xs px-3 py-1 rounded-full" style={{
                border: '1px solid rgba(212,168,83,0.3)',
                color: '#D4A853',
              }}>
                ✨ Muhurat: {wedding.muhurat}
              </span>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative h-64 md:h-80" style={{ background: '#E5E0D8' }}>
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
              <span className="text-5xl">🗺️</span>
              <p className="font-elegant text-sm" style={{ color: 'rgba(45,27,14,0.5)' }}>
                {wedding.venue.name}, {wedding.venue.city}
              </p>
              <a
                href={wedding.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-medium transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #8B1A1A, #D4A853)',
                  color: '#FFF8F0',
                }}
              >
                View on Google Maps →
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="p-6 flex flex-wrap items-center justify-center gap-3"
            style={{ background: 'rgba(255,255,255,0.95)' }}
          >
            <a
              href={wedding.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #8B1A1A, #D4A853)',
                color: '#FFF8F0',
              }}
            >
              🧭 Navigate
            </a>
            <a
              href={`tel:${wedding.venue.phone}`}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{
                border: '1px solid #D4A853',
                color: '#8B1A1A',
              }}
            >
              📞 Call Venue
            </a>
            <button
              onClick={generateICS}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 cursor-pointer"
              style={{
                border: '1px solid #D4A853',
                color: '#8B1A1A',
              }}
            >
              📅 Save Date
            </button>
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{
                border: '1px solid #D4A853',
                color: '#8B1A1A',
              }}
            >
              📆 Google Calendar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
