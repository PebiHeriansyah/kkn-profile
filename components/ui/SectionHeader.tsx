import { cn } from '@/lib/utils';

/* ==========================================================================
   SectionHeader — Design System Component
   
   Variants:  default (gold accent) | dark (white text for dark sections)
   Alignment: center | left
   Features:  eyebrow label, decorative accent bar, optional subtitle
   ========================================================================== */

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  variant?: 'default' | 'dark';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  variant = 'default',
  className,
}: SectionHeaderProps) {
  const isDark = variant === 'dark';
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'mb-12 sm:mb-16',
        isCenter ? 'text-center' : 'text-left',
        className,
      )}
    >
      {/* Decorative accent line */}
      <div
        className={cn(
          'accent-line mb-5',
          isCenter && 'accent-line--center',
        )}
        aria-hidden="true"
      />

      {/* Eyebrow label */}
      {eyebrow && (
        <p
          className={cn(
            'mb-3 font-mono text-label font-semibold uppercase tracking-[0.2em]',
            isDark ? 'text-emas' : 'text-emas-tua',
          )}
        >
          {eyebrow}
        </p>
      )}

      {/* Title */}
      <h2
        className={cn(
          'text-heading font-bold tracking-tight sm:text-display',
          isDark ? 'text-white' : 'text-gelap',
        )}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-body leading-relaxed sm:text-subheading',
            isCenter && 'mx-auto',
            isDark ? 'text-white/60' : 'text-tanah',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
