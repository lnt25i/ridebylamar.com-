'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { LogoGlowMotion } from '@/components/animations/LogoGlowMotion';
import { RideLogo } from '@/components/RideLogo';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

type AnimatedLogoProps = {
  width?: number;
  href?: string;
  className?: string;
  priority?: boolean;
  /** Run entrance on mount (hero) vs hover-only (header) */
  entrance?: boolean;
};

export function AnimatedLogo({
  width = 128,
  href,
  className,
  priority,
  entrance = false,
}: AnimatedLogoProps) {
  const reduced = useReducedMotion();

  const inner = (
    <LogoGlowMotion className={className} pulse>
      <motion.div
        initial={entrance && !reduced ? { opacity: 0, scale: 0.94 } : false}
        animate={entrance && !reduced ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn('relative inline-block')}
      >
        <RideLogo width={width} priority={priority} className="relative" />
      </motion.div>
    </LogoGlowMotion>
  );

  if (href) {
    return (
      <Link href={href} aria-label="RIDE home" className="block shrink-0">
        {inner}
      </Link>
    );
  }

  return inner;
}
