import type { Metadata } from 'next';
import { Gallery } from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Galeri Dokumentasi',
  description:
    'Dokumentasi foto dan video kegiatan KKN Kelompok 27 Universitas Bengkulu Periode 108 di Desa Lokasi Baru — momen pengabdian masyarakat.',
};

export default function GalleryPage() {
  return (
    <main className="pt-20 pb-4">
      <Gallery />
    </main>
  );
}
