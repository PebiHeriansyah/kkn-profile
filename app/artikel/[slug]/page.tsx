import { Container } from '@/components/ui';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/data/articles';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Generate static paths for all articles
export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

// Dynamic metadata per article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Artikel Tidak Ditemukan' };

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <section className="pt-28 pb-20">
      <Container>
        <article className="mx-auto max-w-3xl">
          <p className="mb-2 font-mono text-caption text-tanah">
            {formatDate(article.date)}
          </p>
          <h1 className="text-display font-bold text-gelap">{article.title}</h1>
          <p className="mt-4 text-lg text-tanah">{article.excerpt}</p>
          <hr className="my-8 border-gray-200" />
          <div className="prose prose-lg text-gelap/80">
            {article.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}
