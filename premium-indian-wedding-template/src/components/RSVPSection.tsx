import { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

/**
 * RSVPSection - Beautiful RSVP form with animated submission
 */

interface RSVPForm {
  name: string;
  phone: string;
  guests: string;
  attending: string;
  food: string;
  message: string;
}

export default function RSVPSection() {
  const { contact } = weddingConfig;
  const [form, setForm] = useState<RSVPForm>({
    name: '',
    phone: '',
    guests: '1',
    attending: 'yes',
    food: 'veg',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to Google Sheets / Firebase / Email API
    console.log('RSVP Submitted:', form);
    setSubmitted(true);
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(212,168,83,0.3)',
    color: '#F5E6C8',
    borderRadius: '12px',
  };

  return (
    <section
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A0A0A 0%, #3D1515 50%, #1A0A0A 100%)',
      }}
    >
      <div className="absolute inset-0 mandala-pattern opacity-10" />

      <div className="relative max-w-2xl mx-auto">
        <SectionHeader
          title="RSVP"
          subtitle="Kindly respond by the wedding date"
          light
        />

        {submitted ? (
          <motion.div
            className="text-center p-8 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(212,168,83,0.3)',
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring' }}
          >
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="font-display text-2xl text-gold-gradient mb-2">Thank You!</h3>
            <p className="font-elegant" style={{ color: 'rgba(245,230,200,0.7)' }}>
              We're thrilled you'll be joining us. See you at the celebration!
            </p>
            <p className="text-xs mt-4" style={{ color: 'rgba(245,230,200,0.4)' }}>
              For any queries, contact us at {contact.phone}
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-2xl space-y-5"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(212,168,83,0.2)',
              backdropFilter: 'blur(10px)',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Name */}
            <div>
              <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: '#D4A853' }}>
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-600/50 placeholder-gray-500"
                style={inputStyle}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: '#D4A853' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+91-XXXXX-XXXXX"
                className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-600/50 placeholder-gray-500"
                style={inputStyle}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Number of Guests */}
              <div>
                <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: '#D4A853' }}>
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-600/50"
                  style={inputStyle}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n} style={{ background: '#1A0A0A' }}>{n} Guest{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              {/* Attending */}
              <div>
                <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: '#D4A853' }}>
                  Will Attend?
                </label>
                <select
                  name="attending"
                  value={form.attending}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-600/50"
                  style={inputStyle}
                >
                  <option value="yes" style={{ background: '#1A0A0A' }}>Joyfully Accept 🎉</option>
                  <option value="no" style={{ background: '#1A0A0A' }}>Regretfully Decline 😢</option>
                </select>
              </div>
            </div>

            {/* Food Preference */}
            <div>
              <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: '#D4A853' }}>
                Food Preference
              </label>
              <select
                name="food"
                value={form.food}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-600/50"
                style={inputStyle}
              >
                <option value="veg" style={{ background: '#1A0A0A' }}>🥬 Vegetarian</option>
                <option value="nonveg" style={{ background: '#1A0A0A' }}>🍗 Non-Vegetarian</option>
                <option value="jain" style={{ background: '#1A0A0A' }}>🙏 Jain</option>
                <option value="vegan" style={{ background: '#1A0A0A' }}>🌱 Vegan</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: '#D4A853' }}>
                Message for the Couple
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Share your blessings and wishes..."
                className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-600/50 resize-none placeholder-gray-500"
                style={inputStyle}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="w-full py-3.5 rounded-xl font-display text-base tracking-wider uppercase cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #8B1A1A, #D4A853)',
                color: '#FFF8F0',
                border: 'none',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ✨ Send RSVP
            </motion.button>

            {/* Alternative Contact */}
            <div className="text-center pt-2">
              <p className="text-xs" style={{ color: 'rgba(245,230,200,0.4)' }}>
                Or RSVP via WhatsApp:
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=Hi! I'd like to RSVP for the wedding.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 underline"
                  style={{ color: '#D4A853' }}
                >
                  Click here 💬
                </a>
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
