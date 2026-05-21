/** Shared timing and viewport settings for Anime.js animations. */

export const DURATION = {
  fast: 380,
  normal: 580,
  slow: 720,
  hero: 920,
} as const;

/** Premium ease-out curve (Anime.js v4 `out` power curve). */
export const EASE_PREMIUM = 'out(3)' as const;

export const STAGGER_STEP = 90;
export const STAGGER_START = 60;

export const VIEWPORT_MARGIN = '-48px';
export const VIEWPORT_THRESHOLD = 0.12;
