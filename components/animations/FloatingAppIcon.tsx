'use client';

import { useEffect, useRef, type ReactNode } from 'react';

import { animate, trackAnimation, type Revertible } from '@/lib/animations/anime';
import { DURATION, EASE_PREMIUM } from '@/lib/animations/config';
import { RideAppIcon } from '@/components/RideAppIcon';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

type FloatingAppIconProps = {
  size?: number;
  className?: string;
  children?: ReactNode;
  /** Soft orbit ring around icon */
  orbit?: boolean;
  entrance?: boolean;
};

export function FloatingAppIcon({
  size = 120,
  className,
  children,
  orbit = true,
  entrance = true,
}: FloatingAppIconProps) {
  const floatRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = floatRef.current;
    if (!el || reduced) return;

    if (entrance) {
      trackAnimation(
        animate(el, {
          opacity: [0, 1],
          scale: [0.92, 1],
          duration: DURATION.slow,
          ease: EASE_PREMIUM,
        })
      );
    }

    const floatAnim: Revertible | null = trackAnimation(
      animate(el, {
        translateY: [-5, 5, -5],
        duration: 6000,
        loop: true,
        ease: 'inOutSine',
      })
    );

    const orbitEl = orbitRef.current;
    let orbitAnim: Revertible | null = null;
    if (orbit && orbitEl) {
      orbitAnim = trackAnimation(
        animate(orbitEl, {
          rotate: 360,
          duration: 14000,
          loop: true,
          ease: 'linear',
        })
      );
    }

    return () => {
      floatAnim?.revert();
      orbitAnim?.revert();
    };
  }, [reduced, entrance, orbit]);

  return (
    <div className={cn('relative inline-flex flex-col items-center', className)}>
      {orbit && !reduced ? (
        <div
          ref={orbitRef}
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(255,122,0,0.22), transparent)',
          }}
          aria-hidden
        />
      ) : null}
      <div className="absolute -inset-4 rounded-full bg-ride-accent/20 blur-2xl transition-opacity duration-500 group-hover:opacity-90" />
      <div
        ref={floatRef}
        className="relative opacity-100"
      >
        <RideAppIcon size={size} className="relative" />
      </div>
      {children}
    </div>
  );
}
