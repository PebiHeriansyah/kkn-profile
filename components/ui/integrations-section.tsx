"use client";

import { ShadcnButton as Button } from "@/components/ui/shadcn-button";
import Image from "next/image";
import Link from "next/link";

// Using real professional logos for partners/integrations
const integrations = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://cdn-icons-png.flaticon.com/512/174/174857.png", // LinkedIn
  "https://cdn-icons-png.flaticon.com/512/2111/2111615.png", // Slack
  "https://cdn-icons-png.flaticon.com/512/174/174872.png", // Spotify
  "https://cdn-icons-png.flaticon.com/512/733/733547.png", // Facebook
  "https://cdn-icons-png.flaticon.com/512/5968/5968381.png", // Stripe
  "https://cdn-icons-png.flaticon.com/512/174/174855.png", // Instagram
  "https://cdn-icons-png.flaticon.com/512/888/888853.png", // Dropbox
  "https://cdn-icons-png.flaticon.com/512/906/906324.png", // Jira
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", // Square
  "https://cdn-icons-png.flaticon.com/512/732/732218.png", // Shopify
  "https://cdn-icons-png.flaticon.com/512/5968/5968755.png", // Zapier
  "https://cdn-icons-png.flaticon.com/512/5968/5968520.png", // Google Drive
  "https://cdn-icons-png.flaticon.com/512/1384/1384060.png", // YouTube
  "https://cdn-icons-png.flaticon.com/512/5968/5968885.png", // Airtable
  "https://cdn-icons-png.flaticon.com/512/2111/2111370.png", // Discord
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", // Microsoft
];

export default function IntegrationsSection() {
  return (
    <section className="max-w-7xl mx-auto my-20 px-6 grid md:grid-cols-2 gap-10 items-center border border-gray-200 dark:border-gray-700 p-6 rounded-3xl bg-background shadow-sm">
      {/* Left Side */}
      <div>
        <p className="uppercase text-sm font-semibold text-emas-tua dark:text-emas mb-2 tracking-wider">
          Mitra Kolaborasi
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-2 mb-6 leading-tight text-gelap dark:text-white">
          Sinergi Membangun Desa
        </h2>
        <p className="text-body text-tanah dark:text-tanah-muda mb-8 text-lg">
          Didukung oleh berbagai instansi dan platform digital terkemuka untuk memastikan setiap program KKN berjalan dengan dampak maksimal dan berkelanjutan.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-hijau-tua text-white px-6 py-5 rounded-xl font-medium shadow-md hover:bg-hijau-muda">
            <Link href="/kontak">Jalin Kerjasama</Link>
          </Button>
          <Button asChild variant="outline" className="border-2 border-hijau-tua/20 dark:border-white/20 px-6 py-5 rounded-xl font-medium">
            <Link href="/tentang">Pelajari Lebih Lanjut →</Link>
          </Button>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 sm:gap-4 place-items-center">
        {integrations.map((url, idx) => (
          <div
            key={idx}
            className="relative w-14 h-14 sm:w-16 sm:h-16 p-2 bg-white dark:bg-gray-800/80 shadow-md border-2 border-gray-100 dark:border-gray-700 transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:z-10"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <Image
              src={url}
              alt={`mitra-integration-${idx}`}
              fill
              className="object-contain p-2.5 filter drop-shadow-sm"
              sizes="(max-width: 768px) 56px, 64px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
