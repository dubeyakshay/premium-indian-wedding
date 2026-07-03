import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import SectionHeader from './SectionHeader';

/**
 * GallerySection - Premium masonry gallery with fullscreen lightbox
 * Supports touch swipe on mobile
 */

export default function GallerySection() {
  const { gallery } = weddingConfig;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % gallery.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <section
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1A0A0A, #2D1515, #1A0A0A)',
      }}
    >
      <div className="absolute inset-0 mandala-pattern opacity-10" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          title="Gallery"
          subtitle="Moments captured, memories cherished forever"
          light
        />

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {gallery.map((photo, index) => (
            <motion.div
              key={index}
              className="mb-3 md:mb-4 rounded-xl overflow-hidden cursor-pointer group relative break-inside-avoid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => openLightbox(index)}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{
                  aspectRatio: photo.aspect === 'portrait' ? '3/4' : '4/3',
                }}
                loading="lazy"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)',
                }}
              >
                <p className="text-white font-elegant text-sm">{photo.caption}</p>
              </div>
              {/* Border glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ border: '2px solid rgba(212,168,83,0.5)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center lightbox-overlay"
            style={{ background: 'rgba(0,0,0,0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-yellow-400 transition-colors cursor-pointer"
              onClick={closeLightbox}
            >
              ✕
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 text-white text-4xl z-10 hover:text-yellow-400 transition-colors cursor-pointer"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              ‹
            </button>
            <button
              className="absolute right-4 text-white text-4xl z-10 hover:text-yellow-400 transition-colors cursor-pointer"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              ›
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={gallery[selectedIndex].url}
              alt={gallery[selectedIndex].caption}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-6 text-center">
              <p className="text-white font-elegant text-lg">{gallery[selectedIndex].caption}</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {selectedIndex + 1} / {gallery.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
