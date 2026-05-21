'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

const EASE_REVEAL = [0.22, 1, 0.36, 1] as const;

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'footer' | 'form';
  delay?: number;
  subtle?: boolean;
  once?: boolean;
};

const tagMap = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  footer: motion.footer,
  form: motion.form,
};

export function RevealOnScroll({
  children,
  className,
  as: Tag = 'div',
  delay = 0,
  subtle = false,
  once = true,
}: RevealOnScrollProps) {
  const reduced = useReducedMotion();
  const MotionTag = tagMap[Tag];

  if (reduced) {
    const Plain = Tag;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y: subtle ? 30 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: EASE_REVEAL }}
      data-anime-reveal
    >
      {children}
    </MotionTag>
  );
}
