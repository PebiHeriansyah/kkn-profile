import type { Metadata } from 'next';
import { Container, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Galeri',
  description:
    'Dokumentasi foto dan video kegiatan KKN — galeri kegiatan pengabdian masyarakat.',
};

export default function GalleryPage() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <SectionHeader
          title="Galeri Dokumentasi"
          subtitle="Momen-momen berharga selama KKN berlangsung"
        />
        <p className="text-center text-tanah">[Photo/Video Gallery — Phase 3]</p>
      </Container>
    </section>
  );
}
