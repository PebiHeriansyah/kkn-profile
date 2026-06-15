import type { VillageProfile, ImpactStat } from '@/lib/types';

export const village: VillageProfile = {
  name: 'Desa Lokasi Baru',
  district: 'Kecamatan Air Periukan',
  regency: 'Kabupaten Seluma',
  province: 'Bengkulu',
  population: 0,
  area: '',
  postalCode: '38573',
  description:
    'Desa Lokasi Baru merupakan sebuah desa yang terletak di Kecamatan Air Periukan, Kabupaten Seluma, Provinsi Bengkulu. Desa ini menjadi lokasi pelaksanaan KKN Kelompok 27 Universitas Bengkulu Periode 108.',
  history:
    'Desa Lokasi Baru adalah salah satu desa yang berada di wilayah Kecamatan Air Periukan, Kabupaten Seluma. Desa ini terus berkembang melalui partisipasi aktif warga dan dukungan pemerintah daerah.',
  geography:
    'Terletak di Kecamatan Air Periukan, Kabupaten Seluma, Provinsi Bengkulu. Wilayah ini dikelilingi oleh alam Bengkulu yang subur dan hijau.',
  potential: ['Pertanian', 'Perkebunan', 'Pemberdayaan Masyarakat', 'Lingkungan Hidup', 'Pendidikan'],
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.0!2d102.52!3d-3.97',
  images: ['/images/village/landscape-1.jpg', '/images/village/landscape-2.jpg'],
};

export const impactStats: ImpactStat[] = [
  { id: 'stat-1', value: 45, label: 'Hari Pengabdian', suffix: '' },
  { id: 'stat-2', value: 9, label: 'Program Kerja', suffix: '+' },
  { id: 'stat-3', value: 9, label: 'Mahasiswa', suffix: '' },
  { id: 'stat-4', value: 4, label: 'Bidang Kegiatan', suffix: '' },
];
