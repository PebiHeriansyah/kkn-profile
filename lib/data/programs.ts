// ============================================================================
// KKN Profile — Work Program Data
// All KKN work programs organized by category.
// Replace placeholder data with actual program information.
// ============================================================================

import type { Program, ProgramCategory } from '@/lib/types';

export const programs: Program[] = [
  // --- Pendidikan -----------------------------------------------------------
  {
    id: 'prog-001',
    title: 'Bimbingan Belajar Anak SD',
    slug: 'bimbingan-belajar-anak-sd',
    category: 'pendidikan',
    status: 'selesai',
    description:
      'Program bimbingan belajar untuk anak-anak Sekolah Dasar di desa, membantu meningkatkan kemampuan membaca, menulis, dan berhitung.',
    image: '/images/programs/bimbel.jpg',
    date: '2024-07-15',
    participants: 30,
    location: 'Balai Desa',
  },
  {
    id: 'prog-002',
    title: 'Sosialisasi Literasi Digital',
    slug: 'sosialisasi-literasi-digital',
    category: 'pendidikan',
    status: 'selesai',
    description:
      'Pelatihan penggunaan teknologi digital untuk warga desa, termasuk pemanfaatan media sosial dan internet secara bijak.',
    image: '/images/programs/literasi-digital.jpg',
    date: '2024-07-20',
    participants: 25,
    location: 'Aula Desa',
  },

  // --- Kesehatan ------------------------------------------------------------
  {
    id: 'prog-003',
    title: 'Posyandu dan Pemeriksaan Kesehatan',
    slug: 'posyandu-pemeriksaan-kesehatan',
    category: 'kesehatan',
    status: 'selesai',
    description:
      'Kegiatan posyandu rutin untuk balita dan lansia, termasuk pemeriksaan tekanan darah dan pemberian vitamin.',
    image: '/images/programs/posyandu.jpg',
    date: '2024-07-22',
    participants: 50,
    location: 'Puskesmas Desa',
  },
  {
    id: 'prog-004',
    title: 'Senam Sehat Bersama',
    slug: 'senam-sehat-bersama',
    category: 'kesehatan',
    status: 'selesai',
    description:
      'Kegiatan olahraga bersama warga desa untuk meningkatkan kesadaran hidup sehat dan aktif bergerak.',
    image: '/images/programs/senam.jpg',
    date: '2024-07-25',
    participants: 40,
  },

  // --- Infrastruktur --------------------------------------------------------
  {
    id: 'prog-005',
    title: 'Pembuatan Plang Jalan',
    slug: 'pembuatan-plang-jalan',
    category: 'infrastruktur',
    status: 'selesai',
    description:
      'Pemasangan plang penunjuk jalan dan nama gang di desa untuk mempermudah navigasi dan identitas lingkungan.',
    image: '/images/programs/plang-jalan.jpg',
    date: '2024-07-28',
    location: 'Sepanjang Jalan Desa',
  },

  // --- Lingkungan -----------------------------------------------------------
  {
    id: 'prog-006',
    title: 'Kerja Bakti Lingkungan',
    slug: 'kerja-bakti-lingkungan',
    category: 'lingkungan',
    status: 'selesai',
    description:
      'Gotong royong membersihkan lingkungan desa, termasuk saluran air, jalan, dan area publik bersama warga.',
    image: '/images/programs/kerja-bakti.jpg',
    date: '2024-08-01',
    participants: 60,
  },
  {
    id: 'prog-007',
    title: 'Penanaman Pohon',
    slug: 'penanaman-pohon',
    category: 'lingkungan',
    status: 'selesai',
    description:
      'Program penghijauan dengan menanam bibit pohon produktif di lahan kosong desa untuk kelestarian lingkungan.',
    image: '/images/programs/tanam-pohon.jpg',
    date: '2024-08-03',
    participants: 35,
  },

  // --- Ekonomi --------------------------------------------------------------
  {
    id: 'prog-008',
    title: 'Pelatihan UMKM Digital',
    slug: 'pelatihan-umkm-digital',
    category: 'ekonomi',
    status: 'selesai',
    description:
      'Workshop pemasaran digital untuk pelaku UMKM desa, termasuk cara berjualan online dan membuat konten promosi.',
    image: '/images/programs/umkm.jpg',
    date: '2024-08-05',
    participants: 20,
    location: 'Balai Desa',
  },

  // --- Sosial & Budaya ------------------------------------------------------
  {
    id: 'prog-009',
    title: 'Festival Budaya Desa',
    slug: 'festival-budaya-desa',
    category: 'sosial-budaya',
    status: 'selesai',
    description:
      'Acara perayaan budaya lokal dengan menampilkan kesenian tradisional, makanan khas, dan permainan rakyat.',
    image: '/images/programs/festival.jpg',
    date: '2024-08-10',
    participants: 100,
    location: 'Lapangan Desa',
  },
  {
    id: 'prog-010',
    title: 'Mengajar Mengaji',
    slug: 'mengajar-mengaji',
    category: 'sosial-budaya',
    status: 'selesai',
    description:
      'Kegiatan mengajar mengaji dan belajar agama untuk anak-anak di mushola dan masjid desa.',
    image: '/images/programs/mengaji.jpg',
    date: '2024-07-10',
    participants: 25,
    location: 'Masjid Desa',
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
