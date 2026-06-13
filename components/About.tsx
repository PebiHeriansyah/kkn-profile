'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Map, Calendar, Users, ClipboardList, ArrowRight, CheckCircle2 } from 'lucide-react';
import { village } from '@/lib/data/village';
import { programs } from '@/lib/data/programs';
import { teamMembers } from '@/lib/data/team';
import { KKN_PERIOD, UNIVERSITY } from '@/lib/constants';

const pillars = [
  'Pengabdian berbasis kebutuhan nyata warga',
  'Kolaborasi lintas disiplin ilmu',
  'Inovasi teknologi untuk desa',
  'Pemberdayaan ekonomi lokal',
];

const stats = [
  { icon: Map, value: village.name, label: 'Lokasi KKN', sub: `${village.district}` },
  { icon: Calendar, value: '45 Hari', label: 'Durasi Pengabdian', sub: KKN_PERIOD.duration },
  { icon: Users, value: `${teamMembers.length}`, label: 'Mahasiswa', sub: 'Lintas Fakultas' },
  { icon: ClipboardList, value: `${programs.length}+`, label: 'Program Kerja', sub: 'Berbagai Bidang' },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-36" id="about">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pattern-grid opacity-30 dark:opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center" ref={ref}>

          {/* Left: Images */}
          <motion.div
            className="relative h-[480px] sm:h-[560px]"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' as any }}
          >
            {/* Background accent */}
            <div className="absolute -top-6 -left-6 w-3/4 h-3/4 rounded-3xl bg-hijau-tua/8 dark:bg-hijau-tua/20 -z-10" />

            {/* Main image */}
            <div className="absolute top-0 left-0 w-[75%] h-[78%] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
                alt="Kegiatan KKN bersama warga desa"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 75vw, 37vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gelap/30 to-transparent" />
            </div>

            {/* Secondary image */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-background dark:border-gelap-muda">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
                alt="Kolaborasi dengan warga"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 55vw, 27vw"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute top-8 right-4 glass rounded-2xl px-5 py-4 border border-white/20 shadow-xl dark:bg-black/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-3xl font-black text-emas leading-none">100%</p>
              <p className="text-xs font-bold text-white/80 uppercase tracking-wider mt-1">Dedikasi</p>
            </motion.div>

            {/* Dot pattern accent */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 pattern-dots opacity-40 text-hijau-tua" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {/* Eyebrow */}
            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-emas" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-emas-tua dark:text-emas">
                Pengabdian Masyarakat
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={item}
              className="text-4xl md:text-5xl font-black text-gelap dark:text-white leading-tight mb-5"
            >
              Bukan Sekadar Kuliah.{' '}
              <span className="text-hijau-tua dark:text-hijau-segar">Ini Aksi Nyata.</span>
            </motion.h2>

            {/* Body */}
            <motion.p
              variants={item}
              className="text-base lg:text-lg text-gelap/65 dark:text-white/65 leading-relaxed mb-8"
            >
              Kuliah Kerja Nyata (KKN) <strong className="text-gelap dark:text-white font-semibold">{UNIVERSITY.name}</strong>{' '}
              menempatkan {teamMembers.length} mahasiswa dari berbagai disiplin ilmu langsung di tengah masyarakat{' '}
              <strong className="text-gelap dark:text-white font-semibold">{village.name}</strong>{' '}
              untuk merancang dan melaksanakan program yang berdampak nyata.
            </motion.p>

            {/* Pillars */}
            <motion.ul variants={item} className="space-y-3 mb-10">
              {pillars.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-hijau-terang shrink-0 mt-0.5" />
                  <span className="text-sm text-gelap/75 dark:text-white/75 font-medium">{p}</span>
                </li>
              ))}
            </motion.ul>

            {/* Stats grid */}
            <motion.div variants={item} className="grid grid-cols-2 gap-4 mb-10">
              {stats.map(({ icon: Icon, value, label, sub }) => (
                <div
                  key={label}
                  className="rounded-xl border border-kapur-gelap dark:border-white/10 bg-kapur dark:bg-white/5 p-4 group hover:border-hijau-tua/30 hover:bg-hijau-tua/4 dark:hover:bg-white/8 transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="h-8 w-8 rounded-lg bg-hijau-tua/10 dark:bg-hijau-segar/15 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-hijau-tua dark:text-hijau-segar" />
                    </div>
                    <span className="text-xs text-gelap/50 dark:text-white/50 uppercase tracking-wider font-semibold">{label}</span>
                  </div>
                  <p className="text-xl font-black text-gelap dark:text-white leading-tight">{value}</p>
                  <p className="text-xs text-gelap/45 dark:text-white/45 mt-0.5 font-medium">{sub}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={item}>
              <Link
                href="/tentang"
                className="group inline-flex items-center gap-2 bg-hijau-tua hover:bg-hijau-muda text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-glow-hijau text-sm"
              >
                Baca Selengkapnya
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
