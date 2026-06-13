import type { Metadata } from 'next';
import { Navbar } from '@/components/w3/Navbar';
import { ParallaxSection } from '@/components/w3/ParallaxSection';
import { ContentSection } from '@/components/w3/ContentSection';
import { Footer } from '@/components/w3/Footer';

export const metadata: Metadata = {
  title: 'W3Schools Parallax Demo (Next.js 15)',
  description: 'A modern recreation of the classic W3Schools CSS Parallax effect using Next.js 15 and Tailwind CSS.',
};

export default function W3ParallaxDemo() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main>
        {/* Parallax 1 */}
        <ParallaxSection
          id="section1"
          imageUrl="https://www.unib.ac.id/wp-content/uploads/2021/11/rektorat-blur.jpg"
          title="Universitas Bengkulu"
          subtitle="Gedung Rektorat UNIB"
          height="h-screen"
        />

        {/* Content 1 */}
        <ContentSection title="Parallax Scrolling Effect">
          <p>
            Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. This effect is used to create a 3D effect and add depth to a webpage.
          </p>
          <p>
            This demo recreates the classic W3Schools CSS Parallax effect using <strong>Next.js 15</strong> and <strong>Tailwind CSS</strong>. Instead of writing custom CSS, we leverage Tailwind's utility classes like <code>bg-fixed</code>, <code>bg-center</code>, and <code>bg-cover</code> to achieve the same smooth, cross-browser parallax experience.
          </p>
        </ContentSection>

        {/* Parallax 2 */}
        <ParallaxSection
          id="section2"
          imageUrl="https://www.unib.ac.id/wp-content/uploads/2026/06/6_11zon-2026-06-11T080051.185-scaled.jpg"
          title="Fasilitas Kampus"
          subtitle="Lingkungan Akademik yang Kondusif"
          height="h-[400px] md:h-[600px]"
        />

        {/* Content 2 */}
        <ContentSection title="Responsive Design" bgDark>
          <p>
            Just like the original tutorial, this page is fully responsive. The background images scale beautifully on mobile devices, and the text adjusts its size for optimal readability.
          </p>
          <p>
            The use of modern typography and a clean, minimalist layout elevates the aesthetic to a professional standard, suitable for landing pages, portfolios, or NGO profiles.
          </p>
        </ContentSection>

        {/* Parallax 3 */}
        <ParallaxSection
          id="section3"
          imageUrl="https://www.unib.ac.id/wp-content/uploads/2026/06/8_11zon-2026-06-11T081858.746-scaled.jpg"
          title="Berprestasi & Berbudaya"
          subtitle="Tumbuh Bersama Universitas Bengkulu"
          height="h-[400px] md:h-[600px]"
        />

        {/* Content 3 */}
        <ContentSection title="Component-Based Architecture">
          <p>
            By building this in Next.js, we can encapsulate the parallax logic into a reusable <code>&lt;ParallaxSection /&gt;</code> component. This allows us to easily drop in new parallax sections anywhere in our application by simply passing an image URL and text prop.
          </p>
        </ContentSection>

      </main>

      <Footer />
    </div>
  );
}
