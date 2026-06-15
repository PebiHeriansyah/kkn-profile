import type { Metadata } from 'next';
import { Container, SectionHeader } from '@/components/ui';
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
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-900/20',
  },
];

const socialItems = [
  {
    icon: Globe,
    label: 'Instagram',
    handle: '@kkn27_unib',
    href: CONTACT_INFO.instagram,
    color: 'text-pink-600 dark:text-pink-400',
    bg: 'bg-pink-50 dark:bg-pink-900/20',
  },
  {
    icon: Video,
    label: 'YouTube',
    handle: '@kkn27_unib',
    href: CONTACT_INFO.youtube,
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-900/20',
  },
  {
    icon: ExternalLink,
    label: 'Website UNIB',
    handle: 'unib.ac.id',
    href: UNIVERSITY.website,
    color: 'text-hijau-tua dark:text-hijau-segar',
    bg: 'bg-hijau-tua/5 dark:bg-hijau-segar/10',
  },
];

export default function ContactPage() {
  return (
    <main className="pt-28 pb-20">
      <Container>
        <SectionHeader
          title="Hubungi Kami"
          subtitle="Punya pertanyaan atau ingin berkolaborasi? Silakan hubungi tim KKN Kelompok 27"
        />

        <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <section>
            <h2 className="text-xl font-bold text-gelap dark:text-white mb-6">Informasi Kontak</h2>
            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href, color, bg }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl border border-kapur-gelap dark:border-white/10 bg-kapur dark:bg-white/5 p-5"
                >
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${bg}`}>
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gelap/45 dark:text-white/40 mb-1">{label}</p>
                    {href ? (
                      <a href={href} className={`text-sm font-medium ${color} hover:underline break-all`}>
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gelap dark:text-white leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Social Media */}
          <section>
            <h2 className="text-xl font-bold text-gelap dark:text-white mb-6">Media Sosial</h2>
            <div className="space-y-4 mb-8">
              {socialItems.map(({ icon: Icon, label, handle, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-kapur-gelap dark:border-white/10 bg-kapur dark:bg-white/5 p-5 hover:border-hijau-tua/30 dark:hover:border-hijau-segar/30 hover:shadow-card transition-all duration-300 group"
                >
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${bg}`}>
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gelap/45 dark:text-white/40 mb-1">{label}</p>
                    <p className={`text-sm font-bold ${color}`}>{handle}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Tagline card */}
            <div className="rounded-2xl border border-hijau-tua/20 bg-hijau-tua/5 dark:bg-hijau-tua/10 p-6 text-center">
              <p className="text-sm text-gelap/70 dark:text-white/65 leading-relaxed mb-3">
                KKN Kelompok 27 melaksanakan kegiatan pengabdian masyarakat mulai{' '}
                <strong className="text-gelap dark:text-white">17 Juni – 31 Juli 2026</strong> di Desa Lokasi Baru, Kecamatan Air Periukan, Kabupaten Seluma, Bengkulu.
              </p>
              <p className="text-sm font-black text-hijau-tua dark:text-hijau-segar italic">
                "Bersatu dalam karya, tumbuh bersama masyarakat."
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
