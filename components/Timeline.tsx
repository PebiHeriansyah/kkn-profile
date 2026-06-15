'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { timelineEvents } from '@/lib/data/timeline';
import type { ProgramCategory } from '@/lib/types';

const CATEGORY_CONFIG: Record<string, { label: string; dot: string; line: string }> = {
  pendidikan: { label: 'Pendidikan', dot: 'bg-blue-500', line: 'bg-blue-200 dark:bg-blue-800' },
  kesehatan: { label: 'Kesehatan', dot: 'bg-green-500', line: 'bg-green-200 dark:bg-green-800' },
  lingkungan: { label: 'Lingkungan', dot: 'bg-emerald-500', line: 'bg-emerald-200 dark:bg-emerald-800' },
  ekonomi: { label: 'Ekonomi', dot: 'bg-amber-500', line: 'bg-amber-200 dark:bg-amber-800' },
  infrastruktur: { label: 'Infrastruktur', dot: 'bg-orange-500', line: 'bg-orange-200 dark:bg-orange-800' },
  'sosial-budaya': { label: 'Sosial & Budaya', dot: 'bg-purple-500', line: 'bg-purple-200 dark:bg-purple-800' },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="bg-background section-padding" id="timeline">
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
              Timeline Kegiatan
            </span>
            <span className="h-px w-8 bg-emas" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-black text-gelap dark:text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Perjalanan{' '}
            <span className="text-hijau-tua dark:text-hijau-segar">45 Hari</span>
          </motion.h2>
          <motion.p
            className="text-base text-gelap/60 dark:text-white/60"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            Setiap langkah, setiap momen — tercatat dalam perjalanan pengabdian kami.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-kapur-gelap dark:bg-white/10 -translate-x-1/2"
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' as any, delay: 0.3 }}
          />

          <div className="space-y-8 md:space-y-0">
            {timelineEvents.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              const cfg = CATEGORY_CONFIG[event.category] ?? CATEGORY_CONFIG['sosial-budaya'];
              const isFirst = idx === 0;
              const isLast = idx === timelineEvents.length - 1;

              return (
                <motion.div
                  key={event.id}
                  className="relative flex items-start md:items-center"
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.06, ease: 'easeOut' as any }}
                >
                  {/* Mobile: left-aligned */}
                  <div className="md:hidden flex gap-6 w-full pl-16">
                    {/* Dot */}
                    <div className={`absolute left-8 top-3 h-4 w-4 rounded-full -translate-x-1/2 border-2 border-background dark:border-gelap shadow-md ${cfg.dot}`} />
                    {/* Card */}
                    <div className="flex-1 bg-kapur dark:bg-gelap-muda rounded-xl p-4 border border-kapur-gelap dark:border-white/8 shadow-sm">
                      <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${cfg.dot} text-white mb-2 inline-block`}>
                        {cfg.label}
                      </span>
                      <p className="text-xs text-gelap/50 dark:text-white/50 mb-1">{formatDate(event.date)}</p>
                      <h3 className="text-sm font-bold text-gelap dark:text-white mb-1">{event.title}</h3>
                      <p className="text-xs text-gelap/60 dark:text-white/55 leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Desktop: alternating */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-6 w-full items-center py-4">
                    {/* Left slot */}
                    {isLeft ? (
                      <div className="bg-kapur dark:bg-gelap-muda rounded-2xl p-5 border border-kapur-gelap dark:border-white/8 shadow-card hover:shadow-card-hover transition-shadow ml-auto max-w-sm w-full">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white inline-block mb-2 ${cfg.dot}`}>
                          {cfg.label}
                        </span>
                        <p className="text-xs text-gelap/50 dark:text-white/50 font-medium mb-1">{formatDate(event.date)}</p>
                        <h3 className="text-sm font-bold text-gelap dark:text-white mb-1.5">{event.title}</h3>
                        <p className="text-xs text-gelap/60 dark:text-white/55 leading-relaxed">{event.description}</p>
                      </div>
                    ) : <div />}

                    {/* Center dot */}
                    <div className="flex flex-col items-center">
                      <div className={`h-5 w-5 rounded-full border-2 border-background dark:border-gelap shadow-md z-10 ${cfg.dot} ${(isFirst || isLast) ? 'scale-125' : ''}`} />
                    </div>

                    {/* Right slot */}
                    {!isLeft ? (
                      <div className="bg-kapur dark:bg-gelap-muda rounded-2xl p-5 border border-kapur-gelap dark:border-white/8 shadow-card hover:shadow-card-hover transition-shadow mr-auto max-w-sm w-full">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white inline-block mb-2 ${cfg.dot}`}>
                          {cfg.label}
                        </span>
                        <p className="text-xs text-gelap/50 dark:text-white/50 font-medium mb-1">{formatDate(event.date)}</p>
                        <h3 className="text-sm font-bold text-gelap dark:text-white mb-1.5">{event.title}</h3>
                        <p className="text-xs text-gelap/60 dark:text-white/55 leading-relaxed">{event.description}</p>
                      </div>
                    ) : <div />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
