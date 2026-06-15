import type { Metadata } from 'next';
import { Container, SectionHeader } from '@/components/ui';
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
    <main className="pt-28 pb-20">
      <Container>
        <SectionHeader
          title="Tentang KKN Kelompok 27"
          subtitle="Mengenal lebih dekat KKN Kelompok 27 Universitas Bengkulu — pengabdian nyata untuk Desa Lokasi Baru"
        />

        {/* Tentang Kami */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gelap dark:text-white mb-4">Tentang Kami</h2>
          <div className="space-y-4 text-gelap/75 dark:text-white/70 leading-relaxed">
            <p>
              <strong className="text-gelap dark:text-white">KKN Kelompok 27 Universitas Bengkulu</strong> merupakan kelompok mahasiswa peserta Kuliah Kerja Nyata (KKN) Periode 108 yang melaksanakan kegiatan pengabdian kepada masyarakat di <strong className="text-gelap dark:text-white">Desa Lokasi Baru, Kecamatan Air Periukan, Kabupaten Seluma, Provinsi Bengkulu</strong>.
            </p>
            <p>
              Kuliah Kerja Nyata (KKN) merupakan salah satu bentuk implementasi Tri Dharma Perguruan Tinggi yang memberikan kesempatan kepada mahasiswa untuk mengaplikasikan ilmu pengetahuan dan keterampilan yang diperoleh selama perkuliahan dalam kehidupan bermasyarakat.
            </p>
            <p>
              Selama <strong className="text-gelap dark:text-white">45 hari</strong> pelaksanaan KKN, mahasiswa bersama masyarakat berkolaborasi dalam berbagai kegiatan yang bertujuan meningkatkan kualitas hidup masyarakat melalui program di bidang lingkungan, kesehatan, pendidikan, teknologi informasi, dan pemberdayaan masyarakat.
            </p>
            <p>
              KKN Kelompok 27 hadir dengan semangat pengabdian, kebersamaan, dan inovasi untuk memberikan kontribusi nyata bagi masyarakat serta mendukung pembangunan desa yang berkelanjutan.
            </p>
          </div>
        </section>

        {/* Visi */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="rounded-2xl border border-hijau-tua/20 bg-hijau-tua/5 dark:bg-hijau-tua/10 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-hijau-tua/15 flex items-center justify-center">
                <Eye className="h-5 w-5 text-hijau-tua dark:text-hijau-segar" />
              </div>
              <h2 className="text-2xl font-bold text-gelap dark:text-white">Visi</h2>
            </div>
            <p className="text-gelap/80 dark:text-white/75 leading-relaxed italic text-lg">
              "Menjadi kelompok pengabdian yang mampu memberikan kontribusi nyata, inovatif, dan berkelanjutan bagi masyarakat melalui pemberdayaan, edukasi, serta penerapan ilmu pengetahuan dan teknologi."
            </p>
          </div>
        </section>

        {/* Misi */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-emas/15 flex items-center justify-center">
              <Target className="h-5 w-5 text-emas-tua dark:text-emas" />
            </div>
            <h2 className="text-2xl font-bold text-gelap dark:text-white">Misi</h2>
          </div>
          <ul className="space-y-4">
            {missions.map((mission, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-hijau-terang shrink-0 mt-0.5" />
                <span className="text-gelap/75 dark:text-white/70 leading-relaxed">{mission}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Profil Kelompok */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gelap dark:text-white mb-6">Profil Kelompok</h2>
          <div className="rounded-2xl border border-kapur-gelap dark:border-white/10 overflow-hidden">
            {profileData.map(({ label, value }, i) => (
              <div
                key={label}
                className={`flex items-center gap-4 px-6 py-4 ${
                  i % 2 === 0 ? 'bg-kapur dark:bg-white/5' : 'bg-background dark:bg-gelap'
                }`}
              >
                <span className="w-48 text-sm font-semibold text-gelap/60 dark:text-white/50 shrink-0">{label}</span>
                <span className="text-sm font-medium text-gelap dark:text-white">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Kutipan */}
        <section className="max-w-2xl mx-auto text-center">
          <blockquote className="text-2xl font-black text-hijau-tua dark:text-hijau-segar italic leading-snug">
            "Bersatu dalam karya, tumbuh bersama masyarakat."
          </blockquote>
          <p className="mt-3 text-sm text-gelap/50 dark:text-white/40 font-medium">— KKN Kelompok 27, Universitas Bengkulu</p>
        </section>
      </Container>
    </main>
  );
}
