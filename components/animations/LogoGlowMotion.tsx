'use client';

import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

export function LogoGlowMotion({
  children,
  className,
  pulse,
}: {
  children: ReactNode;
  className?: string;
  pulse?: boolean;
}) {
  return (
    <span
      className={cn(
        'inline-block',
        pulse && 'drop-shadow-[0_0_28px_rgba(255,149,0,0.35)]',
        className
      )}
    >
      {children}
    </span>
  );
}
