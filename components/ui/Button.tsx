import { cn } from '@/lib/utils';
import Link from 'next/link';

/* ==========================================================================
   Button — Design System Component
   
   Variants:  primary | secondary | outline | ghost | danger | link
   Sizes:     xs | sm | md | lg | xl
   Features:  icon support, loading state, full-width, as-link
   ========================================================================== */

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'link';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

// --- Variant Styles ---------------------------------------------------------

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-emas text-gelap',
    'hover:bg-emas-muda hover:shadow-glow-emas',
    'active:bg-emas-tua',
    'focus-visible:ring-emas',
  ].join(' '),

  secondary: [
    'bg-hijau-tua text-white',
    'hover:bg-hijau-muda',
    'active:bg-hijau-tua',
    'focus-visible:ring-hijau-tua',
  ].join(' '),

  outline: [
    'border-2 border-hijau-tua text-hijau-tua bg-transparent',
    'hover:bg-hijau-tua hover:text-white',
    'active:bg-hijau-muda',
    'focus-visible:ring-hijau-tua',
  ].join(' '),

  ghost: [
    'text-hijau-tua bg-transparent',
    'hover:bg-hijau-tua/8',
    'active:bg-hijau-tua/15',
    'focus-visible:ring-hijau-tua',
  ].join(' '),

  danger: [
    'bg-error text-white',
    'hover:bg-error/90',
    'active:bg-error/80',
    'focus-visible:ring-error',
  ].join(' '),

  link: [
    'text-hijau-tua underline-offset-4',
    'hover:underline hover:text-hijau-muda',
    'p-0 h-auto font-medium',
  ].join(' '),
};

// --- Size Styles ------------------------------------------------------------

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'h-7 px-2.5 text-label gap-1 rounded-sm',
  sm: 'h-9 px-4 text-caption gap-1.5 rounded-md',
  md: 'h-11 px-6 text-body gap-2 rounded-md',
  lg: 'h-12 px-8 text-body gap-2 rounded-lg',
  xl: 'h-14 px-10 text-subheading gap-2.5 rounded-lg',
};

// --- Loading Spinner --------------------------------------------------------

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor" strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

// --- Button Component -------------------------------------------------------

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  iconLeft,
  iconRight,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    // Base
    'inline-flex items-center justify-center font-semibold whitespace-nowrap',
    'transition-all duration-200 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'cursor-pointer select-none',
    // Variant & Size
    variantStyles[variant],
    variant !== 'link' && sizeStyles[size],
    // Modifiers
    fullWidth && 'w-full',
    loading && 'pointer-events-none opacity-70',
    className,
  );

  const content = (
    <>
      {loading && <Spinner />}
      {!loading && iconLeft}
      <span>{children}</span>
      {!loading && iconRight}
    </>
  );

  // Render as Link if href is provided
  if ('href' in props && props.href) {
    const { href, target, rel, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} disabled={loading || buttonProps.disabled} {...buttonProps}>
      {content}
    </button>
  );
}
