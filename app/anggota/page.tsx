import type { Metadata } from 'next';
import { Container, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Anggota Tim',
  description:
    'Profil anggota tim KKN Universitas Bengkulu — mahasiswa dari berbagai fakultas yang mengabdi bersama.',
};

export default function TeamPage() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <SectionHeader
          title="Anggota Tim"
          subtitle="Mahasiswa lintas fakultas yang bersatu dalam pengabdian"
        />
        <p className="text-center text-tanah">[Team Members grid — Phase 3]</p>
      </Container>
    </section>
  );
}
