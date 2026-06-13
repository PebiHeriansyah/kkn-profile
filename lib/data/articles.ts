// ============================================================================
// KKN Profile — Article Data
// Activity reports and articles from the KKN deployment.
// Replace placeholder data with actual articles.
// ============================================================================

import type { Article } from '@/lib/types';

export const articles: Article[] = [
  {
    id: 'art-001',
    title: 'Hari Pertama KKN: Sambutan Hangat dari Warga Desa',
    slug: 'hari-pertama-kkn',
    excerpt:
      'Kedatangan tim KKN disambut antusias oleh perangkat desa dan warga. Kegiatan dimulai dengan silaturahmi dan pengenalan program kerja.',
    content: `
Hari pertama KKN menjadi momen bersejarah bagi seluruh anggota tim. 
Kami tiba di desa pada pagi hari dan langsung disambut oleh Kepala Desa 
beserta perangkat desa lainnya.

Acara penyambutan berlangsung di Balai Desa dengan penuh kehangatan. 
Dalam kesempatan tersebut, ketua kelompok KKN menyampaikan rencana 
program kerja yang akan dilaksanakan selama 45 hari ke depan.

Warga desa menunjukkan antusiasme yang tinggi dan siap bekerja sama 
dalam setiap program yang direncanakan. Semangat gotong royong yang 
kuat menjadi modal utama keberhasilan KKN kami.
    `.trim(),
    coverImage: '/images/articles/hari-pertama.jpg',
    author: 'Tim KKN',
    date: '2024-07-01',
    category: 'sosial-budaya',
    tags: ['kegiatan', 'penyambutan', 'hari-pertama'],
  },
  {
    id: 'art-002',
    title: 'Sukses Gelar Bimbingan Belajar untuk 30 Siswa SD',
    slug: 'bimbingan-belajar-sukses',
    excerpt:
      'Program bimbingan belajar berhasil diikuti oleh 30 siswa SD dari berbagai kelas. Materi meliputi matematika, bahasa Indonesia, dan bahasa Inggris.',
    content: `
Program bimbingan belajar yang kami selenggarakan berhasil menarik 
partisipasi 30 siswa Sekolah Dasar. Kegiatan ini berlangsung selama 
dua minggu dengan jadwal tiga kali pertemuan per minggu.

Materi yang diajarkan mencakup matematika dasar, membaca dan menulis 
bahasa Indonesia, serta pengenalan bahasa Inggris. Setiap sesi 
berlangsung selama dua jam dengan metode pembelajaran yang menyenangkan.

Anak-anak sangat antusias mengikuti setiap pertemuan. Beberapa di 
antaranya menunjukkan peningkatan yang signifikan dalam kemampuan 
berhitung dan membaca.
    `.trim(),
    coverImage: '/images/articles/bimbel.jpg',
    author: 'Divisi Pendidikan',
    date: '2024-07-18',
    category: 'pendidikan',
    tags: ['pendidikan', 'bimbel', 'anak-sd'],
  },
  {
    id: 'art-003',
    title: 'Gotong Royong Bersama Warga: Membersihkan Saluran Air',
    slug: 'gotong-royong-saluran-air',
    excerpt:
      'Tim KKN bersama warga melaksanakan kerja bakti membersihkan saluran air yang tersumbat. Kegiatan ini bertujuan mencegah banjir di musim hujan.',
    content: `
Kerja bakti pembersihan saluran air merupakan salah satu program kerja 
prioritas kami. Saluran air di beberapa titik desa mengalami penyumbatan 
akibat sampah dan sedimentasi.

Bersama 60 warga desa, kami berhasil membersihkan saluran air sepanjang 
2 kilometer dalam waktu satu hari penuh. Kegiatan dimulai pukul 07.00 
dan berakhir menjelang siang.

Setelah pembersihan, aliran air kembali lancar. Kepala Desa mengapresiasi 
kegiatan ini dan berharap warga dapat menjaga kebersihan saluran air 
secara rutin.
    `.trim(),
    coverImage: '/images/articles/gotong-royong.jpg',
    author: 'Divisi Infrastruktur',
    date: '2024-08-02',
    category: 'infrastruktur',
    tags: ['infrastruktur', 'gotong-royong', 'saluran-air'],
  },
  {
    id: 'art-004',
    title: 'Pelatihan UMKM Digital: Warga Antusias Belajar Jualan Online',
    slug: 'pelatihan-umkm-digital',
    excerpt:
      'Workshop pemasaran digital diikuti 20 pelaku UMKM desa. Peserta belajar membuat akun marketplace dan teknik foto produk.',
    content: `
Pelatihan UMKM Digital menjadi salah satu program yang paling diminati 
oleh warga. Sebanyak 20 pelaku UMKM desa mengikuti workshop yang 
berlangsung selama dua hari.

Materi yang disampaikan meliputi pembuatan akun di marketplace populer, 
teknik fotografi produk menggunakan smartphone, penulisan deskripsi 
produk yang menarik, serta strategi promosi di media sosial.

Peserta terlihat sangat antusias, terutama saat sesi praktik langsung. 
Beberapa produk lokal seperti keripik, kopi, dan kerajinan tangan 
berhasil diunggah ke marketplace selama workshop berlangsung.
    `.trim(),
    coverImage: '/images/articles/umkm.jpg',
    author: 'Divisi Ekonomi',
    date: '2024-08-06',
    category: 'ekonomi',
    tags: ['ekonomi', 'umkm', 'digital-marketing'],
  },
  {
    id: 'art-005',
    title: 'Penutupan KKN: Sebuah Perpisahan yang Mengharukan',
    slug: 'penutupan-kkn',
    excerpt:
      'Acara penutupan KKN berlangsung meriah dengan penampilan seni budaya dan penyerahan hasil program kepada desa.',
    content: `
Setelah 45 hari mengabdi di desa, tibalah saat yang paling berat: 
perpisahan. Acara penutupan KKN diselenggarakan di Balai Desa dengan 
dihadiri seluruh warga dan perangkat desa.

Dalam acara tersebut, ketua kelompok menyampaikan laporan pelaksanaan 
seluruh program kerja beserta capaiannya. Beberapa plang jalan, pohon 
yang ditanam, dan dokumentasi kegiatan diserahkan secara simbolis 
kepada Kepala Desa.

Momen paling mengharukan adalah ketika anak-anak yang selama ini 
mengikuti bimbingan belajar menyanyikan lagu perpisahan. Air mata 
tak terhindarkan dari anggota tim dan warga yang hadir.
    `.trim(),
    coverImage: '/images/articles/penutupan.jpg',
    author: 'Tim KKN',
    date: '2024-08-14',
    category: 'sosial-budaya',
    tags: ['penutupan', 'perpisahan', 'laporan'],
  },
];

// --- Helper functions -------------------------------------------------------

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getLatestArticles(count: number = 3): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}
