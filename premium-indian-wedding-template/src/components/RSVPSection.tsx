import { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

interface RSVPForm {
  name: string;
  phone: string;
  guests: string;
  attending: string;
  food: string;
  message: string;
}

export default function RSVPSection() {
  const [form, setForm] = useState<RSVPForm>({
    name: '',
    phone: '',
    guests: '1',
    attending: 'yes',
    food: 'veg',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const fieldStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.14)',
    color: '#f9fafb',
  };

  return (
    <section className="relative py-24 px-5 mesh-bg" style={{ background: '#070b14' }}>
      <div className="max-w-2xl mx-auto">
        <SectionHeader tag="rsvp" title="Will You Join Us?" subtitle="Please confirm your presence" light />

        {sent ? (
          <motion.div
            className="glass-panel rounded-2xl p-10 text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-gold-gradient font-display text-3xl">Thank You</p>
            <p className="mt-3" style={{ color: 'rgba(229,231,235,0.8)' }}>Your RSVP was received.</p>
          </motion.div>
        ) : (
          <motion.form
            className="glass-panel rounded-2xl p-6 md:p-8 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
          >
            <input required name="name" value={form.name} onChange={onChange} placeholder="Your Name" className="w-full rounded-xl px-4 py-3 text-sm" style={fieldStyle} />
            <input required name="phone" value={form.phone} onChange={onChange} placeholder="Phone Number" className="w-full rounded-xl px-4 py-3 text-sm" style={fieldStyle} />

            <div className="grid md:grid-cols-2 gap-4">
              <select name="guests" value={form.guests} onChange={onChange} className="w-full rounded-xl px-4 py-3 text-sm" style={fieldStyle}>
                {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n} style={{ background: '#0b1220' }}>{n} Guest{n > 1 ? 's' : ''}</option>)}
              </select>
              <select name="attending" value={form.attending} onChange={onChange} className="w-full rounded-xl px-4 py-3 text-sm" style={fieldStyle}>
                <option value="yes" style={{ background: '#0b1220' }}>Will Attend</option>
                <option value="no" style={{ background: '#0b1220' }}>Cannot Attend</option>
              </select>
            </div>

            <select name="food" value={form.food} onChange={onChange} className="w-full rounded-xl px-4 py-3 text-sm" style={fieldStyle}>
              <option value="veg" style={{ background: '#0b1220' }}>Vegetarian</option>
              <option value="nonveg" style={{ background: '#0b1220' }}>Non-Vegetarian</option>
              <option value="jain" style={{ background: '#0b1220' }}>Jain</option>
            </select>

            <textarea name="message" value={form.message} onChange={onChange} rows={4} placeholder="Message" className="w-full rounded-xl px-4 py-3 text-sm resize-none" style={fieldStyle} />

            <motion.button
              type="submit"
              className="w-full rounded-xl px-4 py-3 text-xs uppercase tracking-[0.3em] cursor-pointer"
              style={{ background: 'linear-gradient(135deg, rgba(139,26,58,0.55), rgba(212,175,95,0.45))', border: '1px solid rgba(212,175,95,0.6)' }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Send RSVP
            </motion.button>

            <p className="text-center text-xs" style={{ color: 'rgba(229,231,235,0.7)' }}>
              or RSVP on WhatsApp: <a href={`https://wa.me/${weddingConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: '#d4af5f' }}>Open Chat</a>
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}