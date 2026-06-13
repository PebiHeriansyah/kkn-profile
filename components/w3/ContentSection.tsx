import { ReactNode } from 'react';

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  bgDark?: boolean;
}

export function ContentSection({ title, children, bgDark = false }: ContentSectionProps) {
  return (
    <div className={`py-20 px-6 md:px-12 text-center ${bgDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl uppercase tracking-widest font-light mb-8">{title}</h3>
        <div className="text-lg leading-relaxed font-light text-justify md:text-center space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
