import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Story', href: '#story' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Venue', href: '#venue' },
  { label: 'RSVP', href: '#rsvp' },
];

export default function Navbar() {
  const { bride, groom } = weddingConfig;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50" initial={{ y: -80 }} animate={{ y: 0 }}>
      <div
        className="mx-3 md:mx-6 mt-3 rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(7,11,20,0.85)' : 'rgba(7,11,20,0.45)',
          backdropFilter: 'blur(14px)',
          border: `1px solid ${scrolled ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.1)'}`,
        }}
      >
        <button onClick={() => scrollTo('#home')} className="font-display text-base cursor-pointer text-gold-gradient">
          {bride.firstName} & {groom.firstName}
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="px-3 py-2 rounded-lg text-xs tracking-[0.15em] uppercase hover:bg-white/10 transition-colors cursor-pointer"
              style={{ color: '#e5e7eb' }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button onClick={() => setMobileOpen((s) => !s)} className="md:hidden w-9 h-9 cursor-pointer text-white">
          {mobileOpen ? 'x' : '='}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden mx-3 mt-1 rounded-2xl p-2 glass-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="w-full text-left px-3 py-3 rounded-lg text-xs tracking-[0.15em] uppercase hover:bg-white/10 cursor-pointer"
                style={{ color: '#e5e7eb' }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}