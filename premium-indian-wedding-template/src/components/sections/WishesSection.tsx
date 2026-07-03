'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useCallback } from 'react';
import config from '@/data/wedding-config';
import OrnamentDivider from '../decorative/OrnamentDivider';

interface Wish {
  id: number;
  name: string;
  message: string;
  createdAt: string;
}

export default function WishesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const fetchWishes = useCallback(async () => {
    try {
      const res = await fetch('/api/wishes');
      if (res.ok) {
        const data = await res.json();
        setWishes(data);
      }
    } catch {
      // silently fail
    }
  }, []);

  useEffect(() => {
    fetchWishes();
  }, [fetchWishes]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    try {
      const res = await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });
      if (res.ok) {
        setFormState('success');
        setName('');
        setMessage('');
        fetchWishes();
        setTimeout(() => setFormState('idle'), 3000);
      }
    } catch {
      setFormState('idle');
    }
  };

  const inputClassName =
    'w-full bg-white/50 border border-gold/20 rounded-sm px-4 py-3 text-wine-dark font-sans text-sm placeholder-wine/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300';

  return (
    <section id="wishes" className="relative py-20 md:py-32 bg-cream overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold font-sans text-xs uppercase tracking-[0.3em] mb-4">
            ✦ Best Wishes ✦
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-maroon mb-4">
            Send Your Blessings
          </h2>
          <OrnamentDivider />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Your Name *"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClassName}
            />
            <textarea
              placeholder="Write your blessings for the couple... *"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClassName} resize-none`}
            />
            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full py-3 bg-maroon text-cream font-sans text-xs uppercase tracking-[0.2em] hover:bg-maroon-light transition-all duration-300 disabled:opacity-50 rounded-sm"
            >
              {formState === 'submitting'
                ? 'Sending...'
                : formState === 'success'
                ? '✓ Wish Sent!'
                : 'Send Wish 💌'}
            </button>
          </motion.form>

          {/* Wishes display */}
          <motion.div
            className="max-h-96 overflow-y-auto space-y-4 pr-2 scrollbar-thin"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            {wishes.length === 0 ? (
              <div className="text-center py-12 text-wine/40 font-body italic">
                Be the first to send your blessings! 💕
              </div>
            ) : (
              <AnimatePresence>
                {wishes.map((wish, i) => (
                  <motion.div
                    key={wish.id}
                    className="bg-white/60 backdrop-blur-sm border border-gold/10 rounded-lg p-4 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <p className="font-body text-wine/80 text-sm leading-relaxed italic">
                      &ldquo;{wish.message}&rdquo;
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-xs text-gold font-sans">
                        {wish.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-maroon font-sans text-xs font-medium">{wish.name}</span>
                      <span className="text-wine/30 text-xs ml-auto">
                        {new Date(wish.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
