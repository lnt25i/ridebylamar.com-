'use client';

import { useRef, type ElementType, type ReactNode } from 'react';

import { Card3DTilt } from '@/components/Card3DTilt';
import { animate } from '@/lib/animations/anime';
import { DURATION, EASE_PREMIUM } from '@/lib/animations/config';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

type HoverLiftCardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article';
};

export function HoverLiftCard({ title, children, className, as: Tag = 'article' }: HoverLiftCardProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const Component = Tag as ElementType;

  const handlers =
    reduced
      ? {}
      : {
          onMouseEnter: () => {
            const el = ref.current;
            if (el) {
              animate(el, {
                translateY: -4,
                duration: DURATION.fast,
                ease: EASE_PREMIUM,
              });
            }
          },
          onMouseLeave: () => {
            const el = ref.current;
            if (el) {
              animate(el, { translateY: 0, duration: DURATION.fast, ease: EASE_PREMIUM });
            }
          },
        };

  return (
    <Card3DTilt intensity={8}>
      <Component
        ref={ref}
        className={cn(
          'glass-card group relative overflow-hidden transition-colors duration-300',
          'hover:border-ride-accent/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(255,122,0,0.08)]',
          className
        )}
        {...handlers}
      >
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
          style={{
            background:
              'radial-gradient(600px circle at 50% 0%, rgba(255,122,0,0.06), transparent 40%)',
          }}
        />
        {title ? <h3 className="relative mb-2 text-lg font-semibold text-white">{title}</h3> : null}
        <div
          className={cn(
            'relative text-ride-muted',
            '[&_a:not([data-ride-btn])]:font-semibold [&_a:not([data-ride-btn])]:text-ride-accent [&_a:not([data-ride-btn])]:no-underline',
            'hover:[&_a:not([data-ride-btn])]:underline',
            '[&_a[data-ride-btn].bg-ride-accent]:!text-[#0A0A0A] hover:[&_a[data-ride-btn].bg-ride-accent]:!text-[#0A0A0A]'
          )}
        >
          {children}
        </div>
      </Component>
    </Card3DTilt>
  );
}
