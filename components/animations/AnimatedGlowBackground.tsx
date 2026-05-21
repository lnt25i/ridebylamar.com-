'use client';

import { useEffect, useRef } from 'react';

import { animate, trackAnimation } from '@/lib/animations/anime';
import type { Revertible } from '@/lib/animations/anime';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

type AnimatedGlowBackgroundProps = {
  className?: string;
  variant?: 'hero' | 'section';
};

/** Subtle cinematic orange/gold ambient glow — disabled when reduced motion is on. */
export function AnimatedGlowBackground({ className, variant = 'hero' }: AnimatedGlowBackgroundProps) {
  const reduced = useReducedMotion();
  const orbA = useRef<HTMLDivElement>(null);
  const orbB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const a = orbA.current;
    const b = orbB.current;
    const anims: Revertible[] = [];

    if (a) {
      const anim = trackAnimation(
        animate(a, {
          opacity: [0.35, 0.55, 0.35],
          translateX: [0, 24, 0],
          duration: 8000,
          loop: true,
          ease: 'inOutSine',
        })
      );
      if (anim) anims.push(anim);
    }
    if (b) {
      const anim = trackAnimation(
        animate(b, {
          opacity: [0.2, 0.4, 0.2],
          translateX: [0, -20, 0],
          duration: 10000,
          loop: true,
          ease: 'inOutSine',
          delay: 1000,
        })
      );
      if (anim) anims.push(anim);
    }

    return () => anims.forEach((anim) => anim?.revert());
  }, [reduced]);

  if (reduced) return null;

  const size = variant === 'hero' ? 'h-[420px] w-[420px]' : 'h-[280px] w-[280px]';

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      <div
        ref={orbA}
        className={cn(
          'absolute -left-1/4 top-0 rounded-full bg-ride-accent/20 blur-[100px]',
          size
        )}
      />
      <div
        ref={orbB}
        className={cn(
          'absolute -right-1/4 top-1/4 rounded-full bg-amber-500/10 blur-[90px]',
          size
        )}
      />
    </div>
  );
}
