'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const smoothBgY = useSpring(bgY, { stiffness: 50, damping: 20 });
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative overflow-hidden" id="contact">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: smoothBgY }}>
        <Image
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop"
          alt="Bergabung bersama kami"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hijau-tua/95 via-hijau-tua/85 to-hijau-muda/70" />
        <div className="absolute inset-0 bg-gelap/30" />
      </motion.div>

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
        <motion.div
          className="inline-flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="h-px w-8 bg-emas" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-emas">
            Bergabung Bersama Kami
          </span>
          <span className="h-px w-8 bg-emas" />
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Bersama, Kita Wujudkan{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emas to-emas-muda">
            Indonesia Lebih Baik.
          </span>
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Jadilah bagian dari gerakan perubahan nyata. Hubungi tim kami, ikuti perkembangan program, 
          atau berikan dukungan untuk keberlanjutan pengabdian masyarakat.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            href="/kontak"
            className="group inline-flex items-center gap-2 bg-emas hover:bg-emas-muda text-gelap font-black px-8 py-4 rounded-full text-sm shadow-glow-emas hover:shadow-[0_0_40px_rgba(212,168,67,0.5)] transition-all duration-300"
          >
            Hubungi Kami
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 bg-white/12 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full border border-white/25 hover:border-white/40 text-sm transition-all duration-300"
          >
            Lihat Galeri
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          {[
            { label: 'Instagram', href: 'https://instagram.com/kkn_unib' },
            { label: 'YouTube', href: 'https://youtube.com/@kkn_unib' },
            { label: 'Website UNIB', href: 'https://unib.ac.id' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-white/50 hover:text-white transition-colors tracking-wider uppercase"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
