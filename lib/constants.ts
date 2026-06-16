// ============================================================================
// KKN Profile — Constants
// Application-wide constants: site metadata, navigation, social links.
// ============================================================================

import type { NavItem, ContactInfo } from './types';

// --- Site Metadata ----------------------------------------------------------

export const SITE_NAME = 'KKN Kelompok 27 – Universitas Bengkulu';
export const SITE_DESCRIPTION =
  'Profil kegiatan Kuliah Kerja Nyata (KKN) Kelompok 27 Universitas Bengkulu Periode 108 — Pengabdian masyarakat di Desa Lokasi Baru, Kecamatan Air Periukan, Kabupaten Seluma, Provinsi Bengkulu.';
export const SITE_URL = 'https://kkn-profile.netlify.app';

// --- Navigation -------------------------------------------------------------

export const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang KKN', href: '/tentang' },
  { label: 'Program Kerja', href: '/program' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Anggota', href: '/anggota' },
  { label: 'Kontak', href: '/kontak' },
];

// --- Contact Information ----------------------------------------------------

export const CONTACT_INFO: ContactInfo = {
  address: 'Desa Lokasi Baru, Kecamatan Air Periukan, Kabupaten Seluma, Provinsi Bengkulu',
  phone: '+62 812-0000-0000',
  email: 'kkn27unib@gmail.com',
  instagram: 'https://instagram.com/kkn27_unib',
  youtube: 'https://youtube.com/@kkn27_unib',
  mapEmbedUrl: '',
};

// --- University Info --------------------------------------------------------

export const UNIVERSITY = {
  name: 'Universitas Bengkulu',
  shortName: 'UNIB',
  logo: '/images/logo-unib.png',
  website: 'https://unib.ac.id',
};

// --- KKN Period -------------------------------------------------------------

export const KKN_PERIOD = {
  batch: 'Periode 108',
  group: 'Kelompok 27',
  year: '2026',
  startDate: '2026-06-17',
  endDate: '2026-07-31',
  duration: '45 Hari',
};
