import type { Metadata } from 'next';
import { Team } from '@/components/Team';

export const metadata: Metadata = {
  title: 'Anggota Tim',
  description:
    'Profil 9 anggota tim KKN Kelompok 27 Universitas Bengkulu Periode 108 — mahasiswa yang mengabdi bersama di Desa Lokasi Baru, Kab. Seluma.',
};

export default function TeamPage() {
  return (
    <main className="pt-20 pb-4">
      <Team />
    </main>
  );
}
