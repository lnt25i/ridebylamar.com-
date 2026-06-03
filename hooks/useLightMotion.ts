'use client';

import { useCoarsePointer } from '@/hooks/useCoarsePointer';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/** Prefer simpler animations on mobile/touch or when reduced motion is requested. */
export function useLightMotion(): boolean {
  const reduced = useReducedMotion();
  const coarse = useCoarsePointer();
  return reduced || coarse;
}
