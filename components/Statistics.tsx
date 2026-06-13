'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { ImpactStat } from '@/lib/types';

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, active, duration]);
  return value;
}

function StatCard({ stat, delay }: { stat: ImpactStat; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(stat.value, inView);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center group"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' as any }}
    >
      <div className="relative mb-4">
        <p className="text-5xl md:text-6xl font-black text-white tabular-nums leading-none">
          {count.toLocaleString('id-ID')}
          <span className="text-emas text-3xl md:text-4xl">{stat.suffix}</span>
        </p>
        {/* Gold underline accent */}
        <motion.span
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emas to-transparent"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        />
      </div>
      <p className="text-sm font-semibold text-white/65 uppercase tracking-widest">{stat.label}</p>
    </motion.div>
  );
}

interface StatisticsProps {
  stats: ImpactStat[];
}

export function Statistics({ stats }: StatisticsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section className="relative overflow-hidden bg-hijau-tua py-16 md:py-20" ref={ref}>
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}
      />

      {/* Gold accent top line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emas to-transparent"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2 }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((stat, idx) => (
            <StatCard key={stat.id} stat={stat} delay={idx * 0.1} />
          ))}
        </div>
      </div>

      {/* Gold accent bottom line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emas to-transparent"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
    </section>
  );
}
