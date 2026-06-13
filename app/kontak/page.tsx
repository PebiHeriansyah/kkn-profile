import type { Metadata } from 'next';
import { Container, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Kontak',
  description:
    'Hubungi tim KKN Universitas Bengkulu — alamat, email, dan media sosial.',
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <SectionHeader
          title="Hubungi Kami"
          subtitle="Punya pertanyaan atau ingin berkolaborasi? Silakan hubungi kami"
        />
        <p className="text-center text-tanah">[Contact form & map — Phase 3]</p>
      </Container>
    </section>
  );
}
