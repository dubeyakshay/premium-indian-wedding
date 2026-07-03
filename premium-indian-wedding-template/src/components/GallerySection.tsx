import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

export default function GallerySection() {
  const [index, setIndex] = useState<number | null>(null);

  const next = () => setIndex((v) => (v === null ? 0 : (v + 1) % weddingConfig.gallery.length));
  const prev = () => setIndex((v) => (v === null ? 0 : (v - 1 + weddingConfig.gallery.length) % weddingConfig.gallery.length));

  return (
    <section className="relative py-24 px-5" style={{ background: '#0b1220' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="gallery" title="Our Moments" subtitle="Tap any photo to view fullscreen" light />

        <div className="columns-2 md:columns-3 gap-3 [column-fill:_balance]">
          {weddingConfig.gallery.map((photo, i) => (
            <motion.button
              key={photo.url}
              className="mb-3 w-full overflow-hidden rounded-xl cursor-pointer relative block"
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.015 }}
            >
              <img src={photo.url} alt={photo.caption} className="w-full object-cover" loading="lazy" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center px-4"
            style={{ background: 'rgba(2,6,23,0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIndex(null)}
          >
            <button className="absolute top-4 right-4 text-white text-2xl cursor-pointer" onClick={() => setIndex(null)}>×</button>
            <button className="absolute left-4 text-white text-3xl cursor-pointer" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
            <button className="absolute right-4 text-white text-3xl cursor-pointer" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>

            <motion.img
              key={index}
              src={weddingConfig.gallery[index].url}
              alt={weddingConfig.gallery[index].caption}
              className="max-w-[92vw] max-h-[84vh] rounded-lg"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}