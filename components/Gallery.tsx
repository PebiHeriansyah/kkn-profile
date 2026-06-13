'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, ZoomIn, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '@/lib/data/gallery';
import { formatDateShort } from '@/lib/utils';

// Unsplash images mapped to gallery items
const GALLERY_IMAGES: Record<string, string> = {
  'gal-001': 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
  'gal-002': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
  'gal-003': 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1200&auto=format&fit=crop',
  'gal-004': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
  'gal-005': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop',
  'gal-006': 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?q=80&w=1200&auto=format&fit=crop',
};

export function Gallery() {
  const preview = galleryItems.slice(0, 6);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i !== null ? (i - 1 + preview.length) % preview.length : 0));
  const next = () => setLightboxIdx((i) => (i !== null ? (i + 1) % preview.length : 0));

  return (
    <section className="bg-kapur dark:bg-gelap-muda section-padding" id="gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12" ref={ref}>
          <div>
            <motion.div
              className="inline-flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="h-px w-8 bg-emas" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-emas-tua dark:text-emas">
                Galeri Dokumentasi
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-black text-gelap dark:text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Momen{' '}
              <span className="text-hijau-tua dark:text-hijau-segar">Berharga</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/galeri"
              className="group inline-flex items-center gap-2 text-sm font-bold text-hijau-tua dark:text-hijau-segar hover:underline"
            >
              Lihat Semua
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {preview.map((item, idx) => {
            const imgSrc = GALLERY_IMAGES[item.id] || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop';
            const large = idx === 0;
            return (
              <motion.div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${large ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:h-full' : 'aspect-square'}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.06 * idx, ease: 'easeOut' as any }}
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={imgSrc}
                  alt={item.caption}
                  fill
                  sizes={large ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gelap/75 via-gelap/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-semibold line-clamp-1">{item.caption}</p>
                  <p className="text-white/60 text-xs mt-0.5">{formatDateShort(item.date)}</p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gelap/95 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[preview[lightboxIdx].id] || ''}
                alt={preview[lightboxIdx].caption}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gelap/80 to-transparent p-6">
                <p className="text-white font-semibold">{preview[lightboxIdx].caption}</p>
                <p className="text-white/60 text-sm mt-1">{formatDateShort(preview[lightboxIdx].date)}</p>
              </div>

              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev / Next */}
              <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
