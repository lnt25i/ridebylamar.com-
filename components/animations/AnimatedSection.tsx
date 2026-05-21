'use client';

import type { ReactNode } from 'react';

import { FloatUp3D } from '@/components/FloatUp3D';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  index?: number;
  enable3D?: boolean;
};

/** Scroll-reveal section wrapper */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  index = 0,
  enable3D = true,
}: AnimatedSectionProps) {
  const section = (
    <RevealOnScroll as="section" className={className} delay={delay}>
      {children}
    </RevealOnScroll>
  );
  if (!enable3D) return section;
  return <FloatUp3D index={index}>{section}</FloatUp3D>;
}

/** @deprecated Use AnimatedSection */
export const MotionSection = AnimatedSection;
