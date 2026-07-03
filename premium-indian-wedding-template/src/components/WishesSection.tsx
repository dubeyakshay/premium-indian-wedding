import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

/**
 * WishesSection - Guest wishes with heart reactions
 * Includes pre-loaded blessings and user-submitted wishes
 */

interface Wish {
  id: number;
  name: string;
  message: string;
  hearts: number;
  time: string;
}

const initialWishes: Wish[] = [
  { id: 1, name: "Amit & Priya Uncle", message: "May your love grow stronger with each passing day. Congratulations! 🎉", hearts: 12, time: "2 days ago" },
  { id: 2, name: "Sneha Didi", message: "So happy for you both! You make a beautiful couple. Can't wait to dance at the sangeet! 💃", hearts: 8, time: "1 day ago" },
  { id: 3, name: "Rajesh Bhai", message: "Wishing you a lifetime of happiness and love. God bless! 🙏", hearts: 15, time: "3 hours ago" },
];

export default function WishesSection() {
  const { blessings } = weddingConfig;
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [newWish, setNewWish] = useState({ name: '', message: '' });
  const [showBlessing, setShowBlessing] = useState(false);
  const [currentBlessing, setCurrentBlessing] = useState('');

  const addWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWish.name.trim() || !newWish.message.trim()) return;

    const wish: Wish = {
      id: Date.now(),
      name: newWish.name,
      message: newWish.message,
      hearts: 0,
      time: 'Just now',
    };
    setWishes([wish, ...wishes]);
    setNewWish({ name: '', message: '' });
  };

  const addHeart = (id: number) => {
    setWishes(wishes.map((w) => w.id === id ? { ...w, hearts: w.hearts + 1 } : w));
  };

  const generateBlessing = () => {
    const blessing = blessings[Math.floor(Math.random() * blessings.length)];
    setCurrentBlessing(blessing);
    setShowBlessing(true);
    setTimeout(() => setShowBlessing(false), 4000);
  };

  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden" style={{ background: '#FFF8F0' }}>
      <div className="absolute inset-0 mandala-pattern opacity-10" />
      <div className="absolute inset-0 royal-overlay" />

      <div className="relative max-w-3xl mx-auto">
        <SectionHeader
          title="Wishes & Blessings"
          subtitle="Share your love and blessings with the couple"
        />

        {/* Random Blessing Generator */}
        <motion.div className="text-center mb-8">
          <button
            onClick={generateBlessing}
            className="px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #8B1A1A, #D4A853)',
              color: '#FFF8F0',
            }}
          >
            🙏 Generate a Blessing
          </button>

          <AnimatePresence>
            {showBlessing && (
              <motion.div
                className="mt-4 p-4 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(212,168,83,0.1), rgba(139,26,26,0.1))',
                  border: '1px solid rgba(212,168,83,0.3)',
                }}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
              >
                <p className="font-elegant text-base italic" style={{ color: '#2D1B0E' }}>
                  {currentBlessing}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Wish Form */}
        <motion.form
          onSubmit={addWish}
          className="mb-8 p-5 rounded-xl"
          style={{
            background: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(212,168,83,0.2)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              value={newWish.name}
              onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
              placeholder="Your name"
              className="px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-yellow-600/30"
              style={{ borderColor: 'rgba(212,168,83,0.3)' }}
            />
            <input
              type="text"
              value={newWish.message}
              onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
              placeholder="Write your wishes..."
              className="md:col-span-2 px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-yellow-600/30"
              style={{ borderColor: 'rgba(212,168,83,0.3)' }}
            />
          </div>
          <div className="text-right mt-3">
            <button
              type="submit"
              className="px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #8B1A1A, #D4A853)',
                color: '#FFF8F0',
              }}
            >
              💌 Send Wish
            </button>
          </div>
        </motion.form>

        {/* Wishes List */}
        <div className="space-y-4">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              className="p-4 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(212,168,83,0.15)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-display text-sm font-semibold" style={{ color: '#2D1B0E' }}>
                    {wish.name}
                  </p>
                  <p className="font-elegant text-sm mt-1" style={{ color: 'rgba(45,27,14,0.7)' }}>
                    {wish.message}
                  </p>
                  <p className="text-xs mt-2" style={{ color: 'rgba(45,27,14,0.3)' }}>{wish.time}</p>
                </div>
                <button
                  onClick={() => addHeart(wish.id)}
                  className="flex items-center gap-1 text-sm ml-3 transition-transform hover:scale-110 cursor-pointer"
                  style={{ color: '#DC2626' }}
                >
                  ❤️ <span className="text-xs">{wish.hearts}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
