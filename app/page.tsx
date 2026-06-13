import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Statistics } from '@/components/Statistics';
import { About } from '@/components/About';
import { ParallaxBanner } from '@/components/ParallaxBanner';
import { Programs } from '@/components/Programs';
import { Timeline } from '@/components/Timeline';
import { Gallery } from '@/components/Gallery';
import { Team } from '@/components/Team';
import { CTA } from '@/components/CTA';
import { MapSection } from '@/components/MapSection';
import { impactStats } from '@/lib/data/village';

export const metadata: Metadata = {
  title: 'Beranda',
  description:
    'Profil kegiatan Kuliah Kerja Nyata (KKN) Universitas Bengkulu. Program pengabdian masyarakat untuk pembangunan desa yang berkelanjutan.',
};

export default function HomePage() {
  return (
    <>
      {/* 1. Full-screen parallax hero */}
      <Hero />

      {/* 2. Animated impact statistics counter strip */}
      <Statistics stats={impactStats} />

      {/* 3. About KKN with overlapping image composition */}
      <About />

      {/* 4. Interactive Map Section */}
      <MapSection />

      {/* 5. First parallax banner — Village Profile teaser */}
      <ParallaxBanner
        imageUrl="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Pemandangan Desa Bengkulu"
        headline="Desa Contoh — Kecamatan Contoh, Bengkulu"
        subline="Dataran tinggi dengan hamparan kebun kopi yang subur dan masyarakat yang penuh semangat gotong royong."
        overlayColor="from-gelap/85 via-hijau-tua/60 to-transparent"
        height="md"
      />

      {/* 6. Work Programs grid */}
      <Programs />

      {/* 7. Second parallax banner — Programs teaser */}
      <ParallaxBanner
        imageUrl="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Warga desa bersama mahasiswa KKN"
        headline="Setiap Program, Satu Dampak Nyata."
        subline="Kami tidak hanya hadir — kami bekerja, belajar, dan bertumbuh bersama masyarakat."
        overlayColor="from-hijau-tua/90 via-hijau-muda/70 to-transparent"
        height="md"
      />

      {/* 8. Activity Timeline */}
      <Timeline />

      {/* 9. Photo Gallery with lightbox */}
      <Gallery />

      {/* 10. Team Members */}
      <Team />

      {/* 11. Parallax CTA / Contact teaser */}
      <CTA />
    </>
  );
}
