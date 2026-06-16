'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { NAV_ITEMS, SITE_NAME, CONTACT_INFO } from '@/lib/constants';

const footerLinks = [
  { title: 'Navigasi', links: NAV_ITEMS.slice(0, 4) },
  { title: 'Informasi', links: NAV_ITEMS.slice(4) },
];

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <footer className="bg-black text-white">

      {/* Content */}
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Nav columns */}
          {footerLinks.map(({ title, links }, gi) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: gi * 0.06 }}
            >
              <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40 mb-3">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-white/60 hover:text-white transition-colors duration-200"
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
            className="col-span-2"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40 mb-3">
              Kontak
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-emas-muda shrink-0 mt-0.5" />
                <span className="text-[13px] text-white/60 leading-relaxed">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 text-emas-muda shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-[13px] text-white/60 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-emas-muda shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-[13px] text-white/60 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-[11px] text-white/35 text-center">
            © {new Date().getFullYear()} {SITE_NAME}. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
