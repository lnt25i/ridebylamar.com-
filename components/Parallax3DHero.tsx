'use client';

import { useRef, useEffect, type ReactNode } from 'react';

import { useCoarsePointer } from '@/hooks/useCoarsePointer';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

export function Parallax3DHero({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const coarse = useCoarsePointer();
  const disableParallax = reduced || coarse;

  useEffect(() => {
    const el = ref.current;
    if (!el || disableParallax) {
      if (el) el.style.transform = '';
      return;
    }

    const onMove = (e: globalThis.MouseEvent) => {
      const rx = (e.clientY / window.innerHeight - 0.5) * -6;
      const ry = (e.clientX / window.innerWidth - 0.5) * 6;
      el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => {
      el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    el.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.style.transform = '';
    };
  }, [disableParallax]);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={
        disableParallax
          ? undefined
          : {
              transformStyle: 'preserve-3d',
              transition: 'transform 0.1s ease',
              willChange: 'transform',
            }
      }
    >
      {children}
    </div>
  );
}
