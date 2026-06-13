import Link from 'next/link';
import { Container, Button } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center pt-20">
      <Container className="text-center">
        <p className="font-mono text-6xl font-bold text-emas">404</p>
        <h1 className="mt-4 text-display font-bold text-gelap">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-4 text-lg text-tanah">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button variant="secondary">Kembali ke Beranda</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
