'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, MapPin, CheckCircle } from 'lucide-react';
import { programs, getFeaturedPrograms } from '@/lib/data/programs';
import type { ProgramCategory } from '@/lib/types';

const CATEGORY_LABELS: Record<ProgramCategory, string> = {
  pendidikan: 'Pendidikan',
  kesehatan: 'Kesehatan',
  lingkungan: 'Lingkungan',
  ekonomi: 'Ekonomi',
  infrastruktur: 'Infrastruktur',
  'sosial-budaya': 'Sosial & Budaya',
};

const CATEGORY_COLORS: Record<ProgramCategory, string> = {
  pendidikan: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  kesehatan: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  lingkungan: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  ekonomi: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  infrastruktur: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  'sosial-budaya': 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
};

const PROGRAM_IMAGES: Record<string, string> = {
  'prog-001': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
  'prog-002': 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
  'prog-003': 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=800&auto=format&fit=crop',
  'prog-004': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
  'prog-005': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
  'prog-006': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
  'prog-007': 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
  'prog-008': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop',
  'prog-009': 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?q=80&w=800&auto=format&fit=crop',
  'prog-010': 'https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=800&auto=format&fit=crop',
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as any } },
};

export function Programs() {
  const featured = getFeaturedPrograms(6);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-kapur dark:bg-gelap-muda section-padding" id="programs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" ref={ref}>
          <motion.div
            className="inline-flex items-center gap-3 mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="h-px w-8 bg-emas" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-emas-tua dark:text-emas">
              Program Kerja
            </span>
            <span className="h-px w-8 bg-emas" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-black text-gelap dark:text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Inovasi untuk{' '}
            <span className="text-hijau-tua dark:text-hijau-segar">Kemajuan Desa</span>
          </motion.h2>
          <motion.p
            className="text-base text-gelap/60 dark:text-white/60 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            {programs.length} program kerja komprehensif dirancang berdasarkan kebutuhan nyata masyarakat dan potensi desa.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {featured.map((prog) => (
            <motion.article
              key={prog.id}
              variants={cardAnim}
              className="group relative bg-background dark:bg-gelap rounded-2xl overflow-hidden border border-kapur-gelap dark:border-white/8 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={PROGRAM_IMAGES[prog.id] || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop'}
                  alt={prog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gelap/60 to-transparent" />

                {/* Category badge */}
                <span className={`absolute top-3 left-3 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${CATEGORY_COLORS[prog.category]}`}>
                  {CATEGORY_LABELS[prog.category]}
                </span>

                {/* Status badge */}
                {prog.status === 'selesai' && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 text-xs font-semibold text-green-300 bg-green-900/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-green-500/30">
                    <CheckCircle className="h-3 w-3" />
                    Selesai
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-gelap dark:text-white mb-2 line-clamp-1 group-hover:text-hijau-tua dark:group-hover:text-hijau-segar transition-colors">
                  {prog.title}
                </h3>
                <p className="text-sm text-gelap/60 dark:text-white/55 leading-relaxed line-clamp-2 mb-4">
                  {prog.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gelap/45 dark:text-white/40 pt-4 border-t border-kapur-gelap dark:border-white/8">
                  {prog.participants && (
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" />
                      {prog.participants} peserta
                    </span>
                  )}
                  {prog.location && (
                    <span className="flex items-center gap-1.5 min-w-0">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{prog.location}</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/program"
            className="group inline-flex items-center gap-2 text-sm font-bold text-hijau-tua dark:text-hijau-segar border-2 border-hijau-tua/30 dark:border-hijau-segar/30 hover:border-hijau-tua dark:hover:border-hijau-segar px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-hijau-tua/6 dark:hover:bg-hijau-segar/8"
          >
            Lihat Semua Program ({programs.length})
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
