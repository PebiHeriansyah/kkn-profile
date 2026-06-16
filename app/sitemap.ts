import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/tentang',
    '/program',
    '/timeline',
    '/galeri',
    '/anggota',
    '/kontak',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return staticRoutes;
}
