import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';

/**
 * Navbar - Floating navigation with elegant Indian styling
 */

const navItems = [
  { label: 'Home', href: '#home', emoji: '🏠' },
  { label: 'Story', href: '#story', emoji: '💕' },
  { label: 'Events', href: '#events', emoji: '🎉' },
  { label: 'Gallery', href: '#gallery', emoji: '📸' },
  { label: 'Venue', href: '#venue', emoji: '📍' },
  { label: 'RSVP', href: '#rsvp', emoji: '✉️' },
];

export default function Navbar() {
  const { bride, groom } = weddingConfig;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div
        className="mx-2 md:mx-4 mt-2 md:mt-3 rounded-full px-4 md:px-6 py-2.5 flex items-center justify-between transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(26,10,10,0.95)' : 'rgba(26,10,10,0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(212,168,83,0.2)',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('#home')}
          className="font-script text-xl md:text-2xl text-gold-gradient cursor-pointer"
        >
          {bride.firstName} & {groom.firstName}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="px-3 py-1.5 rounded-full text-xs tracking-wider uppercase transition-all hover:bg-white/10 cursor-pointer"
              style={{ color: 'rgba(245,230,200,0.8)' }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-xl cursor-pointer"
          style={{ color: '#D4A853' }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden mx-2 mt-1 rounded-2xl p-4"
            style={{
              background: 'rgba(26,10,10,0.98)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(212,168,83,0.2)',
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="w-full text-left px-4 py-3 rounded-lg text-sm flex items-center gap-3 cursor-pointer"
                style={{ color: 'rgba(245,230,200,0.8)' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                <span className="text-lg">{item.emoji}</span>
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
