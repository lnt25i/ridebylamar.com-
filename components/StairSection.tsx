'use client';

import { FloatUp3D } from '@/components/FloatUp3D';
import type { ReactNode } from 'react';

type StairSectionProps = {
  children: ReactNode;
  index?: number;
  className?: string;
  /** When false, renders a plain wrapper (e.g. legal pages). */
  enable3D?: boolean;
};

/** Scroll-enter section with 3D float-up (replaces legacy stair reveal). */
export function StairSection({ children, index = 0, className, enable3D = true }: StairSectionProps) {
  if (!enable3D) {
    return <div className={className}>{children}</div>;
  }
  return (
    <FloatUp3D index={index} className={className}>
      {children}
    </FloatUp3D>
  );
}
