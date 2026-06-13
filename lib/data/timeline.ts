import type { TimelineEvent } from '@/lib/types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'tl-001',
    date: '2024-07-01',
    title: 'Penyambutan & Penyerahan Tim KKN',
    description: 'Tim KKN resmi diterima oleh perangkat desa dan warga setempat.',
    category: 'sosial-budaya',
  },
  {
    id: 'tl-002',
    date: '2024-07-03',
    title: 'Survei Lapangan & Observasi Desa',
    description: 'Tim melakukan observasi potensi dan permasalahan desa.',
    category: 'sosial-budaya',
  },
  {
    id: 'tl-003',
    date: '2024-07-10',
    title: 'Mulai Program Mengajar Mengaji',
    description: 'Kegiatan mengaji rutin dimulai di masjid desa setiap sore.',
    category: 'sosial-budaya',
  },
  {
    id: 'tl-004',
    date: '2024-07-15',
    title: 'Bimbingan Belajar Anak SD',
    description: 'Program bimbel resmi berjalan dengan 30 peserta.',
    category: 'pendidikan',
  },
  {
    id: 'tl-005',
    date: '2024-07-20',
    title: 'Sosialisasi Literasi Digital',
    description: 'Pelatihan penggunaan internet sehat untuk warga.',
    category: 'pendidikan',
  },
  {
    id: 'tl-006',
    date: '2024-07-22',
    title: 'Posyandu & Pemeriksaan Kesehatan',
    description: 'Pemeriksaan kesehatan gratis untuk balita dan lansia.',
    category: 'kesehatan',
  },
  {
    id: 'tl-007',
    date: '2024-07-25',
    title: 'Senam Sehat Bersama',
    description: 'Olahraga bersama warga di lapangan desa.',
    category: 'kesehatan',
  },
  {
    id: 'tl-008',
    date: '2024-07-28',
    title: 'Pembuatan Plang Jalan',
    description: 'Pemasangan plang penunjuk jalan di seluruh desa.',
    category: 'infrastruktur',
  },
  {
    id: 'tl-009',
    date: '2024-08-01',
    title: 'Kerja Bakti Lingkungan',
    description: 'Gotong royong membersihkan saluran air bersama 60 warga.',
    category: 'lingkungan',
  },
  {
    id: 'tl-010',
    date: '2024-08-03',
    title: 'Penanaman Pohon',
    description: 'Menanam 100 bibit pohon produktif di lahan kosong desa.',
    category: 'lingkungan',
  },
  {
    id: 'tl-011',
    date: '2024-08-05',
    title: 'Pelatihan UMKM Digital',
    description: 'Workshop jualan online untuk 20 pelaku UMKM desa.',
    category: 'ekonomi',
  },
  {
    id: 'tl-012',
    date: '2024-08-10',
    title: 'Festival Budaya Desa',
    description: 'Pagelaran seni dan budaya bersama seluruh warga desa.',
    category: 'sosial-budaya',
  },
  {
    id: 'tl-013',
    date: '2024-08-14',
    title: 'Penutupan & Perpisahan KKN',
    description: 'Acara penutupan resmi dan penyerahan hasil program kepada desa.',
    category: 'sosial-budaya',
  },
];

export function getTimelineByCategory(category: string): TimelineEvent[] {
  return timelineEvents.filter((e) => e.category === category);
}
