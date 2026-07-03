'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import config from '@/data/wedding-config';
import OrnamentDivider from '../decorative/OrnamentDivider';
import MandalaPattern from '../decorative/MandalaPattern';

export default function RSVPSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    attending: true,
    message: '',
    dietaryPreference: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', phone: '', guests: 1, attending: true, message: '', dietaryPreference: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const inputClassName =
    'w-full bg-transparent border border-gold/30 rounded-sm px-4 py-3 text-cream/90 font-sans text-sm placeholder-cream/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all duration-300';

  return (
    <section id="rsvp" className="relative py-20 md:py-32 bg-wine-dark overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 mandala-rotate opacity-5">
        <MandalaPattern size={500} />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold/60 font-sans text-xs uppercase tracking-[0.3em] mb-4">
            ✦ Be Our Guest ✦
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">RSVP</h2>
          <OrnamentDivider />
          <p className="text-cream/50 font-body text-base mt-4">
            Kindly respond by{' '}
            {new Date(config.rsvpDeadline).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {formState === 'success' ? (
            <motion.div
              key="success"
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl mb-6">🎉</div>
              <h3 className="font-display text-3xl text-gold mb-4">Thank You!</h3>
              <p className="text-cream/70 font-body">
                We are delighted to receive your response. We look forward to celebrating with you!
              </p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-8 px-6 py-2 text-xs font-sans uppercase tracking-[0.15em] border border-gold/30 text-gold/70 hover:text-gold hover:border-gold/60 transition-all duration-300"
              >
                Submit Another Response
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClassName}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClassName}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClassName}
                />
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                  className={inputClassName}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n} className="bg-wine-dark text-cream">
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-6 justify-center py-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="attending"
                    checked={formData.attending}
                    onChange={() => setFormData({ ...formData, attending: true })}
                    className="accent-gold w-4 h-4"
                  />
                  <span className="text-cream/80 font-sans text-sm group-hover:text-gold transition-colors">
                    Joyfully Accepts
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="attending"
                    checked={!formData.attending}
                    onChange={() => setFormData({ ...formData, attending: false })}
                    className="accent-gold w-4 h-4"
                  />
                  <span className="text-cream/80 font-sans text-sm group-hover:text-gold transition-colors">
                    Regretfully Declines
                  </span>
                </label>
              </div>

              <input
                type="text"
                placeholder="Dietary Preferences (Veg / Non-Veg / Jain / Other)"
                value={formData.dietaryPreference}
                onChange={(e) => setFormData({ ...formData, dietaryPreference: e.target.value })}
                className={inputClassName}
              />

              <textarea
                placeholder="A message for the couple..."
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClassName} resize-none`}
              />

              {formState === 'error' && (
                <p className="text-rose text-sm text-center">Something went wrong. Please try again.</p>
              )}

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="px-12 py-3 bg-gold text-wine-dark font-sans text-xs uppercase tracking-[0.2em] hover:bg-gold-light transition-all duration-300 disabled:opacity-50 rounded-sm shadow-lg shadow-gold/20"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send RSVP'}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
