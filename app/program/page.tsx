import type { Metadata } from 'next';
import { Container, SectionHeader } from '@/components/ui';
import { Leaf, Heart, Monitor, Smartphone, CheckCircle2, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Program Kerja – KKN Kelompok 27',
  description:
    'Program kerja KKN Kelompok 27 Universitas Bengkulu di Desa Lokasi Baru — bidang lingkungan, kesehatan, teknologi informasi, dan literasi digital.',
};

const programBidang = [
  {
    icon: Leaf,
    color: 'emerald',
    label: 'Bidang Lingkungan',
    emoji: '🌱',
    programs: [
      {
        title: 'Pembuatan Ekoenzim',
        description:
          'Program pemanfaatan limbah organik rumah tangga menjadi ekoenzim yang bermanfaat sebagai cairan pembersih alami, pupuk organik, serta pengurai limbah ramah lingkungan.',
        goals: [
          'Mengurangi limbah organik rumah tangga.',
          'Meningkatkan kesadaran masyarakat terhadap pengelolaan sampah.',
          'Menghasilkan produk ramah lingkungan yang bernilai guna.',
        ],
      },
      {
        title: 'Pemetaan Kondisi Pengelolaan Sampah Desa',
        description:
          'Kegiatan pemetaan dilakukan untuk mengidentifikasi kondisi pengelolaan sampah serta titik-titik yang berpotensi menjadi sumber pencemaran lingkungan di desa.',
        goals: [
          'Mengidentifikasi permasalahan pengelolaan sampah.',
          'Menyediakan data pendukung untuk penyusunan solusi.',
          'Mendukung pengelolaan lingkungan yang lebih efektif.',
        ],
      },
      {
        title: 'Gotong Royong Rutin',
        description:
          'Kegiatan kerja bakti bersama masyarakat yang dilaksanakan secara rutin untuk menjaga kebersihan lingkungan serta mempererat hubungan sosial antara mahasiswa dan masyarakat.',
        goals: [
          'Menjaga kebersihan lingkungan desa.',
          'Meningkatkan partisipasi masyarakat.',
          'Memperkuat budaya gotong royong.',
        ],
      },
      {
        title: 'Pembentukan dan Edukasi Bank Sampah',
        description:
          'Program edukasi dan pendampingan masyarakat dalam memilah serta mengelola sampah agar memiliki nilai ekonomis dan dapat dimanfaatkan kembali.',
        goals: [
          'Mengurangi volume sampah rumah tangga.',
          'Meningkatkan nilai ekonomi sampah.',
          'Menumbuhkan budaya pengelolaan sampah yang berkelanjutan.',
        ],
      },
    ],
  },
  {
    icon: Heart,
    color: 'rose',
    label: 'Bidang Kesehatan',
    emoji: '❤️',
    programs: [
      {
        title: 'Penyuluhan Pola Hidup Bersih dan Sehat (PHBS) di Sekolah',
        description:
          'Penyuluhan kepada peserta didik mengenai pentingnya menjaga kebersihan diri, lingkungan, dan menerapkan perilaku hidup sehat dalam kehidupan sehari-hari.',
        goals: [
          'Menanamkan kebiasaan hidup sehat sejak dini.',
          'Meningkatkan kesadaran siswa terhadap pentingnya kebersihan.',
          'Menciptakan lingkungan sekolah yang sehat.',
        ],
      },
      {
        title: 'Penyuluhan Hipertensi (Tekanan Darah Tinggi)',
        description:
          'Kegiatan edukasi kepada masyarakat mengenai penyebab, faktor risiko, pencegahan, dan pentingnya deteksi dini hipertensi.',
        goals: [
          'Meningkatkan kesadaran masyarakat tentang hipertensi.',
          'Mendorong pemeriksaan kesehatan secara berkala.',
          'Mengurangi risiko komplikasi penyakit.',
        ],
      },
      {
        title: 'Penyuluhan Diabetes Mellitus',
        description:
          'Penyuluhan mengenai diabetes mellitus yang mencakup faktor risiko, pencegahan, serta cara pengendalian kadar gula darah melalui pola hidup sehat.',
        goals: [
          'Memberikan edukasi mengenai diabetes mellitus.',
          'Mendorong penerapan pola hidup sehat.',
          'Mengurangi risiko penyakit diabetes.',
        ],
      },
    ],
  },
  {
    icon: Monitor,
    color: 'blue',
    label: 'Bidang Teknologi Informasi',
    emoji: '💻',
    programs: [
      {
        title: 'Digitalisasi Informasi Pengelolaan dan Pengaduan Sampah melalui Website Desa',
        description:
          'Program pengembangan sistem informasi berbasis website yang digunakan untuk menyampaikan informasi pengelolaan sampah sekaligus menjadi sarana pengaduan masyarakat.',
        goals: [
          'Mempermudah akses informasi bagi masyarakat.',
          'Menyediakan media pengaduan berbasis digital.',
          'Mendukung transformasi digital desa.',
        ],
      },
    ],
  },
  {
    icon: Smartphone,
    color: 'violet',
    label: 'Bidang Pendidikan dan Literasi Digital',
    emoji: '📱',
    programs: [
      {
        title: 'Edukasi Penggunaan Gadget Secara Bijak',
        description:
          'Program edukasi kepada anak-anak dan remaja mengenai penggunaan gadget secara sehat, aman, dan bertanggung jawab.',
        goals: [
          'Meningkatkan literasi digital generasi muda.',
          'Mengurangi dampak negatif penggunaan gadget berlebihan.',
          'Mendorong penggunaan teknologi secara produktif.',
        ],
      },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; badge: string; icon: string; dot: string }> = {
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/10',
    border: 'border-emerald-200 dark:border-emerald-800/40',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    icon: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    dot: 'bg-emerald-500',
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-900/10',
    border: 'border-rose-200 dark:border-rose-800/40',
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
    icon: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300',
    dot: 'bg-rose-500',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/10',
    border: 'border-blue-200 dark:border-blue-800/40',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    icon: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    dot: 'bg-blue-500',
  },
  violet: {
    bg: 'bg-violet-50 dark:bg-violet-900/10',
    border: 'border-violet-200 dark:border-violet-800/40',
    badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
    icon: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
    dot: 'bg-violet-500',
  },
};

export default function ProgramsPage() {
  return (
    <main className="pt-28 pb-20">
      <Container>
        <SectionHeader
          title="Program Kerja"
          subtitle="Seluruh program yang kami rancang dan laksanakan bersama warga Desa Lokasi Baru"
        />

        {/* Intro */}
        <p className="max-w-3xl mx-auto text-center text-gelap/70 dark:text-white/65 leading-relaxed mb-16">
          Program kerja KKN Kelompok 27 disusun berdasarkan hasil observasi dan identifikasi kebutuhan masyarakat Desa Lokasi Baru. Program-program yang dilaksanakan berfokus pada peningkatan kualitas lingkungan, kesehatan masyarakat, literasi digital, dan pemberdayaan masyarakat desa.
        </p>

        {/* Bidang */}
        <div className="space-y-16">
          {programBidang.map((bidang) => {
            const colors = colorMap[bidang.color];
            const Icon = bidang.icon;
            return (
              <section key={bidang.label}>
                {/* Bidang header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${colors.icon}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${colors.badge}`}>
                      {bidang.emoji} {bidang.label}
                    </span>
                  </div>
                </div>

                {/* Program cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {bidang.programs.map((prog) => (
                    <article
                      key={prog.title}
                      className={`rounded-2xl border p-6 ${colors.bg} ${colors.border} hover:shadow-card transition-all duration-300`}
                    >
                      <h3 className="text-base font-bold text-gelap dark:text-white mb-3 leading-snug">
                        {prog.title}
                      </h3>
                      <p className="text-sm text-gelap/65 dark:text-white/60 leading-relaxed mb-5">
                        {prog.description}
                      </p>
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="h-3.5 w-3.5 text-gelap/40 dark:text-white/40" />
                          <span className="text-xs font-bold uppercase tracking-wider text-gelap/40 dark:text-white/40">Tujuan</span>
                        </div>
                        <ul className="space-y-2">
                          {prog.goals.map((goal) => (
                            <li key={goal} className="flex items-start gap-2.5">
                              <CheckCircle2 className="h-4 w-4 text-hijau-terang shrink-0 mt-0.5" />
                              <span className="text-sm text-gelap/70 dark:text-white/65">{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Harapan Program */}
        <section className="mt-20 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-hijau-tua/20 bg-hijau-tua/5 dark:bg-hijau-tua/10 p-8 text-center">
            <h2 className="text-2xl font-bold text-gelap dark:text-white mb-4">Harapan Program</h2>
            <p className="text-gelap/75 dark:text-white/70 leading-relaxed mb-4">
              Melalui seluruh program kerja yang telah dirancang dan dilaksanakan, KKN Kelompok 27 Universitas Bengkulu berharap dapat memberikan manfaat nyata bagi masyarakat Desa Lokasi Baru. Program-program tersebut diharapkan mampu meningkatkan kualitas lingkungan, kesehatan masyarakat, literasi digital, serta memperkuat partisipasi masyarakat dalam pembangunan desa secara berkelanjutan.
            </p>
            <p className="text-gelap/75 dark:text-white/70 leading-relaxed mb-6">
              Dengan semangat kebersamaan dan pengabdian, mahasiswa KKN Kelompok 27 berkomitmen untuk menjadi mitra masyarakat dalam mewujudkan desa yang lebih sehat, bersih, cerdas, dan berdaya saing.
            </p>
            <blockquote className="text-xl font-black text-hijau-tua dark:text-hijau-segar italic">
              "Bersatu dalam karya, tumbuh bersama masyarakat."
            </blockquote>
          </div>
        </section>
      </Container>
    </main>
  );
}
