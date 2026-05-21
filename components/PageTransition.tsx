'use client';

import type { ReactNode } from 'react';

/** Route content wrapper — header/footer stay outside. */
export function PageTransition({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
