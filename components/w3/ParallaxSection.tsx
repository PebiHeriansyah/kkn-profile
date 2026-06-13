interface ParallaxSectionProps {
  id?: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
  height?: string;
}

export function ParallaxSection({ id, imageUrl, title, subtitle, height = 'h-[100vh]' }: ParallaxSectionProps) {
  return (
    <div
      id={id}
      className={`relative flex items-center justify-center bg-fixed bg-center bg-no-repeat bg-cover ${height}`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Centered Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h2 className="bg-gray-900/80 text-white text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase px-8 py-5 rounded shadow-xl backdrop-blur-sm mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white text-lg md:text-xl font-medium tracking-wide bg-black/50 px-6 py-2 rounded-full backdrop-blur-sm">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
