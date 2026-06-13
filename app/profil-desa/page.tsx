import type { Metadata } from 'next';
import { Container, SectionHeader } from '@/components/ui';
import { AdvancedMap } from '@/components/ui/interactive-map';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Profil Desa',
  description:
    'Profil desa lokasi KKN — sejarah, demografi, potensi, dan kondisi geografis desa.',
};

export default function VillageProfilePage() {
  const mapCenter: [number, number] = [-3.973507, 102.416927];
  
  const markers = [
    {
      id: 1,
      position: mapCenter,
      color: 'red',
      size: 'large',
      popup: {
        title: 'Lokasi KKN',
        content: 'Titik Posko KKN',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?auto=format&fit=crop&q=80&w=400&h=300'
      }
    }
  ];

  return (
    <section className="pt-28 pb-20">
      <Container>
        <SectionHeader
          title="Profil Desa"
          subtitle="Mengenal desa tempat kami mengabdi selama KKN"
        />
        
        {/* Map Section */}
        <div className="mt-12 mb-16 rounded-2xl overflow-hidden border border-gelap/10 shadow-xl bg-white">
          <div className="p-6 border-b border-gelap/5 flex items-center gap-4 bg-white">
            <div className="p-3 bg-brand/10 rounded-xl text-brand flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gelap">Lokasi Geografis</h3>
              <p className="text-gelap/60 text-sm mt-1">Koordinat: {mapCenter[0]}, {mapCenter[1]}</p>
            </div>
          </div>
          <div className="relative z-0 h-[500px] md:h-[600px] w-full bg-gelap/5">
            <AdvancedMap
              center={mapCenter}
              zoom={14}
              markers={markers}
              enableClustering={true}
              enableSearch={true}
              enableControls={true}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </div>

        <div className="prose prose-lg mx-auto max-w-3xl text-gelap/80">
          <p>[Village Profile content — Phase 3]</p>
        </div>
      </Container>
    </section>
  );
}
