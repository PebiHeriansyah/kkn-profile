import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { MapPin, Phone, Mail, Globe, Video, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, UNIVERSITY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Kontak',
  description:
    'Hubungi KKN Kelompok 27 Universitas Bengkulu — alamat posko di Desa Lokasi Baru, Kab. Seluma, email, dan media sosial.',
};

const contactItems = [
  {
    icon: MapPin,
    label: 'Alamat Posko',
    value: CONTACT_INFO.address,
    href: undefined,
    iconBg: 'bg-emerald-50 dark:bg-emerald-900/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
    iconBg: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    iconBg: 'bg-violet-50 dark:bg-violet-900/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
];

const socialItems = [
  {
    icon: Globe,
    label: 'Instagram',
    handle: '@kkn27_unib',
    href: CONTACT_INFO.instagram,
    iconBg: 'bg-pink-50 dark:bg-pink-900/20',
    iconColor: 'text-pink-600 dark:text-pink-400',
  },
  {
    icon: Video,
    label: 'YouTube',
    handle: '@kkn27_unib',
    href: CONTACT_INFO.youtube,
    iconBg: 'bg-red-50 dark:bg-red-900/20',
    iconColor: 'text-red-600 dark:text-red-400',
  },
  {
    icon: ExternalLink,
    label: 'Website UNIB',
    handle: 'unib.ac.id',
    href: UNIVERSITY.website,
    iconBg: 'bg-hijau-tua/8 dark:bg-hijau-segar/10',
    iconColor: 'text-hijau-tua dark:text-hijau-segar',
  },
];

export default function ContactPage() {
  return (
    <main className="pt-28 pb-24 bg-kapur dark:bg-gelap">
      <Container>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Informasi Kontak */}
          <section>
            <h2 className="text-base font-bold text-gelap dark:text-white mb-4 pb-3 border-b border-kapur-gelap dark:border-white/8 uppercase tracking-wider text-xs">
              Informasi Kontak
            </h2>
            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href, iconBg, iconColor }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-xl border border-kapur-gelap dark:border-white/8 bg-background dark:bg-white/[0.03] p-4"
                >
                  <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
                    <Icon className={`h-4 w-4 ${iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-gelap/40 dark:text-white/35 mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className={`text-sm font-medium ${iconColor} hover:underline break-all`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gelap dark:text-white leading-relaxed">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Media Sosial */}
          <section>
            <h2 className="text-base font-bold text-gelap dark:text-white mb-4 pb-3 border-b border-kapur-gelap dark:border-white/8 uppercase tracking-wider text-xs">
              Media Sosial
            </h2>
            <div className="space-y-3">
              {socialItems.map(({ icon: Icon, label, handle, href, iconBg, iconColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-kapur-gelap dark:border-white/8 bg-background dark:bg-white/[0.03] p-4 hover:border-hijau-tua/25 dark:hover:border-hijau-segar/25 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
                    <Icon className={`h-4 w-4 ${iconColor}`} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-gelap/40 dark:text-white/35 mb-0.5">
                      {label}
                    </p>
                    <p className={`text-sm font-semibold ${iconColor}`}>{handle}</p>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-gelap/25 dark:text-white/25 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
