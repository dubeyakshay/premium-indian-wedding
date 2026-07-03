import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

/**
 * ShareSection - Share invitation & social media hashtag
 */

export default function ShareSection() {
  const { bride, groom, social, contact } = weddingConfig;
  const shareText = `You're invited to ${bride.firstName} & ${groom.firstName}'s Wedding! 💒✨ ${social.hashtag}`;
  const shareUrl = window.location.href;

  const shareLinks = [
    {
      name: 'WhatsApp',
      emoji: '💬',
      url: `https://wa.me/?text=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`,
      color: '#25D366',
    },
    {
      name: 'Facebook',
      emoji: '📘',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
      color: '#1877F2',
    },
    {
      name: 'Twitter',
      emoji: '🐦',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: '#1DA1F2',
    },
    {
      name: 'Email',
      emoji: '📧',
      url: `mailto:?subject=${encodeURIComponent(`${bride.firstName} & ${groom.firstName}'s Wedding Invitation`)}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`,
      color: '#D4A853',
    },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard! 📋');
  };

  return (
    <section
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A0A0A, #3D1515, #1A0A0A)',
      }}
    >
      <div className="absolute inset-0 mandala-pattern opacity-10" />

      <div className="relative max-w-3xl mx-auto text-center">
        <SectionHeader
          title="Share The Joy"
          subtitle="Spread the love — share our invitation"
          light
        />

        {/* Hashtag */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-block px-6 py-3 rounded-full"
            style={{
              background: 'rgba(212,168,83,0.1)',
              border: '1px solid rgba(212,168,83,0.3)',
            }}
          >
            <p className="font-display text-xl md:text-2xl font-bold text-gold-gradient">
              {social.hashtag}
            </p>
          </div>
          <p className="text-xs mt-2" style={{ color: 'rgba(245,230,200,0.4)' }}>
            Use our hashtag when sharing photos and videos 📸
          </p>
        </motion.div>

        {/* Share Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {shareLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
              style={{
                border: `1px solid ${link.color}40`,
                color: link.color,
                background: `${link.color}10`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-lg">{link.emoji}</span>
              {link.name}
            </motion.a>
          ))}

          <motion.button
            onClick={copyLink}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all hover:scale-105"
            style={{
              border: '1px solid rgba(212,168,83,0.3)',
              color: '#D4A853',
              background: 'rgba(212,168,83,0.05)',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-lg">🔗</span>
            Copy Link
          </motion.button>
        </div>

        {/* Digital Shagun */}
        <motion.div
          className="mb-8 p-6 rounded-2xl"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(212,168,83,0.2)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl mb-2">🎁</div>
          <h4 className="font-display text-lg font-bold text-gold-gradient mb-2">Digital Shagun</h4>
          <p className="text-xs mb-4" style={{ color: 'rgba(245,230,200,0.5)' }}>
            Your presence is the greatest gift, but if you wish to bless us with Shagun, you can do so digitally
          </p>
          <div className="inline-block p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <div className="w-32 h-32 mx-auto rounded-lg flex items-center justify-center text-5xl" style={{ background: 'white' }}>
              💝
            </div>
            <p className="text-xs mt-2" style={{ color: 'rgba(245,230,200,0.4)' }}>
              Scan QR or UPI: {contact.email}
            </p>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="p-5 rounded-xl"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(212,168,83,0.15)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs" style={{ color: 'rgba(245,230,200,0.5)' }}>
            For any queries, reach out to us:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-3">
            <a href={`tel:${contact.phone}`} className="text-xs" style={{ color: '#D4A853' }}>
              📞 {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="text-xs" style={{ color: '#D4A853' }}>
              📧 {contact.email}
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs"
              style={{ color: '#25D366' }}
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
