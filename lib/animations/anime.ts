import { animate, createTimeline, stagger } from 'animejs';
import type { JSAnimation, ScrollObserver, TextSplitter, Timeline } from 'animejs';

import { DURATION, EASE_PREMIUM, STAGGER_START, STAGGER_STEP } from '@/lib/animations/config';

export type Revertible = JSAnimation | Timeline | TextSplitter | ScrollObserver;

const activeAnimations = new Set<Revertible>();

/** Track an animation for route-change / unmount cleanup. */
export function trackAnimation<T extends Revertible>(instance: T | null | undefined): T | null {
  if (!instance) return null;
  activeAnimations.add(instance);
  return instance;
}

/** Revert all tracked Anime.js instances (e.g. on client route change). */
export function revertAllAnimations(): void {
  activeAnimations.forEach((instance) => {
    try {
      instance.revert();
    } catch {
      /* already reverted */
    }
  });
  activeAnimations.clear();
}

export function untrackAnimation(instance: Revertible): void {
  activeAnimations.delete(instance);
}

export function runFadeUp(
  targets: Element | Element[] | NodeListOf<Element>,
  reduced: boolean,
  options?: { delay?: number; duration?: number; translateY?: number }
): JSAnimation | null {
  const els = targets instanceof NodeList ? Array.from(targets) : Array.isArray(targets) ? targets : [targets];
  if (!els.length) return null;

  const anim = animate(els, {
    opacity: reduced ? 1 : [0, 1],
    translateY: reduced ? 0 : [options?.translateY ?? 28, 0],
    duration: reduced ? 0 : (options?.duration ?? DURATION.normal),
    delay: options?.delay ?? 0,
    ease: EASE_PREMIUM,
  });

  return trackAnimation(anim);
}

export function runStaggerFadeUp(
  container: Element,
  reduced: boolean,
  selector = '[data-stagger-item]'
): JSAnimation | null {
  const items = container.querySelectorAll(selector);
  if (!items.length) return null;

  const anim = animate(items, {
    opacity: reduced ? 1 : [0, 1],
    translateY: reduced ? 0 : [20, 0],
    delay: reduced ? 0 : stagger(STAGGER_STEP, { start: STAGGER_START }),
    duration: reduced ? 0 : DURATION.normal,
    ease: EASE_PREMIUM,
  });

  return trackAnimation(anim);
}

export function createHeroTimeline(reduced: boolean): Timeline {
  const tl = createTimeline({
    defaults: {
      ease: EASE_PREMIUM,
      duration: reduced ? 0 : DURATION.hero,
    },
  });
  return trackAnimation(tl) as Timeline;
}

export { animate, stagger, createTimeline, DURATION, EASE_PREMIUM };
