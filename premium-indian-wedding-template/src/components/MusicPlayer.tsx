import { useState, useCallback } from 'react';

/**
 * MusicPlayer - Floating music control button
 * Shows play/pause/mute controls for background music
 */

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = useCallback(() => {
    setIsPlaying(!isPlaying);
    // In production, integrate with an actual audio element
  }, [isPlaying]);

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg transition-all duration-300 hover:scale-110"
      style={{
        background: 'linear-gradient(135deg, #8B1A1A, #D4A853)',
        color: '#FFF8F0',
        boxShadow: '0 4px 20px rgba(212, 168, 83, 0.4)',
      }}
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      {isPlaying ? '🔊' : '🎵'}
    </button>
  );
}
