import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

interface Wish { id: number; name: string; message: string; hearts: number; time: string; }

const initialWishes: Wish[] = [
  { id: 1, name: "Amit & Priya Uncle", message: "May your love grow stronger with each passing day. Congratulations! 🎉", hearts: 12, time: "2 days ago" },
  { id: 2, name: "Sneha Didi", message: "So happy for you both! Can't wait to dance at the sangeet! 💃", hearts: 8, time: "1 day ago" },
  { id: 3, name: "Rajesh Bhai", message: "Wishing you a lifetime of happiness and love. God bless! 🙏", hearts: 15, time: "3 hours ago" },
];

export default function WishesSection() {
  const { blessings } = weddingConfig;
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [newWish, setNewWish] = useState({ name: '', message: '' });
  const [showBlessing, setShowBlessing] = useState(false);
  const [blessing, setBlessing] = useState('');

  const addWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWish.name.trim() || !newWish.message.trim()) return;
    setWishes([{ id: Date.now(), name: newWish.name, message: newWish.message, hearts: 0, time: 'Just now' }, ...wishes]);
    setNewWish({ name: '', message: '' });
  };

  const addHeart = (id: number) => setWishes(wishes.map(w => w.id === id ? { ...w, hearts: w.hearts + 1 } : w));

  const genBlessing = () => {
    setBlessing(blessings[Math.floor(Math.random() * blessings.length)]);
    setShowBlessing(true);
    setTimeout(() => setShowBlessing(false), 4000);
  };

  return (
    <section className="relative py-24 md:py-32 px-5 overflow-hidden grain mesh-bg" style={{ background: '#070b14' }}>
      <div className="relative max-w-2xl mx-auto">
        <SectionHeader title="Wishes" subtitle="Share your blessings with the couple" tag="guestbook" light />

        {/* Blessing generator */}
        <div className="text-center mb-10">
          <button onClick={genBlessing}
            className="px-5 py-2 rounded-full text-xs tracking-wider cursor-pointer transition-all hover:scale-105"
            style={{ background: 'rgba(212,175,95,0.12)', border: '1px solid rgba(212,175,95,0.4)', color: '#d4af5f' }}>
            Generate a Blessing ✨
          </button>
          <AnimatePresence>
            {showBlessing && (
              <motion.div className="mt-4 p-4 rounded-xl max-w-md mx-auto"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }}
                initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                <p className="font-elegant text-sm italic" style={{ color: '#e5e7eb' }}>{blessing}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Form */}
        <form onSubmit={addWish} className="mb-8 p-4 rounded-2xl flex flex-col md:flex-row gap-2.5"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
          <input type="text" value={newWish.name} onChange={e => setNewWish({ ...newWish, name: e.target.value })}
            placeholder="Your name" className="flex-1 px-3.5 py-2.5 rounded-xl text-sm border-none focus:outline-none focus:ring-2 focus:ring-amber-200"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#f9fafb' }} />
          <input type="text" value={newWish.message} onChange={e => setNewWish({ ...newWish, message: e.target.value })}
            placeholder="Write your wish..." className="flex-[2] px-3.5 py-2.5 rounded-xl text-sm border-none focus:outline-none focus:ring-2 focus:ring-amber-200"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#f9fafb' }} />
          <button type="submit"
            className="px-5 py-2.5 rounded-xl text-xs tracking-wider cursor-pointer whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, rgba(139,26,58,0.55), rgba(212,175,95,0.45))', color: '#f9fafb' }}>
            Send
          </button>
        </form>

        {/* Wishes list */}
        <div className="space-y-3">
          {wishes.map((w, i) => (
            <motion.div key={w.id}
              className="p-4 rounded-xl flex items-start justify-between gap-3"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <div className="flex-1 min-w-0">
                <p className="font-display text-sm font-medium" style={{ color: '#f9fafb' }}>{w.name}</p>
                <p className="text-sm mt-0.5" style={{ color: 'rgba(229,231,235,0.8)' }}>{w.message}</p>
                <p className="text-[10px] mt-1.5" style={{ color: 'rgba(229,231,235,0.45)' }}>{w.time}</p>
              </div>
              <button onClick={() => addHeart(w.id)}
                className="flex items-center gap-1 text-xs transition-transform hover:scale-110 cursor-pointer shrink-0 pt-1"
                style={{ color: '#E11D48' }}>
                ♥ <span className="text-[10px]" style={{ color: '#A8A29E' }}>{w.hearts}</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
