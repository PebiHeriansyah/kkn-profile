import type { Metadata } from 'next';
import { Timeline } from '@/components/Timeline';

export const metadata: Metadata = {
  title: 'Timeline Kegiatan',
  description:
    'Kronologi kegiatan KKN Kelompok 27 Universitas Bengkulu Periode 108 di Desa Lokasi Baru — timeline aktivitas dari 17 Juni hingga 31 Juli 2026.',
};

export default function TimelinePage() {
  return (
    <main className="pt-20 pb-4">
      <Timeline />
    </main>
  );
}
