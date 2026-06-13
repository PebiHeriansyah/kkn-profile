export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-lg mb-4 uppercase tracking-widest font-semibold text-gray-200">W3Schools Parallax Demo</p>
        <p className="mb-6 max-w-2xl mx-auto font-light">
          Built with Next.js 15 & Tailwind CSS. Inspired by the classic W3Schools CSS Parallax tutorial.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
        <p className="mt-8 text-sm">
          &copy; {new Date().getFullYear()} Modern Demo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
