import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';

interface MusicPlayerProps {
  visible?: boolean;
  autoStart?: boolean;
}

export default function MusicPlayer({ visible = true, autoStart = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const fallbackNodesRef = useRef<OscillatorNode[]>([]);
  const autoStartedRef = useRef(false);
  const userStoppedRef = useRef(false);

  const { url, autoplay, loop, volume } = weddingConfig.music;

  const ensureAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(url);
      audio.loop = loop;
      audio.volume = volume;
      audio.preload = 'auto';
      audioRef.current = audio;
    }
    return audioRef.current;
  }, [loop, url, volume]);

  const startFallback = useCallback(async () => {
    if (!ctxRef.current) {
      const ctx = new AudioContext();
      ctxRef.current = ctx;

      const master = ctx.createGain();
      master.gain.value = Math.min(volume, 0.28);
      master.connect(ctx.destination);

      // Elegant ambient pad fallback (no placeholder text needed).
      const freqs = [196, 246.94, 293.66];
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();

        osc.type = idx === 0 ? 'triangle' : 'sine';
        osc.frequency.value = f;
        gain.gain.value = 0.03 + idx * 0.01;

        lfo.frequency.value = 0.08 + idx * 0.03;
        lfoGain.gain.value = 1.8;
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);

        osc.connect(gain);
        gain.connect(master);
        osc.start();
        lfo.start();

        fallbackNodesRef.current.push(osc, lfo);
      });
    } else if (ctxRef.current.state !== 'running') {
      await ctxRef.current.resume();
    }

    setIsPlaying(true);
  }, [volume]);

  const playAudio = useCallback(async () => {
    if (url) {
      const audio = ensureAudio();
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        await startFallback();
      }
      return;
    }
    await startFallback();
  }, [ensureAudio, startFallback, url]);

  const pauseAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (ctxRef.current && ctxRef.current.state === 'running') {
      void ctxRef.current.suspend();
    }
    setIsPlaying(false);
  }, []);

  const toggleAudio = useCallback(async () => {
    if (isPlaying) {
      userStoppedRef.current = true;
      pauseAudio();
    } else {
      userStoppedRef.current = false;
      await playAudio();
    }
  }, [isPlaying, pauseAudio, playAudio]);

  // Autostart only once when invitation opens, unless user explicitly stopped it.
  useEffect(() => {
    if (!autoStart || !autoplay || isPlaying || userStoppedRef.current || autoStartedRef.current) return;
    autoStartedRef.current = true;
    void playAudio();
  }, [autoStart, autoplay, isPlaying, playAudio]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      fallbackNodesRef.current.forEach((n) => {
        try {
          n.stop();
        } catch {
          // ignore already-stopped nodes
        }
      });
      fallbackNodesRef.current = [];
      if (ctxRef.current) {
        void ctxRef.current.close();
        ctxRef.current = null;
      }
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <motion.button
        onClick={() => void toggleAudio()}
        className="relative w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          background: 'rgba(7,11,20,0.8)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(212,175,95,0.45)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <div className="flex items-end gap-[2px] h-4">
            {[1, 2, 3, 4].map((id) => (
              <motion.div
                key={id}
                className="w-[3px] rounded-full"
                style={{ background: '#d4af5f' }}
                animate={{ height: ['4px', '11px', '6px', '12px', '4px'] }}
                transition={{ duration: 0.9 + id * 0.1, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-0.5">
            <path d="M3 1.5L12 7L3 12.5V1.5Z" fill="#d4af5f" />
          </svg>
        )}
      </motion.button>
    </motion.div>
  );
}
