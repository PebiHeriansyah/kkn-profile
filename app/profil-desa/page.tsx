import type { Metadata } from 'next';
import { Container, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Profil Desa',
  description:
    'Profil desa lokasi KKN — sejarah, demografi, potensi, dan kondisi geografis desa.',
};

export default function VillageProfilePage() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <SectionHeader
          title="Profil Desa"
          subtitle="Mengenal desa tempat kami mengabdi selama KKN"
        />
        <div className="prose prose-lg mx-auto max-w-3xl text-gelap/80">
          <p>[Village Profile content — Phase 3]</p>
        </div>
      </Container>
    </section>
  );
}
