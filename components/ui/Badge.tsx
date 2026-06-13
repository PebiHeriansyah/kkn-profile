import { cn } from '@/lib/utils';
import { getCategoryLabel, getStatusLabel } from '@/lib/utils';
import type { ProgramCategory, ProgramStatus } from '@/lib/types';

/* ==========================================================================
   Badge — Design System Component
   
   Variants:  default | category | status | outline
   Sizes:     sm | md
   Features:  dot indicator, category auto-colors, status auto-colors
   ========================================================================== */

type BadgeVariant = 'default' | 'category' | 'status' | 'outline';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  category?: ProgramCategory;
  status?: ProgramStatus;
  dot?: boolean;
  className?: string;
}

// --- Category Color Map (harmonised with design system) ---------------------

const categoryColors: Record<ProgramCategory, { bg: string; text: string; dot: string }> = {
  pendidikan:     { bg: 'bg-blue-50',    text: 'text-blue-700',    dot: 'bg-blue-500' },
  kesehatan:      { bg: 'bg-rose-50',    text: 'text-rose-700',    dot: 'bg-rose-500' },
  infrastruktur:  { bg: 'bg-amber-50',   text: 'text-amber-700',   dot: 'bg-amber-500' },
  lingkungan:     { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  ekonomi:        { bg: 'bg-violet-50',  text: 'text-violet-700',  dot: 'bg-violet-500' },
  'sosial-budaya': { bg: 'bg-pink-50',   text: 'text-pink-700',    dot: 'bg-pink-500' },
};

// --- Status Color Map -------------------------------------------------------

const statusColors: Record<ProgramStatus, { bg: string; text: string; dot: string }> = {
  selesai:      { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  berjalan:     { bg: 'bg-amber-50',   text: 'text-amber-700',   dot: 'bg-amber-500' },
  direncanakan: { bg: 'bg-gray-100',   text: 'text-gray-600',    dot: 'bg-gray-400' },
};

// --- Size Styles ------------------------------------------------------------

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-label gap-1',
  md: 'px-3 py-1 text-caption gap-1.5',
};

// --- Badge Component --------------------------------------------------------

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  category,
  status,
  dot = false,
  className,
}: BadgeProps) {
  let colorClasses = 'bg-kapur text-tanah';
  let dotColor = 'bg-tanah';

  if (variant === 'category' && category) {
    const c = categoryColors[category];
    colorClasses = `${c.bg} ${c.text}`;
    dotColor = c.dot;
  } else if (variant === 'status' && status) {
    const s = statusColors[status];
    colorClasses = `${s.bg} ${s.text}`;
    dotColor = s.dot;
  } else if (variant === 'outline') {
    colorClasses = 'bg-transparent border border-tanah/30 text-tanah';
    dotColor = 'bg-tanah';
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium leading-none',
        sizeStyles[size],
        colorClasses,
        className,
      )}
    >
      {dot && (
        <span
          className={cn('h-1.5 w-1.5 rounded-full shrink-0', dotColor)}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
