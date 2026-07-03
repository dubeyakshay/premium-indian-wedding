import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from './config/weddingConfig';

// Components
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import FloatingPetals from './components/FloatingPetals';
import Sparkles from './components/Sparkles';
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
import IndianMotifs from './components/IndianMotifs';

/**
 * App - Main Wedding Invitation Application
 * 
 * Features:
 * - Loading screen with mandala animation
 * - Hero/Envelope opening animation
 * - Personalized guest greeting via URL param (?guest=Name)
 * - Floating petals and sparkle effects
 * - Music player
 * - All sections driven by config
 * - Smooth scroll animations
 * - Fireworks on invitation open
 */

// Fireworks component
function Fireworks() {
  const particles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60 + 10,
      size: 4 + Math.random() * 8,
      color: ['#D4A853', '#8B1A1A', '#F59E0B', '#EC4899', '#10B981', '#FFD700', '#FF6347'][i % 7],
      delay: Math.random() * 1.5,
      duration: 1 + Math.random() * 2,
    }))
  , []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[95]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            y: [0, -30, -60],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  // Get guest name from URL
  const guestName = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('guest');
  }, []);

  // Update page title
  useEffect(() => {
    document.title = `${weddingConfig.bride.firstName} & ${weddingConfig.groom.firstName} - Wedding Invitation`;
  }, []);

  // Loading timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Open invitation handler
  const handleOpen = () => {
    setIsOpen(true);
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 3000);
  };

  return (
    <div className="min-h-screen" style={{ background: '#FFF8F0' }}>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Hero / Envelope */}
      <AnimatePresence>
        {!isLoading && !isOpen && (
          <HeroSection onOpen={handleOpen} guestName={guestName} />
        )}
      </AnimatePresence>

      {/* Fireworks on open */}
      {showFireworks && <Fireworks />}

      {/* Main Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Navbar */}
            <Navbar />

            {/* Floating Decorations */}
            <FloatingPetals />
            <Sparkles />

            {/* Music Player */}
            <MusicPlayer />

            {/* ────────── SECTIONS ────────── */}

            {/* Home / Welcome */}
            <div id="home">
              <WelcomeSection />
            </div>

            {/* Countdown */}
            <CountdownSection />

            {/* Parallax */}
            <ParallaxDivider
              image="https://images.pexels.com/photos/2491830/pexels-photo-2491830.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              text="Forever Begins Here"
              subtext="A celebration of love, tradition, and togetherness"
            />

            {/* Indian Motifs Divider */}
            <IndianMotifs />

            {/* Our Story */}
            <div id="story">
              <StorySection />
            </div>

            {/* Family */}
            <FamilySection />

            {/* Events */}
            <div id="events">
              <EventsSection />
            </div>

            {/* Parallax */}
            <ParallaxDivider
              image="https://images.pexels.com/photos/570031/pexels-photo-570031.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              text="Save The Date"
              subtext={`${new Date(weddingConfig.wedding.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })} • ${weddingConfig.wedding.venue.city}`}
            />

            {/* Gallery */}
            <div id="gallery">
              <GallerySection />
            </div>

            {/* Venue */}
            <div id="venue">
              <VenueSection />
            </div>

            {/* Travel */}
            <TravelSection />

            {/* Parallax */}
            <ParallaxDivider
              image="https://images.pexels.com/photos/33726144/pexels-photo-33726144.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              text="We'd Love To See You"
              subtext="Your presence is the greatest gift"
              height="250px"
            />

            {/* RSVP */}
            <div id="rsvp">
              <RSVPSection />
            </div>

            {/* Wishes */}
            <WishesSection />

            {/* FAQ */}
            <FAQSection />

            {/* Share */}
            <ShareSection />

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
