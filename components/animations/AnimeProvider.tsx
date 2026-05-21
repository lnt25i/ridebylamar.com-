'use client';

import { usePathname } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';

import { revertAllAnimations } from '@/lib/animations/anime';

/** Cleans up Anime.js instances on client route changes. */
export function AnimeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    return () => revertAllAnimations();
  }, [pathname]);

  return children;
}
