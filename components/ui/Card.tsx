import { cn } from '@/lib/utils';
import Image from 'next/image';

/* ==========================================================================
   Card — Design System Component
   
   Variants:  default | elevated | outlined | filled | glass
   Features:  padding scale, hover lift, image slot, header/body/footer slots
   ========================================================================== */

type CardVariant = 'default' | 'elevated' | 'outlined' | 'filled' | 'glass';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  hover?: boolean;
  className?: string;
}

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'video' | 'square' | 'wide';
  className?: string;
}

interface CardSlotProps {
  children: React.ReactNode;
  className?: string;
}

// --- Variant Styles ---------------------------------------------------------

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-background border border-kapur-gelap shadow-card',
  elevated: 'bg-background shadow-lg',
  outlined: 'bg-transparent border-2 border-kapur-gelap',
  filled: 'bg-kapur border border-kapur-gelap/50',
  glass: 'bg-background/60 backdrop-blur-md border border-white/40 shadow-sm',
};

const paddingStyles: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

// --- Card Root --------------------------------------------------------------

export function Card({
  children,
  variant = 'default',
  padding = 'none',
  hover = true,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        'group overflow-hidden rounded-2xl transition-all duration-300',
        variantStyles[variant],
        paddingStyles[padding],
        hover && 'hover:-translate-y-1 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
}

// --- Compound Components ----------------------------------------------------

Card.Image = function CardImage({
  src,
  alt,
  aspectRatio = 'video',
  className,
}: CardImageProps) {
  const ratioStyles = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
  };

  return (
    <div className={cn('relative overflow-hidden w-full', ratioStyles[aspectRatio], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};

// --- Card.Header — Top section with optional eyebrow ----------------------

Card.Header = function CardHeader({ children, className }: CardSlotProps) {
  return (
    <div className={cn('px-6 pt-5 pb-2', className)}>
      {children}
    </div>
  );
};

// --- Card.Body — Main content area -----------------------------------------

Card.Body = function CardBody({ children, className }: CardSlotProps) {
  return (
    <div className={cn('px-6 py-3', className)}>
      {children}
    </div>
  );
};

// --- Card.Footer — Bottom area with actions --------------------------------

Card.Footer = function CardFooter({ children, className }: CardSlotProps) {
  return (
    <div className={cn('px-6 pt-3 pb-5 border-t border-kapur-gelap/50 mt-auto', className)}>
      {children}
    </div>
  );
};
