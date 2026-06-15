// ============================================================================
// KKN Profile — Type Definitions
// Central type definitions for all data structures used across the application.
// ============================================================================

// --- Team -------------------------------------------------------------------

export type TeamRole =
  | 'ketua'
  | 'sekretaris'
  | 'bendahara'
  | 'acara'
  | 'humas'
  | 'pdd'
  | 'anggota'
  | 'dpl';

export interface TeamMember {
  id: string;
  name: string;
  npm: string;
  faculty: string;
  major: string;
  role: TeamRole;
  photo: string;
  quote?: string;
}

export interface Supervisor {
  id: string;
  name: string;
  nip: string;
  title: string;
  faculty: string;
  photo: string;
}

// --- Programs ---------------------------------------------------------------

export type ProgramCategory =
  | 'pendidikan'
  | 'kesehatan'
  | 'infrastruktur'
  | 'lingkungan'
  | 'ekonomi'
  | 'sosial-budaya';

export type ProgramStatus = 'selesai' | 'berjalan' | 'direncanakan';

export interface Program {
  id: string;
  title: string;
  slug: string;
  category: ProgramCategory;
  status: ProgramStatus;
  description: string;
  image: string;
  date: string;
  participants?: number;
  location?: string;
}

// --- Articles ---------------------------------------------------------------

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  date: string;
  category: ProgramCategory;
  tags: string[];
}

// --- Village ----------------------------------------------------------------

export interface VillageProfile {
  name: string;
  district: string;       // Kecamatan
  regency: string;        // Kabupaten
  province: string;       // Provinsi
  population: number;
  area: string;           // e.g. "12.5 km²"
  postalCode: string;
  description: string;
  history: string;
  geography: string;
  potential: string[];     // e.g. ["Pertanian", "Perkebunan", "Perikanan"]
  mapEmbedUrl: string;
  images: string[];
}

// --- Timeline ---------------------------------------------------------------

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  category: ProgramCategory;
}

// --- Gallery ----------------------------------------------------------------

export type GalleryMediaType = 'image' | 'video';

export interface GalleryItem {
  id: string;
  type: GalleryMediaType;
  src: string;
  thumbnail: string;
  caption: string;
  date: string;
  category: ProgramCategory;
}

// --- Statistics -------------------------------------------------------------

export interface ImpactStat {
  id: string;
  value: number;
  label: string;
  suffix?: string;        // e.g. "+" or "hari"
}

// --- Navigation -------------------------------------------------------------

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// --- Contact ----------------------------------------------------------------

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  mapEmbedUrl: string;
}

// --- SEO / Metadata ---------------------------------------------------------

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
