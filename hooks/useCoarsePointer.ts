'use client';

import { useEffect, useState } from 'react';

function getCoarsePointer(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(max-width: 767px)').matches
  );
}

/** True on touch-first devices and narrow viewports — use for lighter motion, not full static. */
export function useCoarsePointer(): boolean {
  const [coarse, setCoarse] = useState(getCoarsePointer);

  useEffect(() => {
    const pointerMq = window.matchMedia('(pointer: coarse)');
    const widthMq = window.matchMedia('(max-width: 767px)');
    const update = () => setCoarse(pointerMq.matches || widthMq.matches);
    update();
    pointerMq.addEventListener('change', update);
    widthMq.addEventListener('change', update);
    return () => {
      pointerMq.removeEventListener('change', update);
      widthMq.removeEventListener('change', update);
    };
  }, []);

  return coarse;
}
