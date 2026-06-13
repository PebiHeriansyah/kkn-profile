// ============================================================================
// KKN Profile — Utility Functions
// Shared helper functions used across the application.
// ============================================================================

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with conflict resolution.
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string to Indonesian locale.
 * e.g. "2024-07-15" → "15 Juli 2024"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Format a date string to short Indonesian format.
 * e.g. "2024-07-15" → "15 Jul 2024"
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/**
 * Generate a URL-friendly slug from a string.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Truncate text to a maximum character length, adding ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

/**
 * Map a ProgramCategory to its Indonesian display label.
 */
export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    pendidikan: 'Pendidikan',
    kesehatan: 'Kesehatan',
    infrastruktur: 'Infrastruktur',
    lingkungan: 'Lingkungan',
    ekonomi: 'Ekonomi',
    'sosial-budaya': 'Sosial & Budaya',
  };
  return labels[category] ?? category;
}

/**
 * Map a ProgramStatus to its Indonesian display label.
 */
export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    selesai: 'Selesai',
    berjalan: 'Sedang Berjalan',
    direncanakan: 'Direncanakan',
  };
  return labels[status] ?? status;
}
