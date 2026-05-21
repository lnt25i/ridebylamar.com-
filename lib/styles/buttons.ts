import { cn } from '@/lib/cn';

/** Marks RIDE buttons so GlassCard prose link styles do not override CTA colors */
export const RIDE_BUTTON_ATTR = 'data-ride-btn';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'disabled'
  | 'comingSoon'
  | 'store'
  | 'icon'
  | 'link';

export const buttonBase = cn(
  'inline-flex items-center justify-center gap-2 rounded-full text-center',
  'min-h-[46px] md:min-h-[50px] px-5 py-2.5 text-sm font-extrabold tracking-[0.02em]',
  'transition-[background-color,border-color,box-shadow,color,transform] duration-200',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ride-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ride-bg',
  'disabled:pointer-events-none',
  'motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100'
);

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: cn(
    'btn-3d bg-ride-accent text-[#0A0A0A] !text-[#0A0A0A]',
    'shadow-[0_8px_24px_rgba(255,122,0,0.32)]',
    'hover:bg-[#ff8f26] hover:!text-[#0A0A0A] hover:shadow-[0_12px_32px_rgba(255,122,0,0.42)] hover:-translate-y-px',
    'active:scale-[0.98] active:!text-[#0A0A0A]'
  ),
  secondary: cn(
    'border border-white/12 bg-ride-elevated/70 text-white backdrop-blur-sm',
    'shadow-[0_4px_20px_rgba(0,0,0,0.25)]',
    'hover:border-ride-accent/45 hover:bg-ride-elevated hover:shadow-[0_8px_28px_rgba(255,122,0,0.12)] hover:-translate-y-px',
    'active:scale-[0.98]'
  ),
  outline: cn(
    'border border-ride-accent/40 bg-transparent text-white',
    'hover:border-ride-accent hover:bg-ride-accent/10 hover:text-white hover:shadow-[0_8px_24px_rgba(255,122,0,0.15)] hover:-translate-y-px',
    'active:scale-[0.98]'
  ),
  ghost: cn(
    'min-h-0 rounded-lg border border-transparent bg-transparent px-3 py-2 text-ride-muted font-semibold',
    'hover:border-ride-border hover:bg-ride-elevated/50 hover:text-white',
    'active:scale-[0.98]'
  ),
  disabled: cn(
    'cursor-not-allowed border border-ride-border/80 bg-ride-elevated/55 text-ride-muted/90',
    'shadow-none opacity-100 hover:translate-y-0'
  ),
  comingSoon: cn(
    'cursor-not-allowed border border-ride-border/80 bg-ride-elevated/60 text-ride-muted',
    'shadow-[0_0_20px_rgba(255,122,0,0.06)] hover:translate-y-0'
  ),
  store: cn(
    'min-h-[52px] min-w-[200px] justify-start rounded-2xl px-4 py-3 text-left font-semibold',
    'border border-ride-border bg-black/40 text-white',
    'hover:border-ride-accent/50 hover:bg-ride-accent/10 hover:-translate-y-px',
    'active:scale-[0.98]'
  ),
  icon: cn(
    'min-h-0 h-10 w-10 rounded-full border border-ride-border bg-ride-elevated/40 p-0 text-white',
    'hover:border-ride-accent/40 hover:bg-ride-accent/10 hover:-translate-y-px',
    'active:scale-[0.98]'
  ),
  link: cn(
    'min-h-0 rounded-none border-0 bg-transparent px-0 py-0 font-semibold text-ride-accent shadow-none',
    'hover:text-[#ff8f26] hover:underline hover:shadow-none hover:translate-y-0',
    'active:scale-100'
  ),
};

export const buttonSizeClasses = {
  default: '',
  sm: 'min-h-[40px] px-4 py-2 text-xs md:min-h-[42px]',
  lg: 'min-h-[48px] px-6 py-3 text-sm md:min-h-[50px] md:text-base',
  header: 'min-h-[40px] px-4 py-2 text-xs md:min-h-[42px]',
  full: 'w-full',
} as const;

export function getButtonClasses(
  variant: ButtonVariant,
  className?: string,
  size: keyof typeof buttonSizeClasses = 'default'
) {
  return cn(buttonBase, buttonVariants[variant], buttonSizeClasses[size], className);
}
