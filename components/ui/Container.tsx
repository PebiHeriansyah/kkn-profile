import { cn } from '@/lib/utils';

/* ==========================================================================
   Container — Design System Component
   
   Widths:  default (1280px) | narrow (768px) | wide (1440px) | full
   Features: responsive padding, polymorphic element
   ========================================================================== */

type ContainerWidth = 'default' | 'narrow' | 'wide' | 'full';

interface ContainerProps {
  children: React.ReactNode;
  width?: ContainerWidth;
  className?: string;
  as?: React.ElementType;
}

const widthStyles: Record<ContainerWidth, string> = {
  narrow: 'max-w-3xl',    /* 768px — prose, articles */
  default: 'max-w-7xl',   /* 1280px — standard pages */
  wide: 'max-w-[1440px]', /* 1440px — gallery, hero */
  full: 'max-w-none',     /* full width */
};

export function Container({
  children,
  width = 'default',
  className,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        widthStyles[width],
        className,
      )}
    >
      {children}
    </Component>
  );
}
