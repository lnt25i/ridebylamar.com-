'use client';

import Link from 'next/link';
import { type ReactNode } from 'react';

import {
  RIDE_BUTTON_ATTR,
  type ButtonVariant,
  getButtonClasses,
} from '@/lib/styles/buttons';
import { cn } from '@/lib/cn';

export type { ButtonVariant };

type ButtonProps = {
  variant?: ButtonVariant;
  size?: 'default' | 'sm' | 'lg' | 'header' | 'full';
  className?: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  comingSoon?: boolean;
  'aria-label'?: string;
};

function resolveVariant(
  variant: ButtonVariant,
  disabled?: boolean,
  comingSoon?: boolean
): ButtonVariant {
  if (comingSoon) return 'comingSoon';
  if (disabled) return 'disabled';
  return variant;
}

export function Button({
  variant = 'primary',
  size = 'default',
  className,
  children,
  href,
  external,
  type = 'button',
  disabled,
  comingSoon,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const resolved = resolveVariant(variant, disabled, comingSoon);
  const classes = getButtonClasses(resolved, className, size);
  const isInactive = resolved === 'disabled' || resolved === 'comingSoon' || disabled;

  if (href && !isInactive) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...{ [RIDE_BUTTON_ATTR]: true }}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...{ [RIDE_BUTTON_ATTR]: true }} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href && isInactive) {
    return (
      <span
        className={classes}
        {...{ [RIDE_BUTTON_ATTR]: true }}
        role="button"
        aria-disabled="true"
        aria-label={ariaLabel}
      >
        {children}
      </span>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={isInactive}
      {...{ [RIDE_BUTTON_ATTR]: true }}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

type StoreButtonProps = {
  icon: ReactNode;
  label: string;
  href?: string;
  comingSoonLabel: string;
  className?: string;
};

export function StoreButton({ icon, label, href, comingSoonLabel, className }: StoreButtonProps) {
  const active = Boolean(href?.trim());

  const content = (
    <>
      <span className="shrink-0 text-white" aria-hidden>
        {icon}
      </span>
      <span className="text-left text-sm leading-tight">
        <span
          className={cn(
            'block text-[10px] font-bold uppercase tracking-wide',
            active ? 'text-ride-muted' : 'text-ride-accent/90'
          )}
        >
          {active ? 'Download' : comingSoonLabel}
        </span>
        <span className={cn('font-extrabold', active ? 'text-white' : 'text-white/90')}>{label}</span>
      </span>
    </>
  );

  if (active && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={getButtonClasses('store', className)}
        {...{ [RIDE_BUTTON_ATTR]: true }}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={getButtonClasses('comingSoon', cn('pointer-events-none opacity-90', className))}
      aria-disabled
      {...{ [RIDE_BUTTON_ATTR]: true }}
    >
      {content}
    </div>
  );
}
