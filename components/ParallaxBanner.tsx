'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Image from 'next/image';

interface ParallaxBannerProps {
  imageUrl: string;
  imageAlt: string;
  headline: string;
  subline?: string;
  overlayColor?: string;
  height?: 'sm' | 'md' | 'lg';
}

export function ParallaxBanner({
  imageUrl,
  imageAlt,
  headline,
  subline,
  overlayColor = 'from-hijau-tua/90 via-hijau-tua/65 to-transparent',
  height = 'md',
}: ParallaxBannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const smoothBgY = useSpring(bgY, { stiffness: 50, damping: 20 });
  const smoothContentY = useSpring(contentY, { stiffness: 50, damping: 20 });

  const inView = useInView(ref, { once: true, margin: '-50px' });

  const heights = {
    sm: 'h-56 md:h-72',
    md: 'h-72 md:h-96',
    lg: 'h-96 md:h-[500px]',
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${heights[height]}`}>
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: smoothBgY }}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-gelap/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style={{ y: smoothContentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' as any }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            {headline}
          </h2>
          {subline && (
            <p className="text-base md:text-lg text-white/75 font-light">{subline}</p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
