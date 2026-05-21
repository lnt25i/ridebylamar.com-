'use client';

import { useEffect, useRef } from 'react';

import { animate, stagger, trackAnimation } from '@/lib/animations/anime';
import { splitText } from 'animejs';
import { DURATION, EASE_PREMIUM, STAGGER_STEP } from '@/lib/animations/config';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

type AnimatedTextProps = {
  text: string;
  as?: 'h1' | 'h2' | 'p' | 'span';
  className?: string;
  /** Split by words (hero) or skip split for reduced/subtle */
  split?: 'words' | 'none';
};

export function AnimatedText({ text, as: Tag = 'h1', className, split = 'words' }: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced || split === 'none') {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    const splitter = splitText(el, { words: true, accessible: true });
    splitter.split();

    const anim = animate(splitter.words, {
      opacity: [0, 1],
      translateY: ['0.45em', 0],
      delay: stagger(STAGGER_STEP, { start: 80 }),
      duration: DURATION.slow,
      ease: EASE_PREMIUM,
    });

    trackAnimation(splitter);
    trackAnimation(anim);

    return () => {
      anim.revert();
      splitter.revert();
    };
  }, [text, reduced, split]);

  return (
    <Tag ref={ref as never} className={cn(className, !reduced && split === 'words' && 'opacity-0')}>
      {text}
    </Tag>
  );
}
