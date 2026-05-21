'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { Button, type ButtonVariant } from '@/components/ui/Button';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

type AnimatedButtonProps = {
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

const SPRING = { type: 'spring' as const, stiffness: 400, damping: 20 };

export function AnimatedButton({
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
}: AnimatedButtonProps) {
  const reduced = useReducedMotion();
  const isInactive = Boolean(disabled || comingSoon || variant === 'disabled' || variant === 'comingSoon');
  const fullWidth = className?.includes('w-full');
  const isPrimary = variant === 'primary' && !isInactive;
  const isOutlineOrSecondary =
    !isInactive && (variant === 'outline' || variant === 'secondary');

  const button = (
    <Button
      variant={variant}
      size={size}
      href={href}
      external={external}
      type={type}
      disabled={disabled}
      comingSoon={comingSoon}
      aria-label={ariaLabel}
      className={cn(isPrimary && 'relative z-[1]', className)}
    >
      {children}
    </Button>
  );

  if (reduced || isInactive) {
    return (
      <span className={cn('inline-flex max-w-full', fullWidth && 'w-full')}>{button}</span>
    );
  }

  if (isPrimary) {
    return (
      <motion.span
        className={cn(
          'inline-flex max-w-full overflow-hidden rounded-full',
          fullWidth && 'w-full'
        )}
        whileHover={{
          scale: 1.04,
          boxShadow: '0 8px 32px rgba(255, 149, 0, 0.45)',
        }}
        whileTap={{ scale: 0.97 }}
        transition={SPRING}
        style={{ position: 'relative', display: 'inline-flex' }}
      >
        <motion.span
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-full"
          aria-hidden
        >
          <motion.span
            className="absolute top-0 h-full w-[60%]"
            style={{
              left: '-100%',
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
            }}
            initial={{ left: '-100%' }}
            whileHover={{ left: '150%' }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
          />
        </motion.span>
        {button}
      </motion.span>
    );
  }

  if (isOutlineOrSecondary) {
    return (
      <motion.span
        className={cn(
          'group inline-flex max-w-full rounded-full',
          fullWidth && 'w-full',
          variant === 'outline' &&
            '[&_[data-ride-btn]]:transition-colors [&_[data-ride-btn]]:duration-200 hover:[&_[data-ride-btn]]:border-[#FF9500] hover:[&_[data-ride-btn]]:text-[#FF9500]'
        )}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
        style={{ display: 'inline-flex' }}
      >
        {button}
      </motion.span>
    );
  }

  return (
    <motion.span
      className={cn('inline-flex max-w-full', fullWidth && 'w-full')}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={SPRING}
    >
      {button}
    </motion.span>
  );
}

/** @deprecated Use AnimatedButton or Button — kept for existing imports */
export const MotionButton = AnimatedButton;
