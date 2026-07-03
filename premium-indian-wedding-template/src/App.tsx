import { useState, useEffect, useMemo, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from './config/weddingConfig';

import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';
import WelcomeSection from './components/WelcomeSection';
import CountdownSection from './components/CountdownSection';
import StorySection from './components/StorySection';
import EventsSection from './components/EventsSection';
import FamilySection from './components/FamilySection';
import GallerySection from './components/GallerySection';
import VenueSection from './components/VenueSection';
import RSVPSection from './components/RSVPSection';
import WishesSection from './components/WishesSection';
import TravelSection from './components/TravelSection';
import FAQSection from './components/FAQSection';
import ShareSection from './components/ShareSection';
import Footer from './components/Footer';
import ParallaxDivider from './components/ParallaxDivider';
import MusicSetupSection from './components/MusicSetupSection';

function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.985, rotateX: -8, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}

/* Fireworks burst on invitation open */
function Fireworks() {
  const particles = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => {
      const angle = (i / 50) * Math.PI * 2;
      const radius = 80 + Math.random() * 160;
      return {
        id: i,
        x: 50 + Math.cos(angle) * (radius / 4),
        y: 50 + Math.sin(angle) * (radius / 4),
        size: 2 + Math.random() * 4,
        color: ['#C9A84C', '#E8D5A3', '#7A1B2D', '#EC4899', '#10B981', '#FBBF24'][i % 6],
        delay: Math.random() * 0.8,
        duration: 0.8 + Math.random() * 1.2,
      };
    }), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[95]">
      {particles.map(p => (
        <motion.div key={p.id} className="absolute rounded-full"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0], y: [0, -20 - Math.random() * 40] }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [fireworks, setFireworks] = useState(false);

  const guestName = useMemo(() => new URLSearchParams(window.location.search).get('guest'), []);

  useEffect(() => {
    document.title = `${weddingConfig.bride.firstName} & ${weddingConfig.groom.firstName} — Wedding Invitation`;
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setFireworks(true);
    setTimeout(() => setFireworks(false), 2500);
  };

  return (
    <div className="min-h-screen" style={{ background: '#070b14' }}>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && !open && (
          <HeroSection key="hero" onOpen={handleOpen} guestName={guestName} />
        )}
      </AnimatePresence>

      {fireworks && <Fireworks />}

      {/* Ambient animated blobs for modern visual motion */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-12 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,26,58,0.22) 0%, transparent 65%)' }}
          animate={{ x: [0, 40, -20, 0], y: [0, 30, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-16 -right-8 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)' }}
          animate={{ x: [0, -35, 15, 0], y: [0, -25, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div key="main"
            initial={{ opacity: 0, scale: 0.98, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, scale: 1, clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Navbar />
            <MusicPlayer visible={open} autoStart={open} />

            <div id="home"><AnimatedSection><WelcomeSection /></AnimatedSection></div>

            <AnimatedSection><CountdownSection /></AnimatedSection>

            <AnimatedSection>
              <ParallaxDivider
                image="https://images.pexels.com/photos/2491830/pexels-photo-2491830.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                text="Forever Begins Here"
                subtext="A celebration of love, tradition & togetherness"
              />
            </AnimatedSection>

            <div id="story"><AnimatedSection><StorySection /></AnimatedSection></div>

            <AnimatedSection><FamilySection /></AnimatedSection>

            <div id="events"><AnimatedSection><EventsSection /></AnimatedSection></div>

            <AnimatedSection>
              <ParallaxDivider
                image="https://images.pexels.com/photos/570031/pexels-photo-570031.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                text="Save The Date"
                subtext={`${new Date(weddingConfig.wedding.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · ${weddingConfig.wedding.venue.city}`}
              />
            </AnimatedSection>

            <div id="gallery"><AnimatedSection><GallerySection /></AnimatedSection></div>

            <div id="venue"><AnimatedSection><VenueSection /></AnimatedSection></div>

            <AnimatedSection><TravelSection /></AnimatedSection>

            <AnimatedSection><MusicSetupSection /></AnimatedSection>

            <AnimatedSection>
              <ParallaxDivider
                image="https://images.pexels.com/photos/33726144/pexels-photo-33726144.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                text="We'd Love To See You"
                subtext="Your presence is the greatest gift"
                height="280px"
              />
            </AnimatedSection>

            <div id="rsvp"><AnimatedSection><RSVPSection /></AnimatedSection></div>

            <AnimatedSection><WishesSection /></AnimatedSection>

            <AnimatedSection><FAQSection /></AnimatedSection>

            <AnimatedSection><ShareSection /></AnimatedSection>

            <AnimatedSection><Footer /></AnimatedSection>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && !loading && <MusicPlayer visible={false} autoStart={false} />}
    </div>
  );
}
