import type { GalleryItem, ProgramCategory } from '@/lib/types';

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-001',
    type: 'image',
    src: '/images/gallery/kegiatan-01.jpg',
    thumbnail: '/images/gallery/kegiatan-01.jpg',
    caption: 'Penyambutan tim KKN oleh perangkat desa',
    date: '2024-07-01',
    category: 'sosial-budaya',
  },
  {
    id: 'gal-002',
    type: 'image',
    src: '/images/gallery/kegiatan-02.jpg',
    thumbnail: '/images/gallery/kegiatan-02.jpg',
    caption: 'Bimbingan belajar dengan anak-anak SD',
    date: '2024-07-15',
    category: 'pendidikan',
  },
  {
    id: 'gal-003',
    type: 'image',
    src: '/images/gallery/kegiatan-03.jpg',
    thumbnail: '/images/gallery/kegiatan-03.jpg',
    caption: 'Posyandu dan pemeriksaan kesehatan warga',
    date: '2024-07-22',
    category: 'kesehatan',
  },
  {
    id: 'gal-004',
    type: 'image',
    src: '/images/gallery/kegiatan-04.jpg',
    thumbnail: '/images/gallery/kegiatan-04.jpg',
    caption: 'Kerja bakti membersihkan saluran air',
    date: '2024-08-01',
    category: 'lingkungan',
  },
  {
    id: 'gal-005',
    type: 'image',
    src: '/images/gallery/kegiatan-05.jpg',
    thumbnail: '/images/gallery/kegiatan-05.jpg',
    caption: 'Pelatihan UMKM digital untuk warga',
    date: '2024-08-05',
    category: 'ekonomi',
  },
  {
    id: 'gal-006',
    type: 'image',
    src: '/images/gallery/kegiatan-06.jpg',
    thumbnail: '/images/gallery/kegiatan-06.jpg',
    caption: 'Festival budaya desa',
    date: '2024-08-10',
    category: 'sosial-budaya',
  },
];

export function getGalleryByCategory(category: ProgramCategory): GalleryItem[] {
  return galleryItems.filter((item) => item.category === category);
}
