'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import config from '@/data/wedding-config';

const allNavItems = [
  { label: 'Home', href: '#home', section: 'hero' as const },
  { label: 'Couple', href: '#couple', section: 'couple' as const },
  { label: 'Events', href: '#events', section: 'events' as const },
  { label: 'Gallery', href: '#gallery', section: 'gallery' as const },
  { label: 'Venue', href: '#venue', section: 'venue' as const },
  { label: 'RSVP', href: '#rsvp', section: 'rsvp' as const },
  { label: 'Wishes', href: '#wishes', section: 'wishes' as const },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Only show nav items for enabled sections
  const navItems = useMemo(
    () => allNavItems.filter((item) => config.settings.sections[item.section]),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-wine-dark/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo / Names */}
          <a href="#home" className="font-display text-lg md:text-xl text-gold tracking-wide">
            {config.bride.firstName[0]} <span className="text-gold/50">&</span> {config.groom.firstName[0]}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-cream/80 hover:text-gold font-sans text-xs uppercase tracking-[0.15em] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gold p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px bg-gold transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`block h-px bg-gold transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-gold transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-wine-dark/98 backdrop-blur-lg flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-2xl text-cream/90 hover:text-gold transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
