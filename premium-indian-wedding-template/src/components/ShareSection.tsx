import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

export default function ShareSection() {
  const { bride, groom, social, contact } = weddingConfig;
  const shareText = `You're invited to ${bride.firstName} & ${groom.firstName}'s Wedding! ${social.hashtag}`;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const links = [
    { name: 'WhatsApp', icon: '💬', url: `https://wa.me/?text=${encodeURIComponent(shareText + '\n' + shareUrl)}` },
    { name: 'Facebook', icon: '📘', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { name: 'Twitter', icon: '🐦', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}` },
    { name: 'Email', icon: '📧', url: `mailto:?subject=${encodeURIComponent(`${bride.firstName} & ${groom.firstName}'s Wedding`)}&body=${encodeURIComponent(shareText + '\n' + shareUrl)}` },
  ];

  const copyLink = () => { navigator.clipboard.writeText(shareUrl); alert('Link copied!'); };

  return (
    <section className="relative py-24 md:py-32 px-5 overflow-hidden grain" style={{ background: '#0C0A09' }}>
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 50%)',
      }} />

      <div className="relative max-w-2xl mx-auto text-center">
        <SectionHeader title="Share The Joy" subtitle="Spread the love" tag="share" light />

        {/* Hashtag */}
        <motion.div className="mb-10" initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <div className="inline-block px-6 py-3 rounded-2xl"
            style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <p className="font-display text-xl md:text-2xl font-medium text-gold-gradient-light">{social.hashtag}</p>
          </div>
          <p className="text-[10px] mt-2 tracking-widest" style={{ color: 'rgba(250,247,242,0.2)' }}>
            Tag your photos & videos
          </p>
        </motion.div>

        {/* Share buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {links.map((l, i) => (
            <motion.a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs tracking-wider transition-all hover:scale-105"
              style={{ border: '1px solid rgba(201,168,76,0.1)', color: 'rgba(232,213,163,0.6)', background: 'rgba(255,255,255,0.02)' }}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <span>{l.icon}</span> {l.name}
            </motion.a>
          ))}
          <motion.button onClick={copyLink}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs tracking-wider cursor-pointer transition-all hover:scale-105"
            style={{ border: '1px solid rgba(201,168,76,0.1)', color: 'rgba(232,213,163,0.6)', background: 'rgba(255,255,255,0.02)' }}
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.4 }}>
            🔗 Copy Link
          </motion.button>
        </div>

        {/* Digital Shagun */}
        <motion.div className="mb-10 p-6 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,168,76,0.08)' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: 'rgba(201,168,76,0.4)' }}>Digital Shagun</p>
          <p className="text-xs mb-4" style={{ color: 'rgba(250,247,242,0.3)' }}>
            Your presence is the greatest gift. For those who wish to bless us digitally:
          </p>
          <div className="w-24 h-24 mx-auto rounded-xl flex items-center justify-center text-4xl" style={{ background: 'white' }}>💝</div>
          <p className="text-[10px] mt-2" style={{ color: 'rgba(250,247,242,0.15)' }}>Scan or UPI: {contact.email}</p>
        </motion.div>

        {/* Contact */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { label: contact.phone, icon: '📞', href: `tel:${contact.phone}` },
            { label: contact.email, icon: '📧', href: `mailto:${contact.email}` },
            { label: 'WhatsApp', icon: '💬', href: `https://wa.me/${contact.whatsapp}` },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
              className="text-[10px] tracking-wider" style={{ color: 'rgba(201,168,76,0.3)' }}>
              {c.icon} {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
