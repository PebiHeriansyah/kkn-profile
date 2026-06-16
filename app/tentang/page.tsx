import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { CheckCircle2, Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang KKN Kelompok 27',
  description:
    'Tentang KKN Kelompok 27 Universitas Bengkulu Periode 108 — visi, misi, profil kelompok, dan informasi kegiatan pengabdian masyarakat di Desa Lokasi Baru, Kecamatan Air Periukan, Kabupaten Seluma.',
};

const missions = [
  'Mengimplementasikan ilmu pengetahuan yang diperoleh selama perkuliahan dalam kegiatan pengabdian kepada masyarakat.',
  'Meningkatkan kesadaran masyarakat terhadap pentingnya kesehatan, pendidikan, dan lingkungan yang berkelanjutan.',
  'Mendorong pemanfaatan teknologi informasi dalam mendukung pelayanan dan pembangunan desa.',
  'Menjalin hubungan yang harmonis antara mahasiswa, pemerintah desa, dan masyarakat.',
  'Memberikan solusi yang sesuai dengan kebutuhan masyarakat berdasarkan hasil observasi lapangan.',
];

const profileData = [
  { label: 'Nama Kelompok', value: 'KKN Kelompok 27' },
  { label: 'Universitas', value: 'Universitas Bengkulu' },
  { label: 'Periode', value: 'KKN Periode 108' },
  { label: 'Lokasi KKN', value: 'Desa Lokasi Baru' },
  { label: 'Kecamatan', value: 'Air Periukan' },
  { label: 'Kabupaten', value: 'Seluma' },
  { label: 'Provinsi', value: 'Bengkulu' },
  { label: 'Durasi Kegiatan', value: '45 Hari' },
  { label: 'Periode Pelaksanaan', value: '17 Juni – 31 Juli 2026' },
  { label: 'Jumlah Anggota', value: '9 Mahasiswa' },
];

export default function AboutPage() {
  return (
    <main className="pt-28 pb-24 bg-kapur dark:bg-gelap">
      <Container>
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Tentang Kami */}
          <section>
            <h2 className="text-xl font-bold text-gelap dark:text-white mb-4 pb-3 border-b border-kapur-gelap dark:border-white/8">
              Tentang Kami
            </h2>
            <div className="space-y-4 text-[15px] text-gelap/70 dark:text-white/65 leading-relaxed">
              <p>
                <strong className="text-gelap dark:text-white font-semibold">
                  KKN Kelompok 27 Universitas Bengkulu
                </strong>{' '}
                merupakan kelompok mahasiswa peserta Kuliah Kerja Nyata (KKN) Periode 108 yang
                melaksanakan kegiatan pengabdian kepada masyarakat di{' '}
                <strong className="text-gelap dark:text-white font-semibold">
                  Desa Lokasi Baru, Kecamatan Air Periukan, Kabupaten Seluma, Provinsi Bengkulu
                </strong>.
              </p>
              <p>
                Kuliah Kerja Nyata (KKN) merupakan salah satu bentuk implementasi Tri Dharma Perguruan
                Tinggi yang memberikan kesempatan kepada mahasiswa untuk mengaplikasikan ilmu
                pengetahuan dan keterampilan yang diperoleh selama perkuliahan dalam kehidupan
                bermasyarakat.
              </p>
              <p>
                Selama{' '}
                <strong className="text-gelap dark:text-white font-semibold">45 hari</strong>{' '}
                pelaksanaan KKN, mahasiswa bersama masyarakat berkolaborasi dalam berbagai kegiatan
                yang bertujuan meningkatkan kualitas hidup masyarakat melalui program di bidang
                lingkungan, kesehatan, pendidikan, teknologi informasi, dan pemberdayaan masyarakat.
              </p>
            </div>
          </section>

          {/* Visi */}
          <section>
            <h2 className="text-xl font-bold text-gelap dark:text-white mb-4 pb-3 border-b border-kapur-gelap dark:border-white/8">
              Visi
            </h2>
            <div className="rounded-2xl border border-hijau-tua/20 bg-hijau-tua/5 dark:bg-hijau-tua/10 p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-hijau-tua/12 dark:bg-hijau-tua/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Eye className="h-5 w-5 text-hijau-tua dark:text-hijau-segar" />
                </div>
                <p className="text-[15px] text-gelap/80 dark:text-white/75 leading-relaxed italic">
                  &ldquo;Menjadi kelompok pengabdian yang mampu memberikan kontribusi nyata, inovatif,
                  dan berkelanjutan bagi masyarakat melalui pemberdayaan, edukasi, serta penerapan
                  ilmu pengetahuan dan teknologi.&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* Misi */}
          <section>
            <h2 className="text-xl font-bold text-gelap dark:text-white mb-4 pb-3 border-b border-kapur-gelap dark:border-white/8">
              Misi
            </h2>
            <ul className="space-y-3">
              {missions.map((mission, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-hijau-terang shrink-0 mt-0.5" />
                  <span className="text-[15px] text-gelap/70 dark:text-white/65 leading-relaxed">
                    {mission}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Profil Kelompok */}
          <section>
            <h2 className="text-xl font-bold text-gelap dark:text-white mb-4 pb-3 border-b border-kapur-gelap dark:border-white/8">
              Profil Kelompok
            </h2>
            <div className="rounded-2xl border border-kapur-gelap dark:border-white/8 overflow-hidden">
              {profileData.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`grid grid-cols-2 gap-4 px-5 py-3.5 text-sm ${
                    i % 2 === 0
                      ? 'bg-kapur dark:bg-white/[0.03]'
                      : 'bg-background dark:bg-transparent'
                  } ${i !== profileData.length - 1 ? 'border-b border-kapur-gelap dark:border-white/8' : ''}`}
                >
                  <span className="font-medium text-gelap/55 dark:text-white/45">{label}</span>
                  <span className="font-semibold text-gelap dark:text-white">{value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Kutipan */}
          <section className="text-center pt-4">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-emas" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-emas-tua dark:text-emas">Semangat Kami</span>
              <span className="h-px w-8 bg-emas" />
            </div>
            <blockquote className="text-2xl font-black text-hijau-tua dark:text-hijau-segar italic leading-snug">
              &ldquo;Bersatu dalam karya, tumbuh bersama masyarakat.&rdquo;
            </blockquote>
            <p className="mt-3 text-sm text-gelap/45 dark:text-white/40 font-medium">
              — KKN Kelompok 27, Universitas Bengkulu
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
