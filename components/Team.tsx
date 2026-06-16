'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Star } from 'lucide-react';
import { teamMembers, supervisor } from '@/lib/data/team';

// Unsplash avatars by gender/style for realistic placeholder photos
const MEMBER_PHOTOS: Record<string, string> = {
  'member-001': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&facepad=2&faces=1',
  'member-002': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
  'member-003': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
  'member-004': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
  'member-005': 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop',
  'member-006': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop',
  'member-007': 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=400&auto=format&fit=crop',
  'member-008': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
  'member-009': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  'member-010': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  'member-011': 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop',
  'member-012': 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=400&auto=format&fit=crop',
};

const ROLE_LABELS: Record<string, string> = {
  ketua: 'Ketua Kelompok',
  sekretaris: 'Sekretaris',
  bendahara: 'Bendahara',
  acara: 'Divisi Acara',
  humas: 'Divisi Humas',
  pdd: 'Divisi PDD',
  anggota: 'Anggota',
};

const ROLE_BADGE: Record<string, string> = {
  ketua: 'bg-emas/15 text-emas-tua border-emas/30 dark:bg-emas/20 dark:text-emas dark:border-emas/40',
  sekretaris: 'bg-hijau-tua/10 text-hijau-tua border-hijau-tua/20 dark:bg-hijau-segar/15 dark:text-hijau-segar dark:border-hijau-segar/30',
  bendahara: 'bg-hijau-tua/10 text-hijau-tua border-hijau-tua/20 dark:bg-hijau-segar/15 dark:text-hijau-segar dark:border-hijau-segar/30',
  acara: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/40',
  humas: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700/40',
  pdd: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700/40',
  anggota: 'bg-kapur-gelap text-tanah border-kapur-gelap dark:bg-white/8 dark:text-white/60 dark:border-white/10',
};

export function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const leadership = teamMembers.filter((m) => ['ketua', 'sekretaris', 'bendahara'].includes(m.role));
  const members = teamMembers.filter((m) => !['ketua', 'sekretaris', 'bendahara', 'dpl'].includes(m.role));

  return (
    <section className="bg-background section-padding" id="team">
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
              Tim KKN
            </span>
            <span className="h-px w-8 bg-emas" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-black text-gelap dark:text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Orang-Orang di{' '}
            <span className="text-hijau-tua dark:text-hijau-segar">Balik Perubahan</span>
          </motion.h2>
          <motion.p
            className="text-base text-gelap/60 dark:text-white/60"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            {teamMembers.length} mahasiswa dari berbagai fakultas, bersatu dalam satu misi pengabdian.
          </motion.p>
        </div>

        {/* Leadership — big cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {leadership.map((member, idx) => (
            <motion.div
              key={member.id}
              className="group relative bg-kapur dark:bg-gelap-muda rounded-2xl overflow-hidden border border-kapur-gelap dark:border-white/8 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-400"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.08 }}
            >
              {/* Image area */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-hijau-tua/10 to-emas/10">
                <Image
                  src={MEMBER_PHOTOS[member.id] || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=1B4332&color=fff`}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kapur dark:from-gelap-muda via-transparent to-transparent" />

                {/* Role badge on image */}
                {member.role === 'ketua' && (
                  <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-emas shadow-glow-emas">
                    <Star className="h-4 w-4 text-gelap fill-gelap" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <span className={`inline-flex items-center text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-3 ${ROLE_BADGE[member.role]}`}>
                  {ROLE_LABELS[member.role]}
                </span>
                <h3 className="font-bold text-gelap dark:text-white text-base mb-0.5">{member.name}</h3>
                <p className="text-xs text-gelap/55 dark:text-white/50 font-medium flex items-center gap-1.5">
                  <GraduationCap className="h-3.5 w-3.5 shrink-0" />
                  {member.faculty}
                </p>
                {member.quote && (
                  <blockquote className="mt-3 text-xs italic text-gelap/60 dark:text-white/55 border-l-2 border-emas/40 pl-3 leading-relaxed">
                    &ldquo;{member.quote}&rdquo;
                  </blockquote>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Members — small cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {members.map((member, idx) => (
            <motion.div
              key={member.id}
              className="group flex flex-col items-center text-center p-4 rounded-2xl bg-kapur dark:bg-gelap-muda border border-kapur-gelap dark:border-white/8 hover:border-hijau-tua/30 dark:hover:border-hijau-segar/30 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.04 }}
            >
              <div className="relative h-16 w-16 rounded-full overflow-hidden mb-3 ring-2 ring-kapur-gelap dark:ring-white/10 group-hover:ring-hijau-tua/40 dark:group-hover:ring-hijau-segar/40 transition-all">
                <Image
                  src={MEMBER_PHOTOS[member.id] || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=200&background=2D6A4F&color=fff`}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
              <h4 className="text-xs font-bold text-gelap dark:text-white leading-tight mb-0.5 line-clamp-2">{member.name}</h4>
              <p className="text-xs text-gelap/50 dark:text-white/45 line-clamp-1 mb-2">{member.major}</p>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border mb-1.5 ${ROLE_BADGE[member.role] || ROLE_BADGE['anggota']}`}>
                {ROLE_LABELS[member.role] || 'Anggota'}
              </span>
              <span className="text-xs text-gelap/45 dark:text-white/40 font-mono">
                {member.npm}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
