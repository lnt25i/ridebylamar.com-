'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { animate } from '@/lib/animations/anime';
import { DURATION, EASE_PREMIUM } from '@/lib/animations/config';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

type AnimatedNavLinkProps = {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
};

export function AnimatedNavLink({ href, label, active, onClick }: AnimatedNavLinkProps) {
  const lineRef = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const line = lineRef.current;
    if (!line || reduced) return;
    animate(line, {
      scaleX: active ? 1 : 0,
      opacity: active ? 1 : 0,
      duration: DURATION.fast,
      ease: EASE_PREMIUM,
    });
  }, [active, reduced]);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'group relative rounded-lg px-2.5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ride-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ride-bg',
        active ? 'text-ride-accent' : 'text-ride-muted hover:text-white'
      )}
      onMouseEnter={() => {
        if (reduced) return;
        const line = lineRef.current;
        if (line && !active) {
          animate(line, { scaleX: 0.85, opacity: 1, duration: 250, ease: EASE_PREMIUM });
        }
      }}
      onMouseLeave={() => {
        if (reduced) return;
        const line = lineRef.current;
        if (line && !active) {
          animate(line, { scaleX: 0, opacity: 0, duration: 250, ease: EASE_PREMIUM });
        }
      }}
    >
      {label}
      <span
        ref={lineRef}
        className="absolute bottom-0 left-2.5 right-2.5 h-px origin-left bg-ride-accent"
        style={
          reduced
            ? {
                transform: active ? 'scaleX(1)' : 'scaleX(0)',
                opacity: active ? 1 : 0,
                boxShadow: active ? '0 0 12px rgba(255,122,0,0.45)' : undefined,
              }
            : {
                transform: 'scaleX(0)',
                opacity: 0,
                boxShadow: active ? '0 0 12px rgba(255,122,0,0.45)' : undefined,
              }
        }
      />
    </Link>
  );
}
