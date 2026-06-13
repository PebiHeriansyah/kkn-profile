import type { VillageProfile, ImpactStat } from '@/lib/types';

export const village: VillageProfile = {
  name: 'Desa Contoh',
  district: 'Kecamatan Contoh',
  regency: 'Kabupaten Contoh',
  province: 'Bengkulu',
  population: 2500,
  area: '12.5 km²',
  postalCode: '38000',
  description:
    'Desa Contoh merupakan sebuah desa yang terletak di dataran tinggi Provinsi Bengkulu. Desa ini dikelilingi oleh perbukitan hijau dan perkebunan kopi yang subur.',
  history:
    'Desa Contoh telah berdiri sejak era kolonial Belanda. Awalnya merupakan permukiman kecil para petani yang membuka lahan di kawasan perbukitan.',
  geography:
    'Terletak pada ketinggian 500-800 mdpl dengan topografi berbukit-bukit. Curah hujan rata-rata 2000-3000 mm/tahun.',
  potential: ['Perkebunan Kopi', 'Pertanian Padi', 'Wisata Alam', 'Kerajinan Tangan', 'Peternakan'],
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.0!2d102.26!3d-3.79',
  images: ['/images/village/landscape-1.jpg', '/images/village/landscape-2.jpg'],
};

export const impactStats: ImpactStat[] = [
  { id: 'stat-1', value: 45, label: 'Hari Pengabdian', suffix: '' },
  { id: 'stat-2', value: 10, label: 'Program Kerja', suffix: '+' },
  { id: 'stat-3', value: 12, label: 'Anggota Tim', suffix: '' },
  { id: 'stat-4', value: 500, label: 'Warga Terdampak', suffix: '+' },
];
