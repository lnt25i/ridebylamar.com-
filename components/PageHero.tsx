'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, type ReactNode } from 'react';

import { AnimatedGlowBackground } from '@/components/animations/AnimatedGlowBackground';
import { Parallax3DHero } from '@/components/Parallax3DHero';
import { animate, createHeroTimeline } from '@/lib/animations/anime';
import { DURATION } from '@/lib/animations/config';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

const EASE_HERO = [0.22, 1, 0.36, 1] as const;

type PageHeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  centered?: boolean;
  subtle?: boolean;
  parallax?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  centered = false,
  subtle = false,
  parallax = true,
}: PageHeroProps) {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reduced || !sectionRef.current) return;
    const eyebrowEl = sectionRef.current.querySelector('[data-page-eyebrow]');
    if (!eyebrowEl) return;
    const tl = createHeroTimeline(reduced);
    tl.add(eyebrowEl, { opacity: [0, 1], translateY: [12, 0], duration: DURATION.fast });
    return () => {
      tl.revert();
    };
  }, [reduced, eyebrow]);

  const containerClass = cn('container-site relative z-[1]', centered ? 'text-center' : '');

  const heroContent = (
    <>
      {eyebrow ? (
        <p data-page-eyebrow className={cn('eyebrow', !reduced && 'opacity-0')}>
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        reduced ? (
          <h1
            className={cn(
              'mb-4 max-w-3xl font-bold tracking-tight',
              centered ? 'mx-auto' : '',
              subtle ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'
            )}
            style={{ color: '#FF9500', fontWeight: 700 }}
          >
            {title}
          </h1>
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.75, ease: EASE_HERO }}
            className={cn(
              'mb-4 max-w-3xl font-bold tracking-tight',
              centered ? 'mx-auto' : '',
              subtle ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'
            )}
            style={{ color: '#FF9500', fontWeight: 700 }}
          >
            {title}
          </motion.h1>
        )
      ) : null}
      {description ? (
        reduced ? (
          <p className={cn('max-w-2xl text-lg text-ride-muted', centered ? 'mx-auto' : '')}>{description}</p>
        ) : (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_HERO }}
            className={cn('max-w-2xl text-lg text-ride-muted', centered ? 'mx-auto' : '')}
          >
            {description}
          </motion.p>
        )
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </>
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-ride-border bg-hero-gradient py-16 md:py-20"
    >
      {!subtle ? <AnimatedGlowBackground variant="section" /> : null}
      {parallax ? (
        <Parallax3DHero className={containerClass}>{heroContent}</Parallax3DHero>
      ) : (
        <div className={containerClass}>{heroContent}</div>
      )}
    </section>
  );
}
