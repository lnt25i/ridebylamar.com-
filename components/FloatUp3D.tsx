'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

import { useLightMotion } from '@/hooks/useLightMotion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export function FloatUp3D({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const lightMotion = useLightMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  if (lightMotion) {
    return (
      <motion.div
        className={cn(className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-32px' }}
        transition={{ duration: 0.45, delay: index * 0.05, ease: EASE_PREMIUM }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 40, rotateX: 12, z: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: EASE_PREMIUM }}
      style={{ transformStyle: 'preserve-3d', perspective: 800 }}
    >
      {children}
    </motion.div>
  );
}
