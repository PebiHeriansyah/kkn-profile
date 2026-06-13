'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, Video, ExternalLink } from 'lucide-react';
import { NAV_ITEMS, SITE_NAME, SITE_DESCRIPTION, CONTACT_INFO, UNIVERSITY, KKN_PERIOD } from '@/lib/constants';

const footerLinks = [
  {
    title: 'Navigasi',
    links: NAV_ITEMS.slice(0, 5),
  },
  {
    title: 'Informasi',
    links: NAV_ITEMS.slice(5),
  },
];

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <footer className="bg-gelap dark:bg-black text-white">
      {/* Top section */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12"
        ref={ref}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-3 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emas text-gelap text-xs font-black shadow-glow-emas">
                KKN
              </span>
              <span className="text-lg font-extrabold text-white">{SITE_NAME}</span>
            </Link>
            <p className="text-sm text-white/55 leading-relaxed max-w-sm mb-6">
              {SITE_DESCRIPTION}
            </p>

            {/* University badge */}
            <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 mb-6">
              <div className="h-8 w-8 rounded-lg bg-hijau-tua/50 flex items-center justify-center shrink-0">
                <span className="text-xs font-black text-emas">UNIB</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white">{UNIVERSITY.name}</p>
                <p className="text-xs text-white/45">{KKN_PERIOD.batch} · {KKN_PERIOD.year}</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, href: CONTACT_INFO.instagram, label: 'Instagram' },
                { icon: Video, href: CONTACT_INFO.youtube, label: 'YouTube' },
                { icon: ExternalLink, href: UNIVERSITY.website, label: 'Website UNIB' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 hover:bg-white/16 border border-white/8 hover:border-white/20 text-white/60 hover:text-white transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav links */}
          {footerLinks.map(({ title, links }, gi) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + gi * 0.08 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 mb-5">{title}</h3>
              <ul className="space-y-3">
                {links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 mb-5">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-emas shrink-0 mt-0.5" />
                <span className="text-sm text-white/60 leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emas shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm text-white/60 hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emas shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-white/60 hover:text-white transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {SITE_NAME}. Hak cipta dilindungi.
          </p>
          <p className="text-xs text-white/35">
            Dibuat dengan ❤️ oleh Tim KKN {UNIVERSITY.shortName}
          </p>
        </div>
      </div>
    </footer>
  );
}
