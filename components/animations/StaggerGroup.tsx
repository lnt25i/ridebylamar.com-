'use client';

import { motion } from 'framer-motion';
import { createElement, type ElementType, type ReactNode } from 'react';

import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

const EASE_REVEAL = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_REVEAL },
  },
};

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'ul';
};

export function StaggerGroup({ children, className, as: Tag = 'div' }: StaggerGroupProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return createElement(Tag, { className: cn(className) }, children);
  }

  const motionProps = {
    className: cn(className),
    variants: containerVariants,
    initial: 'hidden' as const,
    whileInView: 'show' as const,
    viewport: { once: true, margin: '-80px' },
  };

  if (Tag === 'ul') {
    return <motion.ul {...motionProps}>{children}</motion.ul>;
  }
  if (Tag === 'section') {
    return <motion.section {...motionProps}>{children}</motion.section>;
  }
  return <motion.div {...motionProps}>{children}</motion.div>;
}

export function StaggerItem({
  children,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return createElement(Tag, { className: cn(className) }, children);
  }

  const itemProps = {
    className: cn(className),
    variants: itemVariants,
    'data-stagger-item': true,
  };

  if (Tag === 'li') {
    return <motion.li {...itemProps}>{children}</motion.li>;
  }
  if (Tag === 'section') {
    return <motion.section {...itemProps}>{children}</motion.section>;
  }
  return <motion.div {...itemProps}>{children}</motion.div>;
}
