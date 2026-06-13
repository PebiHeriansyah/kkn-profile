import type { Metadata } from 'next';
import { Container, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Artikel',
  description:
    'Artikel dan laporan kegiatan KKN — cerita dari lapangan, laporan harian, dan dokumentasi narasi.',
};

export default function ArticlesPage() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <SectionHeader
          title="Artikel"
          subtitle="Cerita, laporan, dan refleksi dari kegiatan KKN"
        />
        <p className="text-center text-tanah">[Articles list — Phase 3]</p>
      </Container>
    </section>
  );
}
