import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { getAllArticleSlugs } from '@/lib/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/tentang',
    '/profil-desa',
    '/program',
    '/timeline',
    '/galeri',
    '/artikel',
    '/anggota',
    '/kontak',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const articleRoutes = getAllArticleSlugs().map((slug) => ({
    url: `${SITE_URL}/artikel/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
