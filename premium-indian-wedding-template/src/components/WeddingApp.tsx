'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import config from '@/data/wedding-config';
import WelcomeGate from './WelcomeGate';
import LoadingScreen from './LoadingScreen';
import Navigation from './Navigation';
import FloatingPetals from './decorative/FloatingPetals';
import MusicPlayer from './MusicPlayer';
import HeroSection from './sections/HeroSection';
import CountdownSection from './sections/CountdownSection';
import CoupleSection from './sections/CoupleSection';
import EventsSection from './sections/EventsSection';
import GallerySection from './sections/GallerySection';
import VenueSection from './sections/VenueSection';
import RSVPSection from './sections/RSVPSection';
import WishesSection from './sections/WishesSection';
import FooterSection from './sections/FooterSection';

const { sections } = config.settings;

export default function WeddingApp() {
  const [phase, setPhase] = useState<'gate' | 'loading' | 'ready'>('gate');
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Called when the user taps "Open Invitation" on the welcome gate
  const handleEnter = useCallback(() => {
    // Start music immediately on user interaction (satisfies browser autoplay policy)
    if (config.settings.music.enabled) {
      try {
        const audio = new Audio(config.settings.music.url);
        audio.loop = true;
        audio.volume = config.settings.music.volume;
        audioRef.current = audio;
        audio.play().then(() => {
          setIsMusicPlaying(true);
        }).catch(() => {
          // Autoplay blocked, user can use the toggle
        });
      } catch {
        // Audio creation failed
      }
    }
    setPhase('loading');
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setPhase('ready');
  }, []);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;
    if (isMusicPlaying) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsMusicPlaying(true);
      }).catch(() => {});
    }
  }, [isMusicPlaying]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-wine-dark flex items-center justify-center">
        <div className="text-gold font-display text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {/* Phase 1: Welcome Gate — requires user click to satisfy browser autoplay policy */}
      <AnimatePresence>
        {phase === 'gate' && <WelcomeGate onEnter={handleEnter} />}
      </AnimatePresence>

      {/* Phase 2: Loading screen */}
      <AnimatePresence>
        {phase === 'loading' && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Phase 3: Main content */}
      {phase === 'ready' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navigation />
          {config.settings.floatingPetals && (
            <FloatingPetals count={config.settings.floatingPetalsCount} />
          )}
          {config.settings.music.enabled && (
            <MusicPlayer isPlaying={isMusicPlaying} onToggle={toggleMusic} />
          )}

          <main>
            {sections.hero && <HeroSection />}
            {sections.countdown && <CountdownSection />}
            {sections.couple && <CoupleSection />}
            {sections.events && <EventsSection />}
            {sections.gallery && <GallerySection />}
            {sections.venue && <VenueSection />}
            {sections.rsvp && config.rsvpEnabled && <RSVPSection />}
            {sections.wishes && <WishesSection />}
            {sections.footer && <FooterSection />}
          </main>
        </motion.div>
      )}
    </>
  );
}
