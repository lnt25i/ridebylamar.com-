'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { useLightMotion } from '@/hooks/useLightMotion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroHeadline({ text, className }: { text: string; className?: string }) {
  const reduced = useReducedMotion();
  const lightMotion = useLightMotion();
  const words = text.split(' ');

  if (reduced) {
    return <h1 className={className}>{text}</h1>;
  }

  if (lightMotion) {
    return (
      <motion.h1
        className={className}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {text}
      </motion.h1>
    );
  }

  return (
    <h1 className={cn('flex flex-wrap justify-center gap-x-[0.3em] gap-y-1', className)} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 24, rotateX: 18 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

export function HeroSubtextFade({
  children,
  wordCount,
  className,
  delayExtra = 0,
}: {
  children: ReactNode;
  wordCount: number;
  className?: string;
  delayExtra?: number;
}) {
  const reduced = useReducedMotion();
  const lightMotion = useLightMotion();

  if (reduced) {
    return <p className={className}>{children}</p>;
  }

  const delay = lightMotion ? 0.2 + delayExtra : wordCount * 0.08 + 0.28 + delayExtra;

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: lightMotion ? 10 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: lightMotion ? 0.45 : 0.6, delay, ease: EASE }}
      style={lightMotion ? undefined : { transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.p>
  );
}
