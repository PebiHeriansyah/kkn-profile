import type { TimelineEvent } from '@/lib/types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'tl-001',
    date: '2026-06-17',
    title: 'Penyambutan & Penyerahan Tim KKN',
    description: 'Tim KKN Kelompok 27 resmi diterima oleh perangkat Desa Lokasi Baru dan warga setempat.',
    category: 'sosial-budaya',
  },
  {
    id: 'tl-002',
    date: '2026-06-18',
    title: 'Survei Lapangan & Observasi Desa',
    description: 'Tim melakukan observasi dan identifikasi kebutuhan masyarakat Desa Lokasi Baru.',
    category: 'sosial-budaya',
  },
  {
    id: 'tl-003',
    date: '2026-06-20',
    title: 'Pemetaan Pengelolaan Sampah Desa',
    description: 'Pemetaan kondisi pengelolaan sampah dan identifikasi titik-titik pencemaran di desa.',
    category: 'lingkungan',
  },
  {
    id: 'tl-004',
    date: '2026-06-24',
    title: 'Gotong Royong Rutin Perdana',
    description: 'Kerja bakti perdana bersama masyarakat untuk menjaga kebersihan lingkungan desa.',
    category: 'lingkungan',
  },
  {
    id: 'tl-005',
    date: '2026-06-27',
    title: 'Pembuatan Ekoenzim',
    description: 'Pemanfaatan limbah organik rumah tangga menjadi ekoenzim ramah lingkungan bersama warga.',
    category: 'lingkungan',
  },
  {
    id: 'tl-006',
    date: '2026-07-01',
    title: 'Pembentukan dan Edukasi Bank Sampah',
    description: 'Pendampingan masyarakat dalam memilah dan mengelola sampah agar bernilai ekonomis.',
    category: 'lingkungan',
  },
  {
    id: 'tl-007',
    date: '2026-07-05',
    title: 'Penyuluhan PHBS di Sekolah',
    description: 'Penyuluhan perilaku hidup bersih dan sehat kepada peserta didik di sekolah.',
    category: 'kesehatan',
  },
  {
    id: 'tl-008',
    date: '2026-07-05',
    title: 'Digitalisasi Informasi Pengelolaan Sampah',
    description: 'Pengembangan website desa untuk informasi pengelolaan sampah dan sarana pengaduan masyarakat.',
    category: 'pendidikan',
  },
  {
    id: 'tl-009',
    date: '2026-07-10',
    title: 'Penyuluhan Hipertensi',
    description: 'Edukasi kepada masyarakat mengenai penyebab, faktor risiko, dan pencegahan hipertensi.',
    category: 'kesehatan',
  },
  {
    id: 'tl-010',
    date: '2026-07-15',
    title: 'Penyuluhan Diabetes Mellitus',
    description: 'Penyuluhan mengenai faktor risiko, pencegahan, dan pengendalian kadar gula darah.',
    category: 'kesehatan',
  },
  {
    id: 'tl-011',
    date: '2026-07-20',
    title: 'Edukasi Penggunaan Gadget Secara Bijak',
    description: 'Edukasi kepada anak-anak dan remaja tentang penggunaan gadget yang sehat dan produktif.',
    category: 'pendidikan',
  },
  {
    id: 'tl-012',
    date: '2026-07-28',
    title: 'Evaluasi Program Kerja',
    description: 'Evaluasi bersama seluruh program kerja yang telah dilaksanakan bersama perangkat desa.',
    category: 'sosial-budaya',
  },
  {
    id: 'tl-013',
    date: '2026-07-31',
    title: 'Penutupan & Perpisahan KKN',
    description: 'Acara penutupan resmi KKN Kelompok 27 dan penyerahan hasil program kepada Desa Lokasi Baru.',
    category: 'sosial-budaya',
  },
];

export function getTimelineByCategory(category: string): TimelineEvent[] {
  return timelineEvents.filter((e) => e.category === category);
}
