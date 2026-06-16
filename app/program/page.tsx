import type { Metadata } from 'next';
import { Container } from '@/components/ui';
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

const colorMap: Record<string, {
  bg: string; border: string; badge: string; badgeText: string;
  icon: string; iconText: string; dot: string; divider: string;
}> = {
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-800/40',
    badge: 'bg-emerald-100 dark:bg-emerald-900/50',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    icon: 'bg-emerald-100 dark:bg-emerald-900/40',
    iconText: 'text-emerald-600 dark:text-emerald-400',
    dot: 'bg-emerald-500',
    divider: 'bg-emerald-200 dark:bg-emerald-800/40',
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-950/30',
    border: 'border-rose-200 dark:border-rose-800/40',
    badge: 'bg-rose-100 dark:bg-rose-900/50',
    badgeText: 'text-rose-700 dark:text-rose-300',
    icon: 'bg-rose-100 dark:bg-rose-900/40',
    iconText: 'text-rose-600 dark:text-rose-400',
    dot: 'bg-rose-500',
    divider: 'bg-rose-200 dark:bg-rose-800/40',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-200 dark:border-blue-800/40',
    badge: 'bg-blue-100 dark:bg-blue-900/50',
    badgeText: 'text-blue-700 dark:text-blue-300',
    icon: 'bg-blue-100 dark:bg-blue-900/40',
    iconText: 'text-blue-600 dark:text-blue-400',
    dot: 'bg-blue-500',
    divider: 'bg-blue-200 dark:bg-blue-800/40',
  },
  violet: {
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    border: 'border-violet-200 dark:border-violet-800/40',
    badge: 'bg-violet-100 dark:bg-violet-900/50',
    badgeText: 'text-violet-700 dark:text-violet-300',
    icon: 'bg-violet-100 dark:bg-violet-900/40',
    iconText: 'text-violet-600 dark:text-violet-400',
    dot: 'bg-violet-500',
    divider: 'bg-violet-200 dark:bg-violet-800/40',
  },
};

export default function ProgramsPage() {
  return (
    <main className="pt-28 pb-24 bg-kapur dark:bg-gelap">
      <Container>
        {/* Bidang */}
        <div className="space-y-14">
          {programBidang.map((bidang, bi) => {
            const colors = colorMap[bidang.color];
            const Icon = bidang.icon;
            return (
              <section key={bidang.label}>
                {/* Bidang header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 ${colors.icon}`}>
                    <Icon className={`h-5 w-5 ${colors.iconText}`} />
                  </div>
                  <div>
                    <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full ${colors.badge} ${colors.badgeText}`}>
                      <span>{bidang.emoji}</span>
                      {bidang.label}
                    </span>
                  </div>
                  {/* Divider line */}
                  <div className={`flex-1 h-px ${colors.divider}`} />
                </div>

                {/* Program cards */}
                <div className="grid md:grid-cols-2 gap-5">
                  {bidang.programs.map((prog) => (
                    <article
                      key={prog.title}
                      className={`rounded-2xl border p-6 ${colors.bg} ${colors.border} hover:shadow-md transition-all duration-300 flex flex-col`}
                    >
                      {/* Title */}
                      <h3 className="text-[15px] font-bold text-gelap dark:text-white mb-3 leading-snug">
                        {prog.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gelap/65 dark:text-white/60 leading-relaxed mb-5 flex-1">
                        {prog.description}
                      </p>

                      {/* Goals */}
                      <div>
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black/5 dark:border-white/8">
                          <Target className="h-3.5 w-3.5 text-gelap/35 dark:text-white/35 shrink-0" />
                          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-gelap/40 dark:text-white/40">
                            Tujuan Program
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {prog.goals.map((goal) => (
                            <li key={goal} className="flex items-start gap-2.5">
                              <CheckCircle2 className="h-4 w-4 text-hijau-terang shrink-0 mt-0.5" />
                              <span className="text-sm text-gelap/70 dark:text-white/65 leading-relaxed">
                                {goal}
                              </span>
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
        <section className="mt-20">
          <div className="max-w-2xl mx-auto rounded-2xl border border-hijau-tua/20 bg-hijau-tua/5 dark:bg-hijau-tua/10 p-8 text-center">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-6 bg-emas" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-emas-tua dark:text-emas">
                Harapan Kami
              </span>
              <span className="h-px w-6 bg-emas" />
            </div>
            <p className="text-[15px] text-gelap/70 dark:text-white/65 leading-relaxed mb-4">
              Melalui seluruh program kerja yang telah dirancang, KKN Kelompok 27 Universitas Bengkulu
              berharap dapat memberikan manfaat nyata bagi masyarakat Desa Lokasi Baru —
              meningkatkan kualitas lingkungan, kesehatan, literasi digital, serta partisipasi masyarakat
              dalam pembangunan desa yang berkelanjutan.
            </p>
            <blockquote className="text-lg font-black text-hijau-tua dark:text-hijau-segar italic">
              &ldquo;Bersatu dalam karya, tumbuh bersama masyarakat.&rdquo;
            </blockquote>
          </div>
        </section>
      </Container>
    </main>
  );
}
