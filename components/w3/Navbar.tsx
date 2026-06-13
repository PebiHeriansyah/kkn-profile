import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/w3-parallax" className="text-xl font-bold tracking-widest uppercase">
              Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#section1" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider">
                Section 1
              </Link>
              <Link href="#section2" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider">
                Section 2
              </Link>
              <Link href="#section3" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider">
                Section 3
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
