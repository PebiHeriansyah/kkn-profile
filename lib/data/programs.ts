// ============================================================================
// KKN Profile — Work Program Data
// Program kerja KKN Kelompok 27 Universitas Bengkulu Periode 108
// Desa Lokasi Baru, Kec. Air Periukan, Kab. Seluma, Bengkulu
// ============================================================================

import type { Program, ProgramCategory } from '@/lib/types';

export const programs: Program[] = [
  // --- Lingkungan -----------------------------------------------------------
  {
    id: 'prog-001',
    title: 'Pembuatan Ekoenzim',
    slug: 'pembuatan-ekoenzim',
    category: 'lingkungan',
    status: 'direncanakan',
    description:
      'Program pemanfaatan limbah organik rumah tangga menjadi ekoenzim yang bermanfaat sebagai cairan pembersih alami, pupuk organik, serta pengurai limbah ramah lingkungan.',
    image: '/images/programs/ekoenzim.jpg',
    date: '2026-06-17',
    location: 'Desa Lokasi Baru',
  },
  {
    id: 'prog-002',
    title: 'Pemetaan Kondisi Pengelolaan Sampah Desa',
    slug: 'pemetaan-pengelolaan-sampah',
    category: 'lingkungan',
    status: 'direncanakan',
    description:
      'Kegiatan pemetaan untuk mengidentifikasi kondisi pengelolaan sampah serta titik-titik yang berpotensi menjadi sumber pencemaran lingkungan di desa.',
    image: '/images/programs/pemetaan-sampah.jpg',
    date: '2026-06-20',
    location: 'Desa Lokasi Baru',
  },
  {
    id: 'prog-003',
    title: 'Gotong Royong Rutin',
    slug: 'gotong-royong-rutin',
    category: 'lingkungan',
    status: 'direncanakan',
    description:
      'Kegiatan kerja bakti bersama masyarakat yang dilaksanakan secara rutin untuk menjaga kebersihan lingkungan serta mempererat hubungan sosial antara mahasiswa dan masyarakat.',
    image: '/images/programs/gotong-royong.jpg',
    date: '2026-06-24',
    location: 'Desa Lokasi Baru',
  },
  {
    id: 'prog-004',
    title: 'Pembentukan dan Edukasi Bank Sampah',
    slug: 'bank-sampah',
    category: 'lingkungan',
    status: 'direncanakan',
    description:
      'Program edukasi dan pendampingan masyarakat dalam memilah serta mengelola sampah agar memiliki nilai ekonomis dan dapat dimanfaatkan kembali.',
    image: '/images/programs/bank-sampah.jpg',
    date: '2026-07-01',
    location: 'Desa Lokasi Baru',
  },

  // --- Kesehatan ------------------------------------------------------------
  {
    id: 'prog-005',
    title: 'Penyuluhan PHBS di Sekolah',
    slug: 'penyuluhan-phbs-sekolah',
    category: 'kesehatan',
    status: 'direncanakan',
    description:
      'Penyuluhan kepada peserta didik mengenai pentingnya menjaga kebersihan diri, lingkungan, dan menerapkan perilaku hidup bersih dan sehat (PHBS) dalam kehidupan sehari-hari.',
    image: '/images/programs/phbs.jpg',
    date: '2026-07-05',
    location: 'Sekolah Desa Lokasi Baru',
  },
  {
    id: 'prog-006',
    title: 'Penyuluhan Hipertensi',
    slug: 'penyuluhan-hipertensi',
    category: 'kesehatan',
    status: 'direncanakan',
    description:
      'Kegiatan edukasi kepada masyarakat mengenai penyebab, faktor risiko, pencegahan, dan pentingnya deteksi dini hipertensi (tekanan darah tinggi).',
    image: '/images/programs/hipertensi.jpg',
    date: '2026-07-10',
    location: 'Balai Desa Lokasi Baru',
  },
  {
    id: 'prog-007',
    title: 'Penyuluhan Diabetes Mellitus',
    slug: 'penyuluhan-diabetes',
    category: 'kesehatan',
    status: 'direncanakan',
    description:
      'Penyuluhan mengenai diabetes mellitus yang mencakup faktor risiko, pencegahan, serta cara pengendalian kadar gula darah melalui pola hidup sehat.',
    image: '/images/programs/diabetes.jpg',
    date: '2026-07-15',
    location: 'Balai Desa Lokasi Baru',
  },

  // --- Teknologi Informasi ---------------------------------------------------
  {
    id: 'prog-008',
    title: 'Digitalisasi Informasi Pengelolaan dan Pengaduan Sampah',
    slug: 'digitalisasi-website-desa',
    category: 'pendidikan',
    status: 'direncanakan',
    description:
      'Program pengembangan sistem informasi berbasis website untuk menyampaikan informasi pengelolaan sampah sekaligus menjadi sarana pengaduan masyarakat desa.',
    image: '/images/programs/website-desa.jpg',
    date: '2026-07-05',
    location: 'Desa Lokasi Baru',
  },

  // --- Literasi Digital -------------------------------------------------------
  {
    id: 'prog-009',
    title: 'Edukasi Penggunaan Gadget Secara Bijak',
    slug: 'edukasi-gadget-bijak',
    category: 'pendidikan',
    status: 'direncanakan',
    description:
      'Program edukasi kepada anak-anak dan remaja mengenai penggunaan gadget secara sehat, aman, dan bertanggung jawab untuk mendorong penggunaan teknologi secara produktif.',
    image: '/images/programs/literasi-digital.jpg',
    date: '2026-07-20',
    location: 'Sekolah & Balai Desa Lokasi Baru',
  },
];

// --- Helper functions -------------------------------------------------------

export function getProgramsByCategory(category: ProgramCategory): Program[] {
  return programs.filter((p) => p.category === category);
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getFeaturedPrograms(count: number = 3): Program[] {
  return programs.slice(0, count);
}

export function getAllCategories(): ProgramCategory[] {
  return [...new Set(programs.map((p) => p.category))];
}
