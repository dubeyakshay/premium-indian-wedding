import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

export default function VenueSection() {
  const { wedding } = weddingConfig;

  const generateICS = () => {
    const start = new Date(wedding.date + 'T19:00:00');
    const end = new Date(wedding.date + 'T23:59:00');
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${fmt(start)}\nDTEND:${fmt(end)}\nSUMMARY:${weddingConfig.bride.firstName} & ${weddingConfig.groom.firstName}'s Wedding\nLOCATION:${wedding.venue.name}, ${wedding.venue.address}\nDESCRIPTION:You are cordially invited!\nEND:VEVENT\nEND:VCALENDAR`;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
    a.download = 'wedding.ics';
    a.click();
  };

  const calUrl = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(`${weddingConfig.bride.firstName} & ${weddingConfig.groom.firstName}'s Wedding`)}&dates=${wedding.date.replace(/-/g, '')}T190000/${wedding.date.replace(/-/g, '')}T235900&location=${encodeURIComponent(`${wedding.venue.name}, ${wedding.venue.address}`)}`;

  const actions = [
    { label: 'Navigate', icon: '🧭', href: wedding.venue.mapUrl, external: true },
    { label: 'Call Venue', icon: '📞', href: `tel:${wedding.venue.phone}`, external: false },
    { label: 'Save Date', icon: '📅', onClick: generateICS },
    { label: 'Google Calendar', icon: '📆', href: calUrl, external: true },
  ];

  return (
    <section className="relative py-24 md:py-36 px-5 overflow-hidden grain mesh-bg" style={{
      background: 'linear-gradient(180deg, #0b1220, #070b14)',
    }}>
      <div className="relative max-w-3xl mx-auto">
        <SectionHeader title="The Venue" subtitle="Where our dreams come alive" tag="location" light />

        <motion.div
          className="rounded-3xl overflow-hidden"
          style={{
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 28px 60px rgba(0,0,0,0.25)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="p-8 md:p-10 text-center" style={{ background: '#0C0A09' }}>
            <div className="text-3xl mb-3">🏰</div>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-gold-gradient-light mb-2">
              {wedding.venue.name}
            </h3>
            <p className="text-xs" style={{ color: 'rgba(250,247,242,0.4)' }}>
              {wedding.venue.address}
            </p>
            <div className="flex items-center justify-center gap-4 mt-5 flex-wrap">
              {[
                { text: wedding.time, icon: '🕐' },
                { text: `Muhurat: ${wedding.muhurat}`, icon: '✨' },
              ].map((pill) => (
                <span key={pill.text} className="text-[10px] tracking-wider px-3 py-1.5 rounded-full"
                  style={{ border: '1px solid rgba(201,168,76,0.15)', color: 'rgba(201,168,76,0.7)' }}>
                  {pill.icon} {pill.text}
                </span>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="relative h-56 md:h-72 flex items-center justify-center" style={{ background: '#111827' }}>
            <div className="text-center">
              <span className="text-4xl block mb-3">🗺️</span>
              <a href={wedding.venue.mapUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-full text-xs tracking-wider"
                style={{ background: '#d4af5f', color: '#111827' }}>
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="p-5 md:p-6 flex flex-wrap items-center justify-center gap-2.5" style={{ background: 'rgba(7,11,20,0.95)' }}>
            {actions.map((action) => {
              const cls = "px-4 py-2 rounded-full text-xs tracking-wider transition-all duration-300 hover:scale-105 inline-flex items-center gap-1.5";
              const style = { border: '1px solid rgba(212,175,95,0.45)', color: '#e5e7eb' };
              if (action.onClick) {
                return <button key={action.label} onClick={action.onClick} className={cls + " cursor-pointer"} style={style}>
                  {action.icon} {action.label}
                </button>;
              }
              return <a key={action.label} href={action.href} target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined} className={cls} style={style}>
                {action.icon} {action.label}
              </a>;
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
