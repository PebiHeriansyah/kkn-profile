"use client";

import React from 'react';
import { Container, SectionHeader } from '@/components/ui';
import { AdvancedMap } from '@/components/ui/interactive-map';
import { MapPin, Navigation } from 'lucide-react';

export const MapSection = () => {
  // Koordinat Desa Lokasi Baru, Kec. Air Periukan, Kab. Seluma, Bengkulu
  const mapCenter: [number, number] = [-3.973507, 102.416927];
  
  const markers = [
    {
      id: 1,
      position: mapCenter,
      color: 'red',
      size: 'large',
      popup: {
        title: 'Desa Lokasi Baru',
        content: 'Posko KKN Kelompok 27 — Kec. Air Periukan, Kab. Seluma, Bengkulu',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?auto=format&fit=crop&q=80&w=400&h=300'
      }
    }
  ];

  const requestRoute = () => {
    window.dispatchEvent(new Event('request-route'));
  };

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${mapCenter[0]},${mapCenter[1]}`, '_blank');
  };

  return (
    <section className="py-20 bg-gelap/5">
      <Container>
        <SectionHeader
          title="Lokasi Desa"
          subtitle="Peta interaktif menuju lokasi KKN kami"
        />
        
        <div className="mt-12 rounded-2xl overflow-hidden border border-gelap/10 shadow-xl bg-white">
          <div className="p-6 border-b border-gelap/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand/10 rounded-xl text-brand flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gelap">Lokasi Geografis</h3>
                <p className="text-gelap/60 text-sm mt-1">Koordinat: {mapCenter[0]}, {mapCenter[1]}</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={requestRoute}
                className="flex items-center gap-2 px-4 py-2 bg-gelap text-white rounded-lg hover:bg-gelap/80 transition-colors text-sm font-medium"
              >
                <Navigation className="w-4 h-4" />
                Rute di Peta
              </button>
              <button 
                onClick={openGoogleMaps}
                className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors text-sm font-medium"
              >
                <MapPin className="w-4 h-4" />
                Google Maps
              </button>
            </div>
          </div>
          
          <div className="relative z-0 h-[500px] md:h-[600px] w-full bg-gray-100">
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
      </Container>
    </section>
  );
};
