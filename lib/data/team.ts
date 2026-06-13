// ============================================================================
// KKN Profile — Team Member Data
// All team member and supervisor information.
// Replace placeholder data with actual KKN team information.
// ============================================================================

import type { TeamMember, Supervisor } from '@/lib/types';

export const supervisor: Supervisor = {
  id: 'dpl-001',
  name: 'Dr. Nama Dosen, M.Pd.',
  nip: '198501012010011001',
  title: 'Dosen Pembimbing Lapangan',
  faculty: 'Fakultas Keguruan dan Ilmu Pendidikan',
  photo: '/images/team/dpl.jpg',
};

export const teamMembers: TeamMember[] = [
  {
    id: 'member-001',
    name: 'Nama Ketua',
    npm: 'G1A023001',
    faculty: 'Fakultas Teknik',
    major: 'Teknik Informatika',
    role: 'ketua',
    photo: '/images/team/member-001.jpg',
    quote: 'KKN mengajarkan saya tentang pengabdian nyata kepada masyarakat.',
  },
  {
    id: 'member-002',
    name: 'Nama Sekretaris',
    npm: 'G1A023002',
    faculty: 'Fakultas Hukum',
    major: 'Ilmu Hukum',
    role: 'sekretaris',
    photo: '/images/team/member-002.jpg',
  },
  {
    id: 'member-003',
    name: 'Nama Bendahara',
    npm: 'G1A023003',
    faculty: 'Fakultas Ekonomi dan Bisnis',
    major: 'Akuntansi',
    role: 'bendahara',
    photo: '/images/team/member-003.jpg',
  },
  {
    id: 'member-004',
    name: 'Nama Anggota 1',
    npm: 'G1A023004',
    faculty: 'Fakultas Pertanian',
    major: 'Agroteknologi',
    role: 'anggota',
    photo: '/images/team/member-004.jpg',
  },
  {
    id: 'member-005',
    name: 'Nama Anggota 2',
    npm: 'G1A023005',
    faculty: 'Fakultas MIPA',
    major: 'Matematika',
    role: 'anggota',
    photo: '/images/team/member-005.jpg',
  },
  {
    id: 'member-006',
    name: 'Nama Anggota 3',
    npm: 'G1A023006',
    faculty: 'Fakultas Ilmu Sosial dan Ilmu Politik',
    major: 'Administrasi Publik',
    role: 'anggota',
    photo: '/images/team/member-006.jpg',
  },
  {
    id: 'member-007',
    name: 'Nama Anggota 4',
    npm: 'G1A023007',
    faculty: 'Fakultas Kedokteran',
    major: 'Kedokteran',
    role: 'anggota',
    photo: '/images/team/member-007.jpg',
  },
  {
    id: 'member-008',
    name: 'Nama Anggota 5',
    npm: 'G1A023008',
    faculty: 'Fakultas Keguruan dan Ilmu Pendidikan',
    major: 'Pendidikan Bahasa Inggris',
    role: 'anggota',
    photo: '/images/team/member-008.jpg',
  },
  {
    id: 'member-009',
    name: 'Nama Anggota 6',
    npm: 'G1A023009',
    faculty: 'Fakultas Teknik',
    major: 'Teknik Sipil',
    role: 'anggota',
    photo: '/images/team/member-009.jpg',
  },
  {
    id: 'member-010',
    name: 'Nama Anggota 7',
    npm: 'G1A023010',
    faculty: 'Fakultas Pertanian',
    major: 'Teknologi Industri Pertanian',
    role: 'anggota',
    photo: '/images/team/member-010.jpg',
  },
  {
    id: 'member-011',
    name: 'Nama Anggota 8',
    npm: 'G1A023011',
    faculty: 'Fakultas MIPA',
    major: 'Kimia',
    role: 'anggota',
    photo: '/images/team/member-011.jpg',
  },
  {
    id: 'member-012',
    name: 'Nama Anggota 9',
    npm: 'G1A023012',
    faculty: 'Fakultas Hukum',
    major: 'Ilmu Hukum',
    role: 'anggota',
    photo: '/images/team/member-012.jpg',
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
