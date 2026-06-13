// ============================================================================
// KKN Profile — Constants
// Application-wide constants: site metadata, navigation, social links.
// ============================================================================

import type { NavItem, ContactInfo } from './types';

// --- Site Metadata ----------------------------------------------------------

export const SITE_NAME = 'KKN Universitas Bengkulu';
export const SITE_DESCRIPTION =
  'Profil kegiatan Kuliah Kerja Nyata (KKN) Universitas Bengkulu — Program pengabdian masyarakat untuk pembangunan desa.';
export const SITE_URL = 'https://kkn-profile.vercel.app';

// --- Navigation -------------------------------------------------------------

export const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang KKN', href: '/tentang' },
  { label: 'Profil Desa', href: '/profil-desa' },
  { label: 'Program Kerja', href: '/program' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Artikel', href: '/artikel' },
  { label: 'Anggota', href: '/anggota' },
  { label: 'Kontak', href: '/kontak' },
];

// --- Contact Information ----------------------------------------------------

export const CONTACT_INFO: ContactInfo = {
  address: 'Desa Contoh, Kecamatan Contoh, Kabupaten Contoh, Provinsi Bengkulu',
  phone: '+62 812-3456-7890',
  email: 'kkn@example.com',
  instagram: 'https://instagram.com/kkn_unib',
  youtube: 'https://youtube.com/@kkn_unib',
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
  batch: 'Periode 104',
  year: '2024',
  startDate: '2024-07-01',
  endDate: '2024-08-15',
  duration: '45 hari',
};
