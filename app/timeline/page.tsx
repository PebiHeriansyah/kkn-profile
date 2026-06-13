import type { Metadata } from 'next';
import { Container, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Timeline Kegiatan',
  description:
    'Kronologi kegiatan KKN dari awal hingga akhir — timeline aktivitas harian dan mingguan.',
};

export default function TimelinePage() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <SectionHeader
          title="Timeline Kegiatan"
          subtitle="Perjalanan 45 hari pengabdian kami di desa"
        />
        <p className="text-center text-tanah">[Activity Timeline — Phase 3]</p>
      </Container>
    </section>
  );
}
