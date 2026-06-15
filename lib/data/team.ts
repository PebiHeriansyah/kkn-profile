// ============================================================================
// KKN Profile — Team Member Data
// KKN Kelompok 27 Universitas Bengkulu Periode 108
// Desa Lokasi Baru, Kec. Air Periukan, Kab. Seluma, Bengkulu
// ============================================================================

import type { TeamMember, Supervisor } from '@/lib/types';

export const supervisor: Supervisor = {
  id: 'dpl-001',
  name: 'Dosen Pembimbing Lapangan',
  nip: '-',
  title: 'Dosen Pembimbing Lapangan',
  faculty: 'Universitas Bengkulu',
  photo: '/images/team/dpl.jpg',
};

export const teamMembers: TeamMember[] = [
  {
    id: 'member-001',
    name: 'Iqbal Haris Maulana Efendi',
    npm: 'B1A023300',
    faculty: 'Fakultas Hukum',
    major: 'Ilmu Hukum',
    role: 'ketua',
    photo: '/images/team/member-001.jpg',
    quote: 'Bersatu dalam karya, tumbuh bersama masyarakat.',
  },
  {
    id: 'member-002',
    name: 'Meliya Putriani',
    npm: 'B1A023057',
    faculty: 'Fakultas Hukum',
    major: 'Ilmu Hukum',
    role: 'sekretaris',
    photo: '/images/team/member-002.jpg',
  },
  {
    id: 'member-003',
    name: 'Yeda Mardianti Putri',
    npm: 'C1A023066',
    faculty: 'Fakultas Pertanian',
    major: 'Agribisnis',
    role: 'bendahara',
    photo: '/images/team/member-003.jpg',
  },
  {
    id: 'member-004',
    name: 'Pebi Heriansyah',
    npm: 'G1A023003',
    faculty: 'Fakultas Teknik',
    major: 'Teknik Informatika',
    role: 'acara',
    photo: '/images/team/member-004.jpg',
  },
  {
    id: 'member-005',
    name: 'Nabila Putri Laudy',
    npm: 'H1A023017',
    faculty: 'Fakultas Ilmu Sosial dan Ilmu Politik',
    major: 'Ilmu Komunikasi',
    role: 'acara',
    photo: '/images/team/member-005.jpg',
  },
  {
    id: 'member-006',
    name: 'Ahmad Mubarok',
    npm: 'E1J023037',
    faculty: 'Fakultas Keguruan dan Ilmu Pendidikan',
    major: 'Pendidikan Jasmani',
    role: 'humas',
    photo: '/images/team/member-006.jpg',
  },
  {
    id: 'member-007',
    name: 'Rizki Anugerah Utami',
    npm: 'D1A023024',
    faculty: 'Fakultas Ekonomi dan Bisnis',
    major: 'Manajemen',
    role: 'humas',
    photo: '/images/team/member-007.jpg',
  },
  {
    id: 'member-008',
    name: 'Aldi Jansel',
    npm: 'D1C023050',
    faculty: 'Fakultas Ekonomi dan Bisnis',
    major: 'Akuntansi',
    role: 'pdd',
    photo: '/images/team/member-008.jpg',
  },
  {
    id: 'member-009',
    name: 'Putri Mayorga Amanda',
    npm: 'E1J023077',
    faculty: 'Fakultas Keguruan dan Ilmu Pendidikan',
    major: 'Pendidikan Jasmani',
    role: 'pdd',
    photo: '/images/team/member-009.jpg',
  },
];

// --- Helper functions -------------------------------------------------------

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find((m) => m.id === id);
}

export function getTeamMembersByRole(role: TeamMember['role']): TeamMember[] {
  return teamMembers.filter((m) => m.role === role);
}

export function getLeadership(): TeamMember[] {
  return teamMembers.filter((m) =>
    ['ketua', 'sekretaris', 'bendahara'].includes(m.role)
  );
}
