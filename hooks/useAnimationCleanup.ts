'use client';

import { useEffect } from 'react';

import { revertAllAnimations } from '@/lib/animations/anime';

/** Revert tracked Anime.js instances when the component unmounts. */
export function useAnimationCleanup(deps: unknown[] = []): void {
  useEffect(() => {
    return () => {
      revertAllAnimations();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional cleanup deps
  }, deps);
}
