'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, MapPin, Calendar, Users } from 'lucide-react';
import { village } from '@/lib/data/village';
import { KKN_PERIOD, UNIVERSITY } from '@/lib/constants';

const stats = [
  { icon: Calendar, value: '45', label: 'Hari Pengabdian' },
  { icon: Users, value: '9', label: 'Mahasiswa Aktif' },
  { icon: MapPin, value: '9+', label: 'Program Kerja' },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const smoothBgY = useSpring(bgY, { stiffness: 60, damping: 20 });
  const smoothTextY = useSpring(textY, { stiffness: 60, damping: 20 });

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: smoothBgY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop"
          alt="Lanskap Indonesia — Desa Lokasi Baru, Bengkulu"
          fill
          priority
          className="object-cover object-center scale-110"
          sizes="100vw"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-gelap/90 via-gelap/70 to-gelap/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gelap/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-hijau-tua/30 mix-blend-multiply" />
      </motion.div>

      {/* Noise texture */}
      <div className="absolute inset-0 z-[1] opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full"
        style={{ y: smoothTextY, opacity }}
      >
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emas opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emas"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-emas">
              {KKN_PERIOD.batch} · {UNIVERSITY.shortName} · {KKN_PERIOD.year}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.02] tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Membangun{' '}
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emas via-emas-muda to-white">
                Desa Bangsa.
              </span>
              {/* Underline accent */}
              <motion.span
                className="absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-emas to-transparent"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 0.9 }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed max-w-2xl mb-10 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Kuliah Kerja Nyata <strong className="text-white font-semibold">{UNIVERSITY.name}</strong> di{' '}
            <strong className="text-white font-semibold">{village.name}</strong>,{' '}
            {village.district} — bersinergi membangun komunitas melalui inovasi dan pengabdian selama{' '}
            <strong className="text-emas font-semibold">{KKN_PERIOD.duration}</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Link
              href="/program"
              className="group inline-flex items-center gap-2 bg-emas text-gelap font-bold px-7 py-3.5 rounded-full shadow-glow-emas hover:bg-emas-muda hover:shadow-[0_0_40px_rgba(212,168,67,0.5)] transition-all duration-300 text-sm"
            >
              Jelajahi Program
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-7 py-3.5 rounded-full border border-white/25 hover:border-white/40 transition-all duration-300 text-sm"
            >
              Tentang KKN
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="flex flex-wrap gap-6 sm:gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <Icon className="h-4 w-4 text-emas" />
                </div>
                <div>
                  <p className="text-xl font-black text-white leading-none">{value}</p>
                  <p className="text-xs text-white/55 font-medium mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase font-medium">Gulir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-5 w-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
