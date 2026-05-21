import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'disabled';

const variants: Record<Variant, string> = {
  primary:
    'bg-ride-accent text-black hover:bg-[#ff8f26] shadow-[0_8px_24px_rgba(255,122,0,0.35)]',
  secondary: 'border border-ride-border bg-transparent text-white hover:border-ride-accent/50',
  ghost: 'text-ride-muted hover:text-white',
  disabled: 'cursor-not-allowed border border-ride-border bg-ride-elevated/50 text-ride-muted opacity-60',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5';

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, 'href' | 'children' | 'className'>;

type ButtonNativeProps = {
  href?: undefined;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & ComponentProps<'button'>;

export function Button(props: ButtonLinkProps | ButtonNativeProps) {
  const { variant = 'primary', className, children } = props;
  const classes = cn(base, variants[variant], className);

  if ('href' in props && props.href) {
    const { href, variant: _v, className: _c, children: _ch, ...linkRest } = props;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  const { type = 'button', variant: _v2, className: _c2, children: _ch2, ...buttonRest } = props as ButtonNativeProps;
  return (
    <button type={type} className={classes} disabled={variant === 'disabled'} {...buttonRest}>
      {children}
    </button>
  );
}
