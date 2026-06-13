import type { Metadata } from 'next';
import { Container, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tentang KKN',
  description:
    'Informasi tentang program Kuliah Kerja Nyata (KKN) Universitas Bengkulu — visi, misi, dan tujuan pengabdian masyarakat.',
};

export default function AboutPage() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <SectionHeader
          title="Tentang KKN"
          subtitle="Mengenal lebih dekat program Kuliah Kerja Nyata Universitas Bengkulu"
        />
        <div className="prose prose-lg mx-auto max-w-3xl text-gelap/80">
          <p>[About KKN content — Phase 3]</p>
        </div>
      </Container>
    </section>
  );
}
