'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import config from '@/data/wedding-config';
import type { GalleryImage } from '@/data/wedding-config';
import OrnamentDivider from '../decorative/OrnamentDivider';

function GalleryItem({ image, index }: { image: GalleryImage; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const spanClass =
    image.span === 'tall'
      ? 'row-span-2'
      : image.span === 'wide'
      ? 'col-span-2'
      : '';

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-lg group cursor-pointer ${spanClass}`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-cream text-sm font-body">{image.alt}</p>
      </div>
      {/* Corner frame on hover */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/0 group-hover:border-gold/60 transition-all duration-500" />
    </motion.div>
  );
}

export default function GallerySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-cream overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold font-sans text-xs uppercase tracking-[0.3em] mb-4">
            ✦ Our Moments ✦
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-maroon mb-4">
            Gallery of Love
          </h2>
          <OrnamentDivider />
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {config.gallery.map((image, index) => (
            <div key={index} onClick={() => setLightboxIndex(index)}>
              <GalleryItem image={image} index={index} />
            </div>
          ))}
        </div>

        {/* Hashtag */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-2xl text-gold">{config.hashtag}</p>
          <p className="text-wine/50 font-sans text-xs mt-2 uppercase tracking-[0.1em]">
            Share your memories with us
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <motion.div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/80 hover:text-gold text-3xl z-10"
            onClick={() => setLightboxIndex(null)}
          >
            ✕
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/80 hover:text-gold text-3xl px-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : config.gallery.length - 1);
            }}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/80 hover:text-gold text-3xl px-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(lightboxIndex < config.gallery.length - 1 ? lightboxIndex + 1 : 0);
            }}
          >
            ›
          </button>
          <motion.img
            key={lightboxIndex}
            src={config.gallery[lightboxIndex].src}
            alt={config.gallery[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
