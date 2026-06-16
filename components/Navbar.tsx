'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/constants';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const solid = !isHome || scrolled;

  return (
    <>
      <motion.header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          solid
            ? 'bg-background/95 backdrop-blur-xl shadow-sm border-b border-kapur-gelap/50 dark:border-white/5'
            : 'bg-transparent border-b border-transparent',
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' as any }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex h-16 items-center justify-between lg:h-20" aria-label="Navigasi utama">
            {/* Logo */}
            <Link href="/" className="flex items-center transition-opacity hover:opacity-85">
              <Image
                src="/images/logo/logo.png"
                alt="Logo KKN"
                width={120}
                height={48}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Links */}
            <ul className="hidden items-center gap-0.5 lg:flex">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                        active
                          ? solid
                            ? 'text-hijau-tua bg-hijau-tua/8 dark:text-hijau-segar dark:bg-hijau-segar/10'
                            : 'text-white bg-white/15'
                          : solid
                            ? 'text-gelap/65 hover:text-hijau-tua hover:bg-hijau-tua/6 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/5'
                            : 'text-white/75 hover:text-white hover:bg-white/10',
                      )}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-emas"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle className={solid ? 'text-gelap dark:text-white' : 'text-white'} />
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  'lg:hidden p-2 rounded-lg transition-colors',
                  solid ? 'text-gelap dark:text-white hover:bg-kapur-gelap dark:hover:bg-white/10' : 'text-white hover:bg-white/10',
                )}
                aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-72 bg-background border-l border-kapur-gelap dark:border-white/10 shadow-2xl lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between p-5 border-b border-kapur-gelap dark:border-white/10">
                <span className="font-bold text-hijau-tua dark:text-white">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-kapur-gelap dark:hover:bg-white/10 transition-colors"
                >
                  <X className="h-5 w-5 text-gelap dark:text-white" />
                </button>
              </div>
              <nav className="p-4">
                <ul className="space-y-1">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all',
                          pathname === item.href
                            ? 'bg-hijau-tua text-white shadow-md'
                            : 'text-gelap/70 dark:text-white/70 hover:bg-kapur-gelap dark:hover:bg-white/8 hover:text-gelap dark:hover:text-white',
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
