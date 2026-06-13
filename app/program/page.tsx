import type { Metadata } from 'next';
import { Container, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Program Kerja',
  description:
    'Daftar program kerja KKN Universitas Bengkulu — pendidikan, kesehatan, infrastruktur, lingkungan, ekonomi, dan sosial budaya.',
};

export default function ProgramsPage() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <SectionHeader
          title="Program Kerja"
          subtitle="Seluruh program yang kami rancang dan laksanakan bersama warga desa"
        />
        <p className="text-center text-tanah">[Programs list — Phase 3]</p>
      </Container>
    </section>
  );
}
